var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseWorker = (function () {
    function BaseWorker() {
    }
    BaseWorker.prototype.publicFunction = function () {
    };
    BaseWorker.prototype.anotherPublicFunction = function () {
    };
    BaseWorker.prototype.privateFunction = function () {
    };
    BaseWorker.prototype.protectedFunction = function () {
    };
    return BaseWorker;
}());
var MockWorker = (function (_super) {
    __extends(MockWorker, _super);
    function MockWorker() {
        var _this = _super.call(this) || this;
        _this.rootUrl = "http://www.rooturl.com";
        return _this;
    }
    return MockWorker;
}(BaseWorker));
var AsyncWorker = (function (_super) {
    __extends(AsyncWorker, _super);
    function AsyncWorker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsyncWorker.prototype.doWorkAsync = function () {
    };
    return AsyncWorker;
}(BaseWorker));
var PropertySamples = (function () {
    function PropertySamples() {
    }
    Object.defineProperty(PropertySamples.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    PropertySamples.prototype.testProperty = function (name) {
        this.fullName = "test";
        console.log(this.fullName);
    };
    return PropertySamples;
}());
var ConstructorSample1 = (function () {
    function ConstructorSample1(rootUrl, port) {
        this.rootUrl = rootUrl;
        this.port = port;
    }
    ConstructorSample1.prototype.doWork = function () {
        console.log(this.rootUrl);
    };
    return ConstructorSample1;
}());
var ConstructorSample2 = (function () {
    function ConstructorSample2(rootUrl, port) {
        this.rootUrl = rootUrl;
        this.port = port;
    }
    ConstructorSample2.prototype.doWork = function () {
        console.log(this.rootUrl);
        this.port;
    };
    return ConstructorSample2;
}());
var StaticSample = (function () {
    function StaticSample() {
        console.log(StaticSample.rootUrl);
    }
    return StaticSample;
}());
var p = new StaticSample();
if (typeof p === 'StaticSample') {
}
//# sourceMappingURL=4-ClassSamples.js.map