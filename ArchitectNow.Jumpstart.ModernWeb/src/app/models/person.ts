import { baseModel } from "./baseModel";

export class Person extends baseModel {

    constructor(kwArgs?) {
        super(kwArgs);
    }

    name: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
}