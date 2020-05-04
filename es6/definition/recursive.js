"use strict";

import { Definition } from "occam-parsers";

import { findRule } from "../utilities/rule";
import { RECURSIVE_TYPE } from "../types";
import { recursiveRuleNamesFromDefinition } from "../utilities/definition";

class RecursiveDefinition extends Definition {
  constructor(type, parts, ruleName, definition, recursiveRuleNames) {
    super(parts);

    this.type = type;

    this.ruleName = ruleName;

    this.definition = definition;

    this.recursiveRuleNames = recursiveRuleNames;
  }

  getType() {
    return this.type;
  }

  getRuleName() {
    return this.ruleName;
  }

  getDefinition() {
    return this.definition;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  replace(rules) {
    const rule = findRule(this.ruleName, rules),
          replacedDefinition = this.definition, ///
          replacementDefinition = this; ///

    rule.replaceDefinition(replacedDefinition, replacementDefinition);
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let recursiveDefinition = null;

    const type = RECURSIVE_TYPE,
          parts = definition.getParts(),
          recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = (recursiveRuleNamesLength > 0);

    if (definitionRecursiveDefinition) {
      recursiveDefinition = new RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames);
    }

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
