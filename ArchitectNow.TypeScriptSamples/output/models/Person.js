"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = require("./BaseModel");
var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super.call(this) || this;
    }
    Person.prototype.getDisplayName = function () {
        return this.nameFirst + " " + this.nameLast;
    };
    return Person;
}(BaseModel_1.BaseModel));
exports.Person = Person;
//# sourceMappingURL=Person.js.map