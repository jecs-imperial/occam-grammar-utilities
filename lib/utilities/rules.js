"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rulesAsString = rulesAsString;
exports.ruleMapFromRules = ruleMapFromRules;
exports.startRuleFromRules = startRuleFromRules;
exports.rulesFromStartRuleAndRuleMap = rulesFromStartRuleAndRuleMap;
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter;
function rulesAsString(rules, multiLine) {
    var maximumRuleNameLength = rules.reduce(function(maximumRuleNameLength1, rule) {
        var ruleName = rule.getName(), ruleNameLength = ruleName.length;
        maximumRuleNameLength1 = Math.max(maximumRuleNameLength1, ruleNameLength);
        return maximumRuleNameLength1;
    }, 0), rulesString = rules.reduce(function(rulesString1, rule) {
        var ruleString = rule.asString(maximumRuleNameLength, multiLine);
        rulesString1 += ruleString;
        return rulesString1;
    }, "").replace(/^\n\n/, "");
    return rulesString;
}
function ruleMapFromRules(rules) {
    var ruleMap = rules.reduce(function(ruleMap1, rule) {
        var ruleName = rule.getName();
        ruleMap1[ruleName] = rule;
        return ruleMap1;
    }, {
    });
    return ruleMap;
}
function startRuleFromRules(rules) {
    var firstRule = first(rules), startRule = firstRule; ///
    return startRule;
}
function rulesFromStartRuleAndRuleMap(startRule, ruleMap) {
    var rules = Object.values(ruleMap), startRuleName = startRule.getName();
    filter(rules, function(rule) {
        var ruleName = rule.getName();
        if (ruleName !== startRuleName) {
            return true;
        }
    });
    rules.unshift(startRule);
    return rules;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSB7XG4gIGNvbnN0IG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IHJ1bGVzLnJlZHVjZSgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aDtcblxuICAgICAgICAgIG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZU5hbWVMZW5ndGgpO1xuXG4gICAgICAgICAgcmV0dXJuIG1heGltdW1SdWxlTmFtZUxlbmd0aDtcbiAgICAgICAgfSwgMCksXG4gICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXMucmVkdWNlKChydWxlc1N0cmluZywgcnVsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lKTtcblxuICAgICAgICAgIHJ1bGVzU3RyaW5nICs9IHJ1bGVTdHJpbmc7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gICAgICAgIH0sIFwiXCIpLnJlcGxhY2UoL15cXG5cXG4vLCBcIlwiKTtcblxuICByZXR1cm4gcnVsZXNTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlcy5yZWR1Y2UoKHJ1bGVNYXAsIHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuXG4gICAgcmV0dXJuIHJ1bGVNYXA7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gcnVsZU1hcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZTsgIC8vL1xuXG4gIHJldHVybiBzdGFydFJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICBjb25zdCBydWxlcyA9IE9iamVjdC52YWx1ZXMocnVsZU1hcCksXG4gICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBzdGFydFJ1bGUuZ2V0TmFtZSgpO1xuXG4gIGZpbHRlcihydWxlcywgKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHJ1bGVOYW1lICE9PSBzdGFydFJ1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJ1bGVzLnVuc2hpZnQoc3RhcnRSdWxlKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7OztRQU1BLGFBQUEsR0FBQSxhQUFBO1FBb0JBLGdCQUFBLEdBQUEsZ0JBQUE7UUFZQSxrQkFBQSxHQUFBLGtCQUFBO1FBT0EsNEJBQUEsR0FBQSw0QkFBQTtJQTNDQSxVQUFBO0lBRUEsS0FBQSxHQUZBLFVBQUEsZ0JBRUEsS0FBQSxFQUFBLE1BQUEsR0FGQSxVQUFBLGdCQUVBLE1BQUE7U0FFQSxhQUFBLENBQUEsS0FBQSxFQUFBLFNBQUE7UUFDQSxxQkFBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLFVBQUEsc0JBQUEsRUFBQSxJQUFBO1lBQ0EsUUFBQSxHQUFBLElBQUEsQ0FBQSxPQUFBLElBQ0EsY0FBQSxHQUFBLFFBQUEsQ0FBQSxNQUFBO0FBRUEsOEJBQUEsR0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLHNCQUFBLEVBQUEsY0FBQTtlQUVBLHNCQUFBO09BQ0EsQ0FBQSxHQUNBLFdBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxVQUFBLFlBQUEsRUFBQSxJQUFBO1lBQ0EsVUFBQSxHQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEscUJBQUEsRUFBQSxTQUFBO0FBRUEsb0JBQUEsSUFBQSxVQUFBO2VBRUEsWUFBQTtXQUNBLE9BQUE7V0FFQSxXQUFBOztTQUdBLGdCQUFBLENBQUEsS0FBQTtRQUNBLE9BQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxVQUFBLFFBQUEsRUFBQSxJQUFBO1lBQ0EsUUFBQSxHQUFBLElBQUEsQ0FBQSxPQUFBO0FBRUEsZ0JBQUEsQ0FBQSxRQUFBLElBQUEsSUFBQTtlQUVBLFFBQUE7OztXQUdBLE9BQUE7O1NBR0Esa0JBQUEsQ0FBQSxLQUFBO1FBQ0EsU0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLEdBQ0EsU0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtXQUVBLFNBQUE7O1NBR0EsNEJBQUEsQ0FBQSxTQUFBLEVBQUEsT0FBQTtRQUNBLEtBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsR0FDQSxhQUFBLEdBQUEsU0FBQSxDQUFBLE9BQUE7QUFFQSxVQUFBLENBQUEsS0FBQSxXQUFBLElBQUE7WUFDQSxRQUFBLEdBQUEsSUFBQSxDQUFBLE9BQUE7WUFFQSxRQUFBLEtBQUEsYUFBQTttQkFDQSxJQUFBOzs7QUFJQSxTQUFBLENBQUEsT0FBQSxDQUFBLFNBQUE7V0FFQSxLQUFBIn0=