export class baseModel {

    constructor(kwArgs?) {
        if (kwArgs) {
            for (let key in kwArgs) if (kwArgs.hasOwnProperty(key)) {
                this[key] = kwArgs[key];
            }
        }
    }

    clone(): this {
        return new (this.constructor as any)(this);
    }

}