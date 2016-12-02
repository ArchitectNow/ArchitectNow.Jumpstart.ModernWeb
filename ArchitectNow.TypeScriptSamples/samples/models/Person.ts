import { BaseModel } from "./BaseModel";

export class Person extends BaseModel {

    constructor() {
        super();
    }

    nameFirst: string;

    nameLast: string;

    getDisplayName(): string {
        return this.nameFirst + " " + this.nameLast;
    }

}