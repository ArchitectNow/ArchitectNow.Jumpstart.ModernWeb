// Inline Interface checked at compile time
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


interface IPrintable {
    label: string;
}

function printLabelWithInterface(labelledObj: IPrintable) {
    console.log(labelledObj.label);
}

printLabelWithInterface(myObj);

interface IWorker {

    // Define a function
    doWork(param1: number) : string;
}

interface ISearchFunction {
    (searchValue: string, page: number) : any[];
}



