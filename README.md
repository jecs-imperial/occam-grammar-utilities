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

  Z ::= "d" ;
```
This results in the cycle `Y -> Z -> X ("d") -> Y`, abbreviated `Y ->* Y`. Here the terminal part `"d"` of the first of the `Z` rule's definitions is put in parenthesis to emphasise that although it is part of the definition, it is not evaluated during the derivation. Only the first part `X` is evaluated, which leads immediately to an evaluation of the first definition of the `X` rule, namely `Y`. Also note that the derivation `X -> Y -> Z -> X "d"` is not considered a cycle because it does not terminate in a unit definition. In abbreviated form it is `X ->* X "d"`, which is an example of implicit left recursion, but not of a cycle.

The algorithm is pre-emptive. It removes all unit definitions, thereby forestalling any chance of cycles being created. Here the removal of the unit definition `Y` in the `X` rule will break the aforementioned cycle, for example.

The first stage is to split the rules into 'non-units' rules, that is rules without unit definitions, and 'unit' rules. The former are...
```
  S ::= X "a" ;

  X ::= "b" ;

  Y ::= "c" ;

  Z ::= "d" ;
```
...and the latter in this case:
```
  S ::= Y ;

  X ::= Y ;

  Y ::= Z ;
```
The algorithm then works on the stack of 'unit' rules. It pops 'unit' rules off the stack of 'unit' rules for consideration until none are left, the first one in this case being `S ::= Y`. If the 'unit' rule is cyclic, say `Y ::= Y`, or if it has been considered already, it is simply discarded and the next rule is considered. Assuming neither of these conditions hold, the list of 'non-units' rules is searched and the rule the name of which matches the rule name in the rule under consideration's unit definition is found. The definitions of this rule are then coupled with that rule under consideration's name to form a new rule. An example will clarify. The first rule under consideration is `S ::= Y`, the matching rule is `Y ::= "c"` and therefore the new 'non-units' rule is `S ::= "c"`. In effect the derivation `S -> Y -> "c"` is reduced to `S -> "c"`. The essence of the algorithm is in reducing all such derivations. To continue, the stack of remaining 'unit' rules is also searched for matching rules and these are combined with the rule under consideration to make new 'unit' rule which are pushed onto the stack to be the next rules under consideration. Again an example should clarify. The `S ::= Y` 'unit' rule is coupled with the `Y ::= Z` 'unit' rule to form a new unit rule `S ::= Z`. The result of the first iteration of the algorithm is the following stack of 'unit' rules and a burgeoning list of new 'non-unit' rules. These are shown to the right. The evolving stack of 'unit' rules is shown on the left with old rules kept above the dotted line:
```
  S ::= Y ;         S ::= "c" ;

  ---------

  S ::= Z ;

  X ::= Y ;

  Y ::= Z ;
```

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
