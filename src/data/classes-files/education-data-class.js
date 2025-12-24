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

    constructor(schoolName, schoolDegree, startDate, endDate, achievements, setterFunction = null) {
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
        this.changeObjectInData("_schoolName", value)
    }

    set schoolDegree(value) {
        this.changeObjectInData("_schoolDegree", value)
    }


    set startDate(value) {
        this.changeObjectInData("_startDate", value)
    }

    set endDate(value) {
        this.changeObjectInData("_endDate", value)
    }

    set achievements(value) {

    }
    set setterFunction(value) {
        this._setterFunction = value;
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

    removeSelf(){
        this.setterFunction(
            prev=>{
                return(
                    prev.filter(entry=>entry.key!=this.key)
                )
            }
        )
    }

    removeEmptyAchievements(){
        let updatedAchievementsList = this._achievements.filter(
            (achievement)=>{ return achievement.achievementText!=""}
        )
        this.changeObjectInData("_achievements", updatedAchievementsList)
    }

}
