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

    set skillName(value) {
/*
        this._skillName = value;
*/
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

    addSkill(newSkillValue){
        this._setterFunction(
            prev=>[...prev, new skillsData(newSkillValue)]
        )
    }



    removeSkill(){
        this._setterFunction(
            prev=>prev.filter(skill=>skill.key!=this._key)
        )

    }
}

