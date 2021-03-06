"use strict";

import { partTypes } from "occam-parsers";
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities,
      { RuleNamePartType,
        OptionalPartPartType,
        SequenceOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

export function recursiveRuleNamesFromPart(part, recursiveRuleNames) {
  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const type = part.getType();

    switch (type) {
      case RuleNamePartType : {
          const ruleNamePart = part,  ///
                ruleName = ruleNamePart.getRuleName(),
                recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);

          if (!recursiveRuleNamesIncludesRuleName) {
            const recursiveRuleName = ruleName; ///

            recursiveRuleNames.push(recursiveRuleName);
          }
        }
        break;

      case OptionalPartPartType : {
          const optionalPartPart = part;  ///

          part = optionalPartPart.getPart();

          recursiveRuleNamesFromPart(part, recursiveRuleNames);
        }
        break;

      case OneOrMorePartsPartType : {
          const oneOrMorePartsPart = part;  ///

          part = oneOrMorePartsPart.getPart();

          recursiveRuleNamesFromPart(part, recursiveRuleNames);
        }
        break;

      case ZeroOrMorePartsPartType : {
          const zeroOrMorePartsPart = part; ///

          part = zeroOrMorePartsPart.getPart();  ///

          recursiveRuleNamesFromPart(part, recursiveRuleNames);
        }
        break;

      case SequenceOfPartsPartType : {
        const sequenceOfPartsPart = part,  ///
              parts = sequenceOfPartsPart.getParts();

          parts.forEach((part) => recursiveRuleNamesFromPart(part, recursiveRuleNames));
        }
        break;

      case ChoiceOfPartsPartType : {
        const choiceOfPartsPart = part, ///
              parts = choiceOfPartsPart.getParts();

          parts.forEach((part) => recursiveRuleNamesFromPart(part, recursiveRuleNames));
        }
        break;
    }
  }
}

export function leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames) {
  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const type = part.getType();

    switch (type) {
      case RuleNamePartType : {
          const ruleNamePart = part,  ///
                ruleName = ruleNamePart.getRuleName(),
                leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

          if (!leftRecursiveRuleNamesIncludesRuleName) {
            const leftRecursiveRuleName = ruleName; ///

            leftRecursiveRuleNames.push(leftRecursiveRuleName);
          }
        }
        break;

      case OptionalPartPartType : {
          const optionalPartPart = part; ///

          part = optionalPartPart.getPart();

          leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
        }
        break;

      case OneOrMorePartsPartType : {
          const oneOrMorePartsPart = part;  ///

          part = oneOrMorePartsPart.getPart();

          leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
        }
        break;

      case ZeroOrMorePartsPartType : {
          const zeroOrMorePartsPart = part; ///

          part = zeroOrMorePartsPart.getPart();

          leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
        }
        break;

      case SequenceOfPartsPartType : {
          const sequenceOfPartsPart = part,  ///
                parts = sequenceOfPartsPart.getParts(),
                firstPart = first(parts);

          part = firstPart; ///

          leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
        }
        break;

      case ChoiceOfPartsPartType : {
          const choiceOfPartsPart = part, ///
                parts = choiceOfPartsPart.getParts();

          parts.forEach((part) => leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames));
        }
        break;
    }
  }
}
