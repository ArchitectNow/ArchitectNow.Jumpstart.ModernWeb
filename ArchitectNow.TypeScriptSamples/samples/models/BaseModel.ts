
export abstract class BaseModel {

    constructor() {
        this.isActive = false;
    }

    id: number;

    isActive: boolean;
}