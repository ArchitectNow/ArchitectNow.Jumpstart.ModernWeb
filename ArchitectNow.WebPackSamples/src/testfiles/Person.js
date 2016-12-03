"use strict";
var Person = (function () {
    function Person() {
    }
    Person.prototype.getDisplayName = function () {
        return this.nameFirst + ' ' + this.nameLast;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map