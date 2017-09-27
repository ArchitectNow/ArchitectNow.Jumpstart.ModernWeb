"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./models/Person"); // extension not required
// note the rename/alias above
var ApiModule = require("./services/ApiModule");
// the above uses a wildcard to pull in everything in the file (which has been exported)
// User of "Export" keyword makes a class visible as a module
var ModuleSamples = (function () {
    function ModuleSamples() {
    }
    ModuleSamples.prototype.doWork = function () {
        var b = new Person_1.Person();
        var _rootUrl = ApiModule.rootUrl;
        var _personApiService = new ApiModule.PersonApiService();
    };
    return ModuleSamples;
}());
exports.ModuleSamples = ModuleSamples;
//# sourceMappingURL=7-ModuleSamples.js.map