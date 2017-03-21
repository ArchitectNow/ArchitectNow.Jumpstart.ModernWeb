import { BaseModel } from "./BaseModel";

export class Person extends BaseModel {

    constructor() {
        super();
    }

    nameFirst: string;

    nameLast: string;

    ssn: string;

    isActive: boolean;

    getDisplayName(): string {
        return this.nameFirst + " " + this.nameLast;
    }

}