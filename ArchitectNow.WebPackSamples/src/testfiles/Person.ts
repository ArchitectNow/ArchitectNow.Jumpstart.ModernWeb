export class Person {

    nameFirst: string;
    nameLast: string;

    getDisplayName() : string {
        return this.nameFirst + ' ' + this.nameLast;
    }

}