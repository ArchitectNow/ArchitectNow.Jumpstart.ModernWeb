"use strict";
var Person_1 = require("./models/Person");
var ApiModule = require("./services/ApiModule");
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