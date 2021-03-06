"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  border: 1px solid darkgrey;\n  padding: 0.25rem;\n  font-size: 1.2rem;\n  font-family: monospace;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LexicalPatternInput = function(Input) {
    _inherits(LexicalPatternInput, _easy.Input);
    function LexicalPatternInput() {
        _classCallCheck(this, LexicalPatternInput);
        return _possibleConstructorReturn(this, _getPrototypeOf(LexicalPatternInput).apply(this, arguments));
    }
    _createClass(LexicalPatternInput, [
        {
            key: "getLexicalPattern",
            value: function getLexicalPattern() {
                var value = this.getValue(), lexicalPattern = value; ///
                return lexicalPattern;
            }
        },
        {
            key: "setLexicalPattern",
            value: function setLexicalPattern(lexicalPattern) {
                var value = lexicalPattern; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getLexicalPattern = this.getLexicalPattern.bind(this), setLexicalPattern = this.setLexicalPattern.bind(this);
                return {
                    getLexicalPattern: getLexicalPattern,
                    setLexicalPattern: setLexicalPattern
                };
            }
        }
    ]);
    return LexicalPatternInput;
}(_easy.Input);
_defineProperty(LexicalPatternInput, "defaultProperties", {
    className: "lexical-pattern",
    spellCheck: "false"
});
var _default = _easyWithStyle.default(LexicalPatternInput)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L2xleGljYWxQYXR0ZXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIExleGljYWxQYXR0ZXJuSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGxleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRMZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsUGF0dGVybiA9IHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4uYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TGV4aWNhbFBhdHRlcm4sXG4gICAgICBzZXRMZXhpY2FsUGF0dGVyblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZXhpY2FsLXBhdHRlcm5cIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExleGljYWxQYXR0ZXJuSW5wdXQpYFxuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsY0FBQTtJQUVBLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQ0EsNkdBT0E7Ozs7Ozs7SUFyQ0EsbUJBQUEsWUFBQSxLQUFBO2NBQUEsbUJBQUEsRUFGQSxLQUFBO2FBRUEsbUJBQUE7OEJBQUEsbUJBQUE7Z0VBQUEsbUJBQUE7O2lCQUFBLG1CQUFBOztBQUNBLGVBQUEsR0FBQSxpQkFBQTs0QkFBQSxpQkFBQTtvQkFDQSxLQUFBLFFBQUEsUUFBQSxJQUNBLGNBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7dUJBRUEsY0FBQTs7OztBQUdBLGVBQUEsR0FBQSxpQkFBQTs0QkFBQSxpQkFBQSxDQUFBLGNBQUE7b0JBQ0EsS0FBQSxHQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtxQkFFQSxRQUFBLENBQUEsS0FBQTs7OztBQUdBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUE7b0JBQ0EsaUJBQUEsUUFBQSxpQkFBQSxDQUFBLElBQUEsUUFDQSxpQkFBQSxRQUFBLGlCQUFBLENBQUEsSUFBQTs7QUFHQSxxQ0FBQSxFQUFBLGlCQUFBO0FBQ0EscUNBQUEsRUFBQSxpQkFBQTs7Ozs7V0FwQkEsbUJBQUE7RUFGQSxLQUFBO2dCQUVBLG1CQUFBLEdBd0JBLGlCQUFBO0FBQ0EsYUFBQSxHQUFBLGVBQUE7QUFDQSxjQUFBLEdBQUEsS0FBQTs7ZUE5QkEsY0FBQSxTQWtDQSxtQkFBQSJ9