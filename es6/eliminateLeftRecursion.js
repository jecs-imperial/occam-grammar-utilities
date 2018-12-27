'use strict';

const eliminateCycles = require('./eliminateCycles'),
      eliminateOrphanedRules = require('./eliminateCycles'),
      eliminateImplicitLeftRecursion = require('./eliminateImplicitLeftRecursion');

function eliminateLeftRecursion(rules) {
  rules = eliminateCycles(rules);

  rules = eliminateImplicitLeftRecursion(rules);

  rules = eliminateOrphanedRules(rules);

  return rules;
}

module.exports = eliminateLeftRecursion;
