import {generateRandomId, getRandomInt} from "../../components/helper.js";
import Achievement from "./achievements-class.js"

export class experienceData {
    get companyName() {
        return this._companyName;
    }

    get companyLocation() {
        return this._companyLocation;
    }

    get title() {
        return this._title;
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

    changeObjectInData(attributeToChange, newValue){
        this[attributeToChange] = newValue;
        this.setterFunction(
            prevData=>{
                return (
                    prevData.map(
                        element=>{
                            if (element.key == this.key){
                                return this;
                            }
                            return element;
                        }

                    )
                )
            }
        )
    }

    constructor(companyName="", companyLocation="", title="", startDate="", endDate="", achievements=[], setterFunction = null) {
        this._companyName = companyName;
        this._companyLocation = companyLocation;
        this._title = title;
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


    set companyName(value) {
        this._companyName = value;
    }

    set companyLocation(value) {
        this._companyLocation = value;
    }

    set title(value) {
        this._title = value;
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

    set setterFunction(value) {
        this._setterFunction = value;
    }



}