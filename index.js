import fs from 'fs/promises';
import readline from 'readline';

// -------------------------
// Tokenizer
// -------------------------
const tokenSpecs = [
  ['WHITESPACE', /^[ \t\r\n]+/],
  ['BLOCK_COMMENT', /^\/\*[\s\S]*?\*\//],
  ['LINE_COMMENT', /^\/\/.*(?=\n|$)/],
  ['FUNCION', /^funcion\b/],
  ['LEER', /^leer\b/],
  ['ESCRIBIR', /^escribir\b/],
  ['NUMBER', /^[0-9]+/],
  ['STRING', /^"([^"\\]|\\.)*"/],
  ['IDENT', /^[a-zA-Z_][a-zA-Z0-9_]*/],
  ['LBRACE', /^\{/],
  ['RBRACE', /^\}/],
  ['LPAREN', /^\(/],
  ['RPAREN', /^\)/],
  ['COMMA', /^,/],
  ['SEMI', /^;/],
  ['EQ', /^=/],
];

function tokenize(input) {
  let tokens = [];
  let pos = 0, line = 1, col = 1;
  while (pos < input.length) {
    let match = null;
    for (const [type, regex] of tokenSpecs) {
      match = regex.exec(input.slice(pos));
      if (match) {
        const text = match[0];
        if (!['WHITESPACE','LINE_COMMENT','BLOCK_COMMENT'].includes(type)) {
          tokens.push({ type, text, line, col });
        }
        const nl = text.match(/\n/g);
        if (nl) {
          line += nl.length;
          col = text.length - text.lastIndexOf('\n');
        } else {
          col += text.length;
        }
        pos += text.length;
        break;
      }
    }
    if (!match) {
      throw new SyntaxError(`Unexpected token at ${line}:${col} -> "${input[pos]}"`);
    }
  }
  tokens.push({ type: 'EOF', text: '', line, col });
  return tokens;
}

// -------------------------
// Parser (recursive descent)
// -------------------------
class Parser {
  constructor(tokens) { this.tokens = tokens; this.pos = 0; }
  peek() { return this.tokens[this.pos]; }
  next() { return this.tokens[this.pos++]; }
  expect(type) {
    const tok = this.peek();
    if (tok.type === type) return this.next();
    throw new SyntaxError(`Expected ${type} at ${tok.line}:${tok.col}, got ${tok.type}`);
  }

  parseProgram() {
    let funcs = [];
    while (this.peek().type === 'FUNCION') funcs.push(this.parseFunction());
    this.expect('EOF');
    return { type: 'Program', functions: funcs };
  }

  parseFunction() {
    this.expect('FUNCION');
    const name = this.expect('IDENT').text;
    this.expect('LPAREN');
    const params = this.peek().type !== 'RPAREN' ? this.parseParameters() : [];
    this.expect('RPAREN');
    this.expect('LBRACE');
    const instrs = this.parseInstructions();
    this.expect('RBRACE');
    return { type: 'Function', name, params, instrs };
  }

  parseParameters() {
    const ids = [this.expect('IDENT').text];
    while (this.peek().type === 'COMMA') { this.next(); ids.push(this.expect('IDENT').text); }
    return ids;
  }

  parseInstructions() {
    const list = [];
    while (['LEER','ESCRIBIR','IDENT'].includes(this.peek().type)) {
      if (this.peek().type === 'LEER') list.push(this.parseLeer());
      else if (this.peek().type === 'ESCRIBIR') list.push(this.parseEscribir());
      else list.push(this.parseAsignacion());
    }
    return list;
  }

  parseLeer() {
    this.expect('LEER'); this.expect('LPAREN');
    const id = this.expect('IDENT').text; this.expect('RPAREN'); this.expect('SEMI');
    return { type: 'Leer', name: id };
  }

  parseEscribir() {
    this.expect('ESCRIBIR'); this.expect('LPAREN');
    const expr = this.parseExpr(); this.expect('RPAREN'); this.expect('SEMI');
    return { type: 'Escribir', expr };
  }

  parseAsignacion() {
    const name = this.expect('IDENT').text;
    this.expect('EQ'); const expr = this.parseExpr(); this.expect('SEMI');
    return { type: 'Asignacion', name, expr };
  }

  parseExpr() {
    const tok = this.peek();
    if (tok.type === 'NUMBER') { this.next(); return { type: 'Literal', value: Number(tok.text) }; }
    if (tok.type === 'STRING') { this.next(); return { type: 'Literal', value: tok.text.slice(1,-1) }; }
    if (tok.type === 'IDENT') { this.next(); return { type: 'Variable', name: tok.text }; }
    throw new SyntaxError(`Unexpected expression at ${tok.line}:${tok.col}`);
  }
}

// -------------------------
// AST and Code Generation
// -------------------------
function printAST(node, indent = '') {
  let out = indent + node.type;
  if (node.name) out += `(${node.name})`;
  if (node.value !== undefined) out += `: ${node.value}`;
  out += '\n';
  if (node.params) node.params.forEach(p => out += indent + '  param: ' + p + '\n');
  if (node.functions) node.functions.forEach(f => out += printAST(f, indent + '  '));
  if (node.instrs) node.instrs.forEach(i => out += printAST(i, indent + '  '));
  if (node.expr) out += printAST(node.expr, indent + '  ');
  return out;
}

function genExpr(expr) {
  if (expr.type === 'Literal') return JSON.stringify(expr.value);
  if (expr.type === 'Variable') return expr.name;
}

function generateJS(ast) {
  let js = '';
  for (const func of ast.functions) {
    js += `async function ${func.name}(${func.params.join(', ')}) {\n`;
    for (const instr of func.instrs) {
      if (instr.type === 'Leer') {
        js += `  ${instr.name} = await question(\`Ingrese ${instr.name}: \`);\n`;
      } else if (instr.type === 'Escribir') {
        js += `  console.log(${genExpr(instr.expr)});\n`;
      } else if (instr.type === 'Asignacion') {
        js += `  ${instr.name} = ${genExpr(instr.expr)};\n`;
      }
    }
    js += '}\n';
    js += `${func.name}(${func.params.join(', ')});\n\n`;
  }
  return js;
}

// -------------------------
// Interpreter (basic visitor)
// -------------------------
async function interpret(ast) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const question = (q) => new Promise(res => rl.question(q, res));
  const env = {};

  // Provide question to generated code
  global.question = question;

  for (const func of ast.functions) {
    for (const instr of func.instrs) {
      if (instr.type === 'Leer') {
        env[instr.name] = await question(`Ingrese ${instr.name}: `);
        if (/^\d+$/.test(env[instr.name])) env[instr.name] = Number(env[instr.name]);
      } else if (instr.type === 'Escribir') {
        console.log(instr.expr.value !== undefined ? instr.expr.value : env[instr.expr.name]);
      } else if (instr.type === 'Asignacion') {
        env[instr.name] = instr.expr.value !== undefined ? instr.expr.value : env[instr.expr.name];
      }
    }
  }
  rl.close();
}

// -------------------------
// Main
// -------------------------
(async () => {
  try {
    const input = await fs.readFile('input.txt', 'utf8');

    console.log('=== Tabla de lexemas y tokens ===');
    const tokens = tokenize(input);
    tokens.forEach(t => console.log(`line ${t.line}\t"${t.text}" -> ${t.type}`));

    console.log('\n=== Árbol de análisis sintáctico ===');
    const parser = new Parser(tokens);
    const ast = parser.parseProgram();
    console.log(printAST(ast));

    console.log('=== Código JS generado ===');
    const jsCode = generateJS(ast);
    console.log(jsCode);

    console.log('=== Interpretación ===');
    await interpret(ast);
  } catch (e) {
    console.error(e.message);
  }
})();