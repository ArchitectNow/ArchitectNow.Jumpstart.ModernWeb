var MiscSamples = (function () {
    function MiscSamples() {
    }
    MiscSamples.prototype.doWork = function (func) {
        this.funcField = func;
    };
    MiscSamples.prototype.setFunction = function () {
        this.doWork(function (x, y) {
            if ((x + y) > 100) {
                return true;
            }
            return false;
        });
        if (this.funcField) {
            var _result = this.funcField(100, 200);
        }
    };
    return MiscSamples;
}());
//# sourceMappingURL=5-MiscSamples.js.map