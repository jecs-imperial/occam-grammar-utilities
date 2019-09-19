'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      objectUtilities = require('./utilities/object'),
      NonRecursiveRule = require('./rule/nonRecursive'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      recursiveDefinitionUtilities = require('./utilities/recursiveDefinition'),
      NonRecursiveRuleNameDefinition = require('./definition/nonRecursiveRuleName'),
      NonRecursiveAndRightRecursiveRuleNamesDefinition = require('./definition/nonRecursiveAndRightRecursiveRuleNames');

const { findRuleByName } = ruleUtilities,
      { first, forEachWithRemove, areElementsEqual } = arrayUtilities,
      { addToArrayMap, forEachNameValueWithRemove } = objectUtilities,
      { findIndirectlyLeftRecursiveDefinition } = recursiveDefinitionUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        immediatelyLeftRecursiveDefinitionsMap = {};

  removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules);

  rewriteLeftRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules);

  const ruleNames = Object.keys(immediatelyLeftRecursiveDefinitionsMap),
        ruleNamesLength = ruleNames.length;

  if (ruleNamesLength > 0) {
    const ruleNamesString = ruleNames.join(' ,');

    throw new Error(`Left recursion cannot be eliminated from the ${ruleNamesString} rule or rules.`);
  }
}

module.exports = eliminateLeftRecursion;

function removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition !== null) {
      const recursiveDefinitionStrictlyLeftRecursive = recursiveDefinition.isStrictlyLeftRecursive();

      if (recursiveDefinitionStrictlyLeftRecursive) {
        const strictlyLeftRecursiveDefinition = recursiveDefinition,  ///
              immediatelyLeftRecursiveDefinition = strictlyLeftRecursiveDefinition; ///

        addToArrayMap(immediatelyLeftRecursiveDefinitionsMap, ruleName, immediatelyLeftRecursiveDefinition);

        return true;
      }

      const recursiveDefinitionLeftRecursive = recursiveDefinition.isLeftRecursive();

      if (recursiveDefinitionLeftRecursive) {
        const leftRecursiveDefinition = recursiveDefinition,  ///
              indirectlyLeftRecursiveDefinition = findIndirectlyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions);

        if (indirectlyLeftRecursiveDefinition !== null) {
          const immediatelyLeftRecursiveDefinition = leftRecursiveDefinition; ///

          immediatelyLeftRecursiveDefinition.setIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition);

          addToArrayMap(immediatelyLeftRecursiveDefinitionsMap, ruleName, immediatelyLeftRecursiveDefinition);

          return true;
        }
      }

      recursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ];

      const recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(),
            recursiveDefinitionRuleNames = recursiveDefinitions.map((recursiveDefinition) => recursiveDefinition.getRuleName());

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const recursiveDefinitionRuleNamesIncludesRecursiveRuleName = recursiveDefinitionRuleNames.includes(recursiveRuleName);

        if (!recursiveDefinitionRuleNamesIncludesRecursiveRuleName) {
          const name = recursiveRuleName,  ///
                rule = findRuleByName(name, rules);

          if (rule !== null) {
            removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules);
          }
        }
      });
    }
  });
}

function rewriteLeftRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules) {
  forEachNameValueWithRemove(immediatelyLeftRecursiveDefinitionsMap, (ruleName, immediatelyLeftRecursiveDefinitions) => {
    let remove = false;

    remove = rewriteStrictlyLeftRecursiveRule(ruleName, immediatelyLeftRecursiveDefinitions, rules);

    return remove;
  });
}

function rewriteStrictlyLeftRecursiveRule(ruleName, immediatelyLeftRecursiveDefinitions, rules) {
  let remove = false;

  const ruleStrictlyLeftRecursive = immediatelyLeftRecursiveDefinitions.every((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.isStrictlyLeftRecursive());

  if (ruleStrictlyLeftRecursive) {
    const ruleRewritable = immediatelyLeftRecursiveDefinitions.every((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.isRewritable());

    if (ruleRewritable) {
      const lookAheads = immediatelyLeftRecursiveDefinitions.map((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.isLookAhead()),
            lookAheadsEqual = areElementsEqual(lookAheads);

      if (lookAheadsEqual) {
        const name = ruleName,  ///
              rule = findRuleByName(name, rules),
              nonRecursiveRule = NonRecursiveRule.fromRule(rule),
              rightRecursiveRule = RightRecursiveRule.fromRuleNameAndImmediatelyLeftRecursiveRecursiveDefinitions(ruleName, immediatelyLeftRecursiveDefinitions);

        rules.push(nonRecursiveRule);

        rules.push(rightRecursiveRule);

        const firstLookAhead = first(lookAheads),
              lookAhead = firstLookAhead, ///
              nonRecursiveRuleNameDefinition = NonRecursiveRuleNameDefinition.fromRuleName(ruleName),
              nonRecursiveAndRightRecursiveRuleNamesDefinition = NonRecursiveAndRightRecursiveRuleNamesDefinition.fromRuleNameAndLookAhead(ruleName, lookAhead),
              definitions = [
                nonRecursiveAndRightRecursiveRuleNamesDefinition,
                nonRecursiveRuleNameDefinition
              ];

        rule.setDefinitions(definitions);

        remove = true;
      }
    }
  }

  return remove;
}
