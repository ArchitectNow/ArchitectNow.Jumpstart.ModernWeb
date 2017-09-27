"use strict";
var Person_1 = require("./models/Person");
//TypeScript Native Types:
// number
// string
// boolean
// array
// enum
// tuple
// any
var n;
n = 15;
var s;
s = "Vader";
var p = new Person_1.Person(); // Type is inferred (just like C#)
p.nameFirst = "Kevin";
p.nameLast = "Grossnicklaus";
p.ssn = "123-123-1234";
var fullName = p.getDisplayName();
// Var vs Let
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html 
var _catchAll;
_catchAll = 12;
_catchAll = "Kevin";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var StatusOption;
(function (StatusOption) {
    StatusOption[StatusOption["Active"] = 1] = "Active";
    StatusOption[StatusOption["Inactive"] = 2] = "Inactive";
})(StatusOption || (StatusOption = {}));
var _status = StatusOption.Active;
var _array = [12, 23, 42];
var _first = _array[0];
// null
var p2 = null;
//# sourceMappingURL=1-TypeSamples.js.map