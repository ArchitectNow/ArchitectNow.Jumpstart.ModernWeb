//TypeScript decorators are equivalent to C# attributes
//  specific decorators can target:
//    classes, methods, fields, parameters, etc
//
//  you can write your own decorators or use specific ones from libraries such as Angular
//@sealed()
var Point = (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        // @configurable(false)
        get: function () { return this._x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        // @configurable(false)
        get: function () { return this._y; },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
//# sourceMappingURL=8-DecoratorSamples.js.map