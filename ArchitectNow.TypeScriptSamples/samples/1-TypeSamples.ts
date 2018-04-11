import { Person } from "./models/Person";

//TypeScript Native Types:
// number
// string
// boolean
// array
// enum
// tuple
// any

var n: number;

n = 33;

var s: string;

s = "Vader";

var xyz = true;

var p = new Person(); // Type is inferred (just like C#)

p.nameFirst = "Kevin";

p.nameLast = "Grossnicklaus";

let fullName = p.getDisplayName();

// Var vs Let
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html 

var _catchAll: any;

_catchAll = 12;

_catchAll = "Kevin";

enum Color {Red, Green, Blue};
let c: Color = Color.Green;

enum StatusOption {
    Active = 1, 
    Inactive
}

var _status : StatusOption = StatusOption.Active;

var _array: number[] = [ 12, 23, 42 ];

var _first = _array[0];

// null
var p: Person = null;

// Union types

var unionType: string | number;

// String Literal types

type Role = "Admin" | "User" | "ReadOnly";

var role: Role = "Admin";












