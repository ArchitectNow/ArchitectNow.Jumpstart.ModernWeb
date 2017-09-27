"use strict";
<<<<<<< HEAD
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
=======
>>>>>>> 1f02845f8279df4eb4274cdbe1b098fabab2b957
var Person_1 = require("./models/Person");
var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.getItem = function (id) {
        return null;
    };
    BaseService.prototype.saveItem = function (item) {
        return item;
    };
    BaseService.prototype.genericFunction = function (input) {
    };
    BaseService.prototype.genericTypeInference = function () {
        this.genericFunction(12);
        this.genericFunction(12);
    };
    BaseService.prototype.typeConstraintExample = function (input) {
    };
    BaseService.prototype.executeFunction = function () {
<<<<<<< HEAD
=======
        //this.typeConstraintExample<number>(12);
>>>>>>> 1f02845f8279df4eb4274cdbe1b098fabab2b957
        this.typeConstraintExample(new Person_1.Person());
    };
    return BaseService;
}());
<<<<<<< HEAD
var PersonService = (function (_super) {
    __extends(PersonService, _super);
    function PersonService() {
        return _super.call(this) || this;
    }
    return PersonService;
}(BaseService));
=======
>>>>>>> 1f02845f8279df4eb4274cdbe1b098fabab2b957
//# sourceMappingURL=6-GenericSamples.js.map