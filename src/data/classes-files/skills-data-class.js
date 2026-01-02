import {generateRandomId} from "../../components/helper.js";

export class skillsData {
    constructor(skillName) {
        this._skillName = skillName;
        this._key = generateRandomId();
        this._setterFunction = null;
    }

    get skillName() {
        return this._skillName;
    }



    get setterFunction() {
        return this._setterFunction;
    }

    set setterFunction(value) {
        this._setterFunction = value;
    }

    get key() {
        return this._key;
    }

    set key(value) {
        this._key = value;
    }

}

