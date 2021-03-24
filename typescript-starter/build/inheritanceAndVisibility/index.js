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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(10, 5);
var p2 = new Point(1, 7);
var p3 = p1.add(p2);
console.log(p3);
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.add = function (point) {
        var sumPoint2D = _super.prototype.add.call(this, point);
        return new Point3D(sumPoint2D.x, sumPoint2D.y, this.z + point.z);
    };
    Object.defineProperty(Point3D, "fooga", {
        get: function () {
            return 'Foooogaaaa!!!';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point3D.prototype, "fooga", {
        get: function () {
            return 'Foooogaaaa!!!';
        },
        enumerable: false,
        configurable: true
    });
    return Point3D;
}(Point));
var point3D_One = new Point3D(1, 2, 3);
var point3D_Two = new Point3D(3, 5, 1);
console.log(point3D_One.add(point3D_Two));
console.log(Point3D.fooga);
console.log(point3D_One.fooga);
