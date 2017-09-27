var FunctionSamples = (function () {
    function FunctionSamples() {
        this.suits = ["hearts", "spades", "clubs", "diamonds"];
    }
    FunctionSamples.prototype.doWork = function () {
    };
    FunctionSamples.prototype.moreWork = function (param1, param2) {
        if (param1 > 0) {
            return false;
        }
        return null;
    };
    FunctionSamples.prototype.defaultValueSamples = function (param1, param2) {
        if (param2 === void 0) { param2 = "kevin"; }
        return null;
    };
    FunctionSamples.prototype.optionalParameterSample = function (param1, param2) {
    };
    FunctionSamples.prototype.pickCard = function (x) {
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: this.suits[pickedSuit], card: x % 13 };
        }
    };
    FunctionSamples.prototype.cardTest = function () {
        var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        var pickedCard1 = myDeck[this.pickCard(myDeck)];
        alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
        var pickedCard2 = this.pickCard(15);
        alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
    };
    return FunctionSamples;
}());
//# sourceMappingURL=2-FunctionSamples.js.map