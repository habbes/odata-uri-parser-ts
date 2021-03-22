grammar ODataUriQuery;

queryOptions: queryOption queryOptionsList;
queryOptionsList: AMP queryOptionsList | ;
queryOption: filterOption;
filterOption: FILTER ASSIGN expression;
expression: orExpression;
orExpression:  andExpression | orExpression OR andExpression;
andExpression: compExpression | andExpression AND compExpression;
compExpression: basicExpression | compExpression compOperator basicExpression;
basicExpression: NUMBER | identifier | parenExpression;
parenExpression: LPAREN expression RPAREN;
compOperator: EQ | NEQ | GTE | GT | LTE | LT;
identifier: ID;



FILTER: '$filter';
OR: 'or';
AND: 'and';
EQ: 'eq';
NEQ: 'neq';
GT: 'gt';
GTE: 'gte';
LT: 'lt';
LTE: 'lte';
AMP: '&';
ASSIGN: '=';
LPAREN: '(';
RPAREN: ')';
ID: [a-zA-Z]+;
NUMBER: [0-9]+;
WS: [ ] -> skip;

