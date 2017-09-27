var MiscSamples = (function () {
    function MiscSamples() {
    }
    //function which accepts another function pointer as a parameter
    MiscSamples.prototype.doWork = function (func) {
        this.funcField = func;
    };
    MiscSamples.prototype.setFunction = function () {
        //calling a function and passing another function (ala Lambda expression) as a parameter
        this.doWork(function (x, y) {
            if ((x + y) > 100) {
                return true;
            }
            return false;
        });
        //executing a function
        if (this.funcField) {
            var _result = this.funcField(100, 200);
        }
    };
    return MiscSamples;
}());
//# sourceMappingURL=5-MiscSamples.js.map