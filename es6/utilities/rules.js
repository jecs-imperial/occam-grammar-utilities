'use strict';

function rulesAsString(rules) {
  const maximumRuleNameLength = rules.reduce(function(maximumRuleNameLength, rule) {
          const ruleName = rule.getName(),
                ruleNameLength = ruleName.length;

          maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

          return maximumRuleNameLength;
        }, 0),
        rulesString = rules.reduce(function(rulesString, rule) {
          const ruleString = rule.asString(maximumRuleNameLength);

          rulesString += ruleString;

          return rulesString;
        }, '');

  return rulesString;
}

module.exports = {
  rulesAsString
};