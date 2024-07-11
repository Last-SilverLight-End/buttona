"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_module_css_1 = require("../style/Button.module.css");
var defaultCss = {
    size: 'middle',
    color: 'blue',
    backgroundColor: 'white'
};
var Buttons = function (props) {
    var _a = __assign(__assign({}, defaultCss), props), children = _a.children, remains = __rest(_a, ["children"]);
    var buttonClass = __spreadArray([Button_module_css_1.default.Button], Object.entries(remains).map(function (_a) {
        var k = _a[0], v = _a[1];
        return Button_module_css_1.default["".concat(k, "-").concat(v)];
    }), true).join(" ");
    return (0, jsx_runtime_1.jsx)("button", { className: buttonClass, children: children });
};
exports.default = Buttons;
