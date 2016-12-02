class MiscSamples {

    //field of type function
    funcField: (x: number, y: number) => boolean;

    //function which accepts another function pointer as a parameter
    doWork(func: (input1: number, input2: number) => boolean)
    {
        this.funcField = func;
    }

    setFunction()
    {
        //calling a function and passing another function (ala Lambda expression) as a parameter
        this.doWork((x,y) => {
            if ((x+y)>100) {
                return true;
            }
            return false;
        });

        //executing a function
        if (this.funcField) //ensure it isn't null
        {
            let _result = this.funcField(100,200);
        }
    }


}