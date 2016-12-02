abstract class BaseWorker {

    //constructors have this specific name and can have parameters
    constructor() {
        
    }

    //TypeScript Scopes (similar to C#)
    // public (default - not the same as C#)
    // private 
    // protected
    
    public publicFunction() {

    }

    anotherPublicFunction() {

    }

    private privateFunction() {

    }

    protected protectedFunction() {

    }
}

// Keyword "extends" indicates inheritance
class MockWorker extends BaseWorker 
{
    //readonly variables can only be initialized inline or in a constructor
    private rootUrl: string;

    constructor()
    {
        //must call this to trigger base class constructor.  Must be first
        super();

        this.rootUrl = "http://www.rooturl.com";
    }
}

interface IAsyncWorker {
    doWorkAsync();
}

// a class which both inherits from a base class and implements an interface
class AsyncWorker extends BaseWorker implements IAsyncWorker
{
    doWorkAsync() {
        
    }
}


class PropertySamples 
{
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        this._fullName = newName;
    }

    testProperty(name: string)
    {
        this.fullName = name;

        console.log(this.fullName);
    }
}

class ConstructorSample1 {

    private rootUrl: string;

    constructor(rootUrl: string)
    {
        this.rootUrl = rootUrl;
    }

    doWork(){
        console.log(this.rootUrl)
    }
}

class ConstructorSample2 {

    constructor(private rootUrl: string)
    {

    }

    doWork(){
        console.log(this.rootUrl)
    }
}

class StaticSample {
    static rootUrl: string;

    constructor()
    {
        console.log(StaticSample.rootUrl);
    }
}

// type checking samples

var p = new StaticSample();

if (typeof p === 'StaticSample')
{
    //should be true
}
