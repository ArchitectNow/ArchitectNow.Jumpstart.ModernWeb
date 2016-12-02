//TypeScript decorators are equivalent to C# attributes
//  specific decorators can target:
//    classes, methods, fields, parameters, etc
//
//  you can write your own decorators or use specific ones from libraries such as Angular

//@sealed()
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

   // @configurable(false)
    get x() { return this._x; }

   // @configurable(false)
    get y() { return this._y; }
}