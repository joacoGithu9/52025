grammar GraLang;

programa
    : funcion+ EOF
    ;

funcion
    : 'funcion' IDENTIFICADOR '(' parametros? ')' '{' instrucciones '}'  // <-- sin “?”
    ;

parametros
    : IDENTIFICADOR (',' IDENTIFICADOR)*
    ;

instrucciones
    : (leer | escribir | asignacion)*   // ya admite vacío
    ;

leer
    : 'leer' '(' IDENTIFICADOR ')' ';'
    ;

escribir
    : 'escribir' '(' expresion ')' ';'
    ;

asignacion
    : IDENTIFICADOR '=' expresion ';'
    ;

expresion
    : NUMERO
    | CADENA
    | IDENTIFICADOR
    ;

IDENTIFICADOR 
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;

NUMERO
    : [0-9]+
    ;

CADENA
    : '"' (~["\r\n])* '"'
    ;

WS
    : [ \t\r\n]+ -> skip
    ;

LINE_COMMENT
    : '//' ~[\r\n]* -> skip
    ;

BLOCK_COMMENT
    : '/*' .*? '*/' -> skip
    ;
