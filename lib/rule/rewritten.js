"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _ruleName = _interopRequireDefault(require("../definition/ruleName"));
var _recursive = _interopRequireDefault(require("../definition/recursive"));
var _class = require("../utilities/class");
var _ruleName1 = require("../utilities/ruleName");
var _types = require("../types");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var RewrittenRule = function(Rule) {
    _inherits(RewrittenRule, _occamParsers.Rule);
    function RewrittenRule() {
        _classCallCheck(this, RewrittenRule);
        return _possibleConstructorReturn(this, _getPrototypeOf(RewrittenRule).apply(this, arguments));
    }
    _createClass(RewrittenRule, null, [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var definitions = rule.getDefinitions();
                var ruleName = rule.getName(), reducedRuleName = _ruleName1.reducedRuleNameFromRuleName(ruleName), reducedRuleNameDefinition = _ruleName.default.fromRuleName(reducedRuleName);
                definitions = definitions.filter(function(definition) {
                    var keep = false;
                    var definitionRecursiveDefinition = _class.isInstanceOf(definition, _recursive.default);
                    if (definitionRecursiveDefinition) {
                        var recursiveDefinition = definition, type = recursiveDefinition.getType();
                        keep = type === _types.DIRECTLY_LEFT_RECURSIVE_TYPE || type === _types.INDIRECTLY_LEFT_RECURSIVE_TYPE || type === _types.IMPLICITLY_LEFT_RECURSIVE_TYPE;
                    }
                    return keep;
                });
                definitions = _toConsumableArray(definitions).concat([
                    reducedRuleNameDefinition
                ]);
                var name = ruleName, NonTerminalNode = rule.getNonTerminalNode(), rewrittenRule = new RewrittenRule(name, definitions, NonTerminalNode);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamParsers.Rule);
exports.default = RewrittenRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZVwiO1xuXG5pbXBvcnQgeyBpc0luc3RhbmNlT2YgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLCBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IGtlZXAgPSBmYWxzZTtcblxuICAgICAgY29uc3QgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgUmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgIHR5cGUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFR5cGUoKTtcblxuICAgICAgICBrZWVwID0gKHR5cGUgPT09IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpIHx8XG4gICAgICAgICAgICAgICAodHlwZSA9PT0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSB8fFxuICAgICAgICAgICAgICAgKHR5cGUgPT09IElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBrZWVwO1xuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAuLi5kZWZpbml0aW9ucyxcbiAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb25cbiAgICBdO1xuXG4gICAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gbmV3IFJld3JpdHRlblJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsYUFBQTtJQUVBLFNBQUE7SUFDQSxVQUFBO0lBRUEsTUFBQTtJQUNBLFVBQUE7SUFDQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLGFBQUEsWUFBQSxJQUFBO2NBQUEsYUFBQSxFQVRBLGFBQUE7YUFTQSxhQUFBOzhCQUFBLGFBQUE7Z0VBQUEsYUFBQTs7aUJBQUEsYUFBQTs7QUFDQSxlQUFBLEdBQUEsUUFBQTs0QkFBQSxRQUFBLENBQUEsSUFBQTtvQkFDQSxXQUFBLEdBQUEsSUFBQSxDQUFBLGNBQUE7b0JBRUEsUUFBQSxHQUFBLElBQUEsQ0FBQSxPQUFBLElBQ0EsZUFBQSxHQVJBLFVBQUEsNkJBUUEsUUFBQSxHQUNBLHlCQUFBLEdBYkEsU0FBQSxTQWFBLFlBQUEsQ0FBQSxlQUFBO0FBRUEsMkJBQUEsR0FBQSxXQUFBLENBQUEsTUFBQSxVQUFBLFVBQUE7d0JBQ0EsSUFBQSxHQUFBLEtBQUE7d0JBRUEsNkJBQUEsR0FmQSxNQUFBLGNBZUEsVUFBQSxFQWpCQSxVQUFBO3dCQW1CQSw2QkFBQTs0QkFDQSxtQkFBQSxHQUFBLFVBQUEsRUFDQSxJQUFBLEdBQUEsbUJBQUEsQ0FBQSxPQUFBO0FBRUEsNEJBQUEsR0FBQSxJQUFBLEtBbkJBLE1BQUEsaUNBb0JBLElBQUEsS0FwQkEsTUFBQSxtQ0FxQkEsSUFBQSxLQXJCQSxNQUFBOzsyQkF3QkEsSUFBQTs7QUFHQSwyQkFBQSxzQkFDQSxXQUFBO0FBQ0EsNkNBQUE7O29CQUdBLElBQUEsR0FBQSxRQUFBLEVBQ0EsZUFBQSxHQUFBLElBQUEsQ0FBQSxrQkFBQSxJQUNBLGFBQUEsT0FBQSxhQUFBLENBQUEsSUFBQSxFQUFBLFdBQUEsRUFBQSxlQUFBO3VCQUVBLGFBQUE7Ozs7V0FsQ0EsYUFBQTtFQVRBLGFBQUE7a0JBU0EsYUFBQSJ9