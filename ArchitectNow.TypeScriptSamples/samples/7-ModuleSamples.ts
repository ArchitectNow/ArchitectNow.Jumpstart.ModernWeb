import { Person } from "./models/Person";  // extension not required
import { BaseModel as base } from "../samples/models/BaseModel"; //relative paths supported
// note the rename/alias above
import  * as ApiModule from "./services/ApiModule";
// the above uses a wildcard to pull in everything in the file (which has been exported)

// User of "Export" keyword makes a class visible as a module
export class ModuleSamples {

    doWork()
    {
        var b: base = new Person();

        var _rootUrl = ApiModule.rootUrl;

        var _personApiService = new ApiModule.PersonApiService();
    }

}