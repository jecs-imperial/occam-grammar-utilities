# Grammar Utilities

[Occam](https://github.com/jecs-imperial/occam)'s grammar utilities.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

## Introduction

This package provides the means to eliminate left recursion, the achilles heel of top-down parsers. Consider the following:
```
expression    ::= expression operator expression

                | "(" expression ")"

                | term

                ;

operator      ::= "+" | "-" | "/" | "*" ;

term          ::= [number] ;

```
Here the first rule is left recursive. When the parser encounters this rule it will immediately enter an infinite loop as it tries to evaluate the right hand side. This is an example of immediate left recursion. To remedy it, the rule can be rewritten to be right recursive. The first definition `expression operator expression` is discarded and a the name of a new, right recursive rule `expression~` is appended to the remaining two definitions. The new, right recursive rule itself consists of two definitions, the first of which `operator expression expression~` is right recursive, the second of which consists of a single terminating part `ε` which permits the parser to continue when the first definition no longer results in a match:

```
expression    ::= "(" expression ")" expression~

                | term expression~

                ;

operator      ::= "+" | "-" | "/" | "*" ;

term          ::= [number] ;

expression~   ::= operator expression expression~

                | ε

                ;
```
It is well worth a few minutes to convince yourself that this makes sense. Here is the parse tree of the expression `(1+2)/3` that results from the use of this amended BNF:
```
                                      expression
                                           |
     ------------------------------------------------------------------------------
     |                       |                          |                         |
([terminal              expression                 )[terminal]               expression~
                             |                                                    |
               ----------------------------                          ------------------------------
               |                          |                          |              |             |
             term                    expression~                 operator      expression    expression~
               |                          |                          |              |             |
            number        --------------------------------      /[terminal]    -----------        ε
               |          |               |              |                     |         |
          1[terminal]  operator      expression     expression~              term   expression~
                          |               |              |                     |         |
                     +[terminal]    -------------        ε                  number       ε
                                    |           |                              |
                                  term     expression~                    3[terminal]
                                    |           |
                                 number         ε
                                    |
                               2[terminal]
```
The implementation of an algorithm that reliably removes left recursion is fiddlesome to say the least and there are caveats. A full treatment is given below after mention of the example.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-grammar-utilities

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-grammar-utilities.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Example

There is one example but the BNF can be changed dynamically. To view it, open the `example.html` file in the root of the repository. The initial BNF is actually a representation of Occam's BNF parser's rules. If this seems too daunting, you can copy the BNF given in the introduction into the BNF textarea. You can also try the BNF examples given in the treatment below.

Additionally you can choose to eliminate just cycles or immediate left recursion, in order to see the effects. If you choose to eliminate implicit left recursion, you cannot choose not to eliminate cycles, because eliminating implicit left recursion requires it. Nor can you choose to eliminate immediate left recursion, because this is only a special case of implicit left recursion.

## Treatment of the algorithms

### Removing cycles

Consider the following BNF:
```
  S ::= X "a" | Y ;

  X ::= Y | "b" ;

  Y ::= Z | "c" ;

  Z ::= X "d" | "e" ;
```
This results in the cycle `Y -> Z -> X "d" -> Y`, abbreviated `Y ->* Y`. Note that the derivation `X -> Y -> Z -> X "d"` is not considered a cycle because it does not terminate in a unit definition. In abbreviated form it is `X ->* X "d"`, which is an example of implicit left recursion, but not of a cycle.

The algorithm is pre-emptive. It removes all unit rules, thereby forestalling any chance of cycles being created.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Resources

* [Gate Lectures on Compiler Design by Ravindrababu Ravula](https://www.youtube.com/watch?v=Qkwj65l_96I&list=PLEbnTDJUr_IcPtUXFy2b1sGRPsLFMghhS)
* [Notes on Formal Language Theory and Parsing by James Power](http://www.cs.nuim.ie/~jpower/Courses/Previous/parsing)

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
