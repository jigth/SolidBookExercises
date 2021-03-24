"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fooModule = require('./foo');
fooModule.sayHello();
console.log("Hi World!");
var B = /** @class */ (function () {
    function B(at1, at2) {
        this.at1 = at1;
        this.at2 = at2;
    }
    Object.defineProperty(B.prototype, "fullAtts", {
        get: function () {
            return this.at2 + "___" + this.at1;
        },
        enumerable: false,
        configurable: true
    });
    return B;
}());
var Bchild = /** @class */ (function (_super) {
    __extends(Bchild, _super);
    function Bchild(at1, at2, boolAt) {
        var _this = _super.call(this, at1, at2) || this;
        _this.boolAt = boolAt;
        return _this;
    }
    Object.defineProperty(Bchild.prototype, "fullFull", {
        get: function () {
            return this.fullAtts + " +++ " + this.boolAt;
        },
        enumerable: false,
        configurable: true
    });
    return Bchild;
}(B));
//const a = new B(20, 'jaja')
//console.log( a.at1 )
//console.log( a.fullAtts )
var b = new Bchild(1, 'foo', true);
console.log(b.fullFull);
