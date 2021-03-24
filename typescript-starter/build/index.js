"use strict";
console.log('interfaces are not transpiled directly from Typescript to JS');
var GeopointWithDate = /** @class */ (function () {
    function GeopointWithDate(xCoordinate, yCoordinate, date) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
    }
    Object.defineProperty(GeopointWithDate.prototype, "coordinates", {
        get: function () {
            return ("Description of Coordinates for this point:                \nX coordinate: " + this.xCoordinate + ".                \nY coordinate: " + this.yCoordinate + ".");
        },
        enumerable: false,
        configurable: true
    });
    return GeopointWithDate;
}());
var geoWithDate = new GeopointWithDate(5, 7);
console.log(geoWithDate.coordinates);
console.log('Did you see that? o.O');
