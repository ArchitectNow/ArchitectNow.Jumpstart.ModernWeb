
class FunctionSamples {

    doWork() {
        //This is a function with no parameters or return type
    }

    public moreWork(param1: number, param2: string): boolean {
        if (param1 > 0) {
            return false;
        }
        return true;
    }

    private defaultValueSamples(param1: boolean = true, param2: string = "kevin"): number {

        return 12;
    }

    optionalParameterSample(param1: boolean, param2?: string)
    {
        
    }

    private suits = ["hearts", "spades", "clubs", "diamonds"];

    //Function Overload Example

    private pickCard(x: { suit: string; card: number; }[]): number;
    private pickCard(x: number): { suit: string; card: number; };
    private pickCard(x): any {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: this.suits[pickedSuit], card: x % 13 };
        }
    }

    cardTest() {

        let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        let pickedCard1 = myDeck[this.pickCard(myDeck)];
        alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

        let pickedCard2 = this.pickCard(15);
        alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

    }
}

