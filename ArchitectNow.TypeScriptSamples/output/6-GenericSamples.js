"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        //this.typeConstraintExample<number>(12);
        this.typeConstraintExample(new Person_1.Person());
    };
    return BaseService;
}());
//# sourceMappingURL=6-GenericSamples.js.map