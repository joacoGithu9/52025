// Generated from c:/Users/alejo/ssl-antlr-calculator/GraLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GraLangListener from './GraLangListener.js';
import GraLangVisitor from './GraLangVisitor.js';

const serializedATN = [4,1,16,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,1,1,
1,1,3,1,28,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,38,8,2,10,2,12,2,41,9,
2,1,3,1,3,1,3,5,3,46,8,3,10,3,12,3,49,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,
5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,
14,0,1,1,0,11,13,67,0,17,1,0,0,0,2,23,1,0,0,0,4,34,1,0,0,0,6,47,1,0,0,0,
8,50,1,0,0,0,10,56,1,0,0,0,12,62,1,0,0,0,14,67,1,0,0,0,16,18,3,2,1,0,17,
16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,
5,0,0,1,22,1,1,0,0,0,23,24,5,1,0,0,24,25,5,11,0,0,25,27,5,2,0,0,26,28,3,
4,2,0,27,26,1,0,0,0,27,28,1,0,0,0,28,29,1,0,0,0,29,30,5,3,0,0,30,31,5,4,
0,0,31,32,3,6,3,0,32,33,5,5,0,0,33,3,1,0,0,0,34,39,5,11,0,0,35,36,5,6,0,
0,36,38,5,11,0,0,37,35,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,
40,5,1,0,0,0,41,39,1,0,0,0,42,46,3,8,4,0,43,46,3,10,5,0,44,46,3,12,6,0,45,
42,1,0,0,0,45,43,1,0,0,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,
1,0,0,0,48,7,1,0,0,0,49,47,1,0,0,0,50,51,5,7,0,0,51,52,5,2,0,0,52,53,5,11,
0,0,53,54,5,3,0,0,54,55,5,8,0,0,55,9,1,0,0,0,56,57,5,9,0,0,57,58,5,2,0,0,
58,59,3,14,7,0,59,60,5,3,0,0,60,61,5,8,0,0,61,11,1,0,0,0,62,63,5,11,0,0,
63,64,5,10,0,0,64,65,3,14,7,0,65,66,5,8,0,0,66,13,1,0,0,0,67,68,7,0,0,0,
68,15,1,0,0,0,5,19,27,39,45,47];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GraLangParser extends antlr4.Parser {

    static grammarFileName = "GraLang.g4";
    static literalNames = [ null, "'funcion'", "'('", "')'", "'{'", "'}'", 
                            "','", "'leer'", "';'", "'escribir'", "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "IDENTIFICADOR", "NUMERO", 
                             "CADENA", "WS", "LINE_COMMENT", "BLOCK_COMMENT" ];
    static ruleNames = [ "programa", "funcion", "parametros", "instrucciones", 
                         "leer", "escribir", "asignacion", "expresion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GraLangParser.ruleNames;
        this.literalNames = GraLangParser.literalNames;
        this.symbolicNames = GraLangParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GraLangParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.funcion();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 21;
	        this.match(GraLangParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GraLangParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(GraLangParser.T__0);
	        this.state = 24;
	        this.match(GraLangParser.IDENTIFICADOR);
	        this.state = 25;
	        this.match(GraLangParser.T__1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 26;
	            this.parametros();
	        }

	        this.state = 29;
	        this.match(GraLangParser.T__2);
	        this.state = 30;
	        this.match(GraLangParser.T__3);
	        this.state = 31;
	        this.instrucciones();
	        this.state = 32;
	        this.match(GraLangParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GraLangParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(GraLangParser.IDENTIFICADOR);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 35;
	            this.match(GraLangParser.T__5);
	            this.state = 36;
	            this.match(GraLangParser.IDENTIFICADOR);
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GraLangParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2688) !== 0)) {
	            this.state = 45;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 7:
	                this.state = 42;
	                this.leer();
	                break;
	            case 9:
	                this.state = 43;
	                this.escribir();
	                break;
	            case 11:
	                this.state = 44;
	                this.asignacion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GraLangParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(GraLangParser.T__6);
	        this.state = 51;
	        this.match(GraLangParser.T__1);
	        this.state = 52;
	        this.match(GraLangParser.IDENTIFICADOR);
	        this.state = 53;
	        this.match(GraLangParser.T__2);
	        this.state = 54;
	        this.match(GraLangParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escribir() {
	    let localctx = new EscribirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GraLangParser.RULE_escribir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(GraLangParser.T__8);
	        this.state = 57;
	        this.match(GraLangParser.T__1);
	        this.state = 58;
	        this.expresion();
	        this.state = 59;
	        this.match(GraLangParser.T__2);
	        this.state = 60;
	        this.match(GraLangParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GraLangParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(GraLangParser.IDENTIFICADOR);
	        this.state = 63;
	        this.match(GraLangParser.T__9);
	        this.state = 64;
	        this.expresion();
	        this.state = 65;
	        this.match(GraLangParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GraLangParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14336) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GraLangParser.EOF = antlr4.Token.EOF;
GraLangParser.T__0 = 1;
GraLangParser.T__1 = 2;
GraLangParser.T__2 = 3;
GraLangParser.T__3 = 4;
GraLangParser.T__4 = 5;
GraLangParser.T__5 = 6;
GraLangParser.T__6 = 7;
GraLangParser.T__7 = 8;
GraLangParser.T__8 = 9;
GraLangParser.T__9 = 10;
GraLangParser.IDENTIFICADOR = 11;
GraLangParser.NUMERO = 12;
GraLangParser.CADENA = 13;
GraLangParser.WS = 14;
GraLangParser.LINE_COMMENT = 15;
GraLangParser.BLOCK_COMMENT = 16;

GraLangParser.RULE_programa = 0;
GraLangParser.RULE_funcion = 1;
GraLangParser.RULE_parametros = 2;
GraLangParser.RULE_instrucciones = 3;
GraLangParser.RULE_leer = 4;
GraLangParser.RULE_escribir = 5;
GraLangParser.RULE_asignacion = 6;
GraLangParser.RULE_expresion = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraLangParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(GraLangParser.EOF, 0);
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GraLangVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraLangParser.RULE_funcion;
    }

	IDENTIFICADOR() {
	    return this.getToken(GraLangParser.IDENTIFICADOR, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GraLangVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraLangParser.RULE_parametros;
    }

	IDENTIFICADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GraLangParser.IDENTIFICADOR);
	    } else {
	        return this.getToken(GraLangParser.IDENTIFICADOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GraLangVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraLangParser.RULE_instrucciones;
    }

	leer = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LeerContext);
	    } else {
	        return this.getTypedRuleContext(LeerContext,i);
	    }
	};

	escribir = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscribirContext);
	    } else {
	        return this.getTypedRuleContext(EscribirContext,i);
	    }
	};

	asignacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsignacionContext);
	    } else {
	        return this.getTypedRuleContext(AsignacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GraLangVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraLangParser.RULE_leer;
    }

	IDENTIFICADOR() {
	    return this.getToken(GraLangParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GraLangVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscribirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraLangParser.RULE_escribir;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.enterEscribir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.exitEscribir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GraLangVisitor ) {
	        return visitor.visitEscribir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraLangParser.RULE_asignacion;
    }

	IDENTIFICADOR() {
	    return this.getToken(GraLangParser.IDENTIFICADOR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GraLangVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraLangParser.RULE_expresion;
    }

	NUMERO() {
	    return this.getToken(GraLangParser.NUMERO, 0);
	};

	CADENA() {
	    return this.getToken(GraLangParser.CADENA, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(GraLangParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraLangListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GraLangVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




GraLangParser.ProgramaContext = ProgramaContext; 
GraLangParser.FuncionContext = FuncionContext; 
GraLangParser.ParametrosContext = ParametrosContext; 
GraLangParser.InstruccionesContext = InstruccionesContext; 
GraLangParser.LeerContext = LeerContext; 
GraLangParser.EscribirContext = EscribirContext; 
GraLangParser.AsignacionContext = AsignacionContext; 
GraLangParser.ExpresionContext = ExpresionContext; 
