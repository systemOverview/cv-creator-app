import {generateRandomId, getRandomInt} from "../../components/helper.js";
import {achievementsList} from "../cv-data-examples.js";
import Achievement from "./achievements-class.js"

export class educationData {
    get schoolName() {
        return this._schoolName;
    }

    get degreeName() {
        return this._schoolDegree;
    }


    get startDate() {
        return this._startDate;
    }

    get endDate() {
        return this._endDate;
    }

    get achievements() {
        return this._achievements;
    }

    get setterFunction() {
        return this._setterFunction;
    }

    get key() {
        return this._key;
    }


    constructor(schoolName="", schoolDegree="", startDate="", endDate="", achievements=[], setterFunction = null) {
        this._schoolName = schoolName;
        this._schoolDegree = schoolDegree;
        this._startDate = startDate;
        this._endDate = endDate;
        this._achievements = achievements.map(
            achievementText => {
                return (new Achievement(achievementText))
            }
        );
        this._key = generateRandomId();
        this._setterFunction = setterFunction;


    }


    set schoolName(value) {
        this._schoolName = value;
    }

    set schoolDegree(value) {
        this._schoolDegree = value;
    }


    set startDate(value) {
        this._startDate = value;
    }

    set endDate(value) {
        this._endDate = value;
    }


    set setterFunction(value) {
        this._setterFunction = value;
    }
    addAchievement(){
        this._achievements = [...this._achievements, new Achievement("")];
    }
    updateAchievement(achievementToUpdateKey, newAchievementValue){
        for (let achievement of this._achievements ){
            if (achievement.achievementKey==achievementToUpdateKey){
                achievement.achievementText=newAchievementValue
                break;
            }
        }
    }

    deleteAchievement(keyOfAchievementToDelete){
        this._achievements = this._achievements.filter(
            (achievement)=>{ return achievement.achievementKey!=keyOfAchievementToDelete}
        )

    }

    removeEmptyAchievements(){
        this._achievements = this._achievements.filter(
            (achievement)=>{return achievement.achievementText!=""}
        )
    }

}
