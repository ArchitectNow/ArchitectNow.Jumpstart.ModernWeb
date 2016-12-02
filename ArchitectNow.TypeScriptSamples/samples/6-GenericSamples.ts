import { BaseModel } from "./models/BaseModel";
import { Person } from "./models/Person";

class BaseService<T> {

    getItem(id: number): T {
        return null;
    }

    saveItem(item: T) : T 
    {
        return item;
    }

    genericFunction<Y>(input: Y)
    {
        
    }

    genericTypeInference()
    {
        this.genericFunction<number>(12);
        this.genericFunction(12);
    }

    typeConstraintExample<Y extends BaseModel>(input: Y)
    {

    }

    executeFunction()
    {
        //this.typeConstraintExample<number>(12);
        this.typeConstraintExample(new Person());
    }



}