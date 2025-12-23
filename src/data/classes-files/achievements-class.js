import {generateRandomId, getRandomInt} from "../../components/helper.js";
import {achievementsList} from "../cv-data-examples.js";

export default class Achievement{

    get achievementText() {
        return this._achievementText;
    }

    get achievementKey() {
        return this._achievementKey;
    }

    get achievementPlaceholder() {
        return this._achievementPlaceholder;
    }

    set achievementText (value){
        this._achievementText = value;
    }


    constructor(achievement) {
        this._achievementText =  achievement;
        this._achievementKey =  generateRandomId();
        this._achievementPlaceholder = achievementsList[getRandomInt(0, achievementsList.length - 1)]
    }
}