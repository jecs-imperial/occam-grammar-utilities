'use strict';

const exampleBNF = `

    L ::= L! "c"

        | "a"

        | "a" "b"

        ;

`;

module.exports = exampleBNF;

/*



    part                 ::= part "?"

                           | part "!"

                           | ruleName

                           ;

    ruleName             ::= [custom] ;





  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;






  expression              ::= compoundExpression

                            | "(" expression ")"

                            | term

                            ;

  compoundExpression     ::= expression operator expression

                            | "xyz"

                            ;






    S  ::= A C ;

    A  ::= "." B ;

    B  ::= A | "." C ;

    C  ::= D E ;

    D  ::= C ;

    E  ::= "." ;




  part             ::= zeroOrMoreParts

                     | optionalPart

                     | ruleName

                     ;

  zeroOrMoreParts  ::= part "*" ;

  optionalPart     ::= part "?" ;

  ruleName         ::= [custom] ;







                 expression  ::=  arithmeticExpression

                               |  "xyz"

                               ;


       arithmeticExpression  ::=  addition ;


                   addition  ::=  expression "+" expression ;










  definition     ::= part+ ;

  optionalPart   ::= part "?" ;

  part           ::= optionalPart

                   | ruleName

                   ;

  ruleName       ::= [custom] ;













  definition      ::= part+ ;


  optionalPart    ::= part "?" ;

  lookAheadPart   ::= part "!" ;


  part            ::= optionalPart

                    | lookAheadPart

                    | ruleName

                    ;


  ruleName        ::= [custom] ;











  part           ::= part "?"

                   | part "!"

                   | ruleName

                   ;


  ruleName       ::= [custom] ;














  part            ::= optionalPart

                    | lookAheadPart

                    | ruleName

                    ;


  optionalPart    ::= part "?" ;

  lookAheadPart   ::= part "!" ;


  ruleName        ::= [custom] ;











  expression              ::= compoundExpression

                            | "(" expression ")"

                            | term

                            ;

  compoundExpression     ::= expression operator expression ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;








  expression              ::= intermediateExpression

                            | "(" expression ")"

                            | term

                            ;

  intermediateExpression  ::= compoundExpression ;

  compoundExpression      ::= expression operator expression ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;







  expression    ::= "(" expression ")" expression~

                  | term expression~

                  ;

  expression~   ::= operator expression expression~

                  | ε

                  ;

  operator      ::= "+"

                  | "/"

                  ;

  term          ::= /\d+/ ;




























  expression                  ::= parenthesisedExpression compoundExpression~

                                | negatedExpression compoundExpression~

                                | term compoundExpression~

                                ;


  parenthesisedExpression     ::= "(" expression ")" ;


  negatedExpression           ::= "-" expression ;


  compoundExpression~         ::= "+" expression compoundExpression~

                                | "/" expression compoundExpression~

                                | ε

                                ;


  term                        ::= /\d+/ ;






















  expression                  ::= parenthesisedExpression quotient~ sum~

                                | compoundExpression quotient~ sum~

                                | term quotient~ sum~

                                ;


  parenthesisedExpression     ::= "(" expression ")" ;


  compoundExpression          ::= negation

                                ;


  negation                    ::= "-" expression ;


  term                        ::= /\d+/ ;


  quotient~                   ::= "/" expression quotient~

                                | ε

                                ;


  sum~                        ::= "+" expression sum~

                                | ε

                                ;




























  expression                  ::= parenthesisedExpression quotient~ sum~

                                | compoundExpression quotient~ sum~

                                | term quotient~ sum~

                                ;


  parenthesisedExpression     ::= "(" expression ")" ;


  compoundExpression          ::= negation

                                ;


  negation                    ::= "-" expression ;


  term                        ::= /\d+/ ;


  quotient~                   ::= "/" expression quotient~

                                | ε

                                ;


  sum~                        ::= "+" expression sum~

                                | ε

                                ;










 */
