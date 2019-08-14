'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      partsUtilities = require('../utilities/parts');

const { Definition } = parsers,
      { cloneParts } = partsUtilities,
      { ruleNamePartFromRuleName } = partUtilities;

class RightRecursiveDefinition extends Definition {
  constructor(parts, noWhitespace, lookAhead) {
    super(parts);

    this.noWhitespace = noWhitespace;

    this.lookAhead = lookAhead;
  }

  hasNoWhitespace() {
    return this.noWhitespace;
  }

  isLookAhead() {
    return this.lookAhead;
  }

  static fromRightRecursiveRuleNameAndDefinition(rightRecursiveRuleName, definition) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    const rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName);

    parts.push(rightRecursiveRuleNamePart);

    const firstPart = parts.shift(),
          lookAhead = firstPart.isLookAhead(),
          noWhitespace = firstPart.hasNoWhitespace(),
          rightRecursiveDefinition = new RightRecursiveDefinition(parts, noWhitespace, lookAhead);

    return rightRecursiveDefinition;
  }
}

module.exports = RightRecursiveDefinition;

