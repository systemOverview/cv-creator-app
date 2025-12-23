import {generateRandomId, getRandomInt} from "../../components/helper.js";
import {achievementsList} from "../cv-data-examples.js";
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

    constructor(companyName, companyLocation, title, startDate, endDate, achievements, setterFunction = null) {
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
        this.changeObjectInData("_companyName", value)
    }

    set companyLocation(value) {
        this.changeObjectInData("_companyLocation", value)
    }

    set title(value) {
        this.changeObjectInData("_title", value)
    }

    set startDate(value) {
        this.changeObjectInData("_startDate", value)
    }

    set endDate(value) {
        this.changeObjectInData("_endDate", value)
    }

    set achievements(value) {

    }

    addAchievement(){
        let updatedAchievementsList = [...this._achievements, new Achievement("")]
        this.changeObjectInData("_achievements", updatedAchievementsList)

    }

    updateAchievements(achievementToUpdateKey, newAchievementValue){
        let updatedAchievementsList = this._achievements.map(
            achievement=>{
                if (achievement.achievementKey == achievementToUpdateKey){
                    achievement.achievementText = newAchievementValue;
                    return achievement;
                }
                return achievement;
            }
        )
        this.changeObjectInData("_achievements", updatedAchievementsList)
    }

    deleteAchievement(keyOfAchievementToDelete){
        let updatedAchievementsList = this._achievements.filter(
            (achievement)=>{ return achievement.achievementKey!=keyOfAchievementToDelete}
        )
        this.changeObjectInData("_achievements", updatedAchievementsList)

    }


    set setterFunction(value) {
        this._setterFunction = value;
    }



}