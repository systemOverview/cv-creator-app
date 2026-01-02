import {experienceData} from "./classes-files/experience-data-class.js"
import {educationData} from "./classes-files/education-data-class.js"
import {skillsData} from "./classes-files/skills-data-class.js"
import {personalData} from "./classes-files/personal-data-class.js"
let dataClasses = {
    personalData : personalData,
    experienceData : experienceData,
    educationData: educationData,
    skillsData : skillsData,
}

export class DataHolder{
    constructor(elementsArray=[], setterFunction=null) {
        this._elements = elementsArray;
        this._setterFunction = setterFunction
    }

    addElement(newElement){
        let newObject = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        newObject.elements = [...newObject.elements, newElement];
        this._setterFunction(newObject)
    }
    // I had to use object.assign for the new object to have all the functions and proprieties of the class
    modifyElement(keyOfElementToModify, attributeToChange, newValue){
        let newObject = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        for (let element of newObject.elements){
            if (element.key==keyOfElementToModify){
                element[attributeToChange]=newValue;
            }
        }
        this._setterFunction(newObject)
    }

    removeElement(keyOfElementToRemove){
        let newObject = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        newObject.elements = newObject.elements.filter(
            element=>{return element.key!=keyOfElementToRemove}
        )
        this._setterFunction(newObject)
    }

    addAchievementToElement(keyOfElement){
        let newObject = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        for (let element of newObject.elements){
            if (element.key == keyOfElement){
                element.addAchievement()
                break
            }
        }
        this._setterFunction(newObject)
    }

    modifyAchievementInElement(keyOfElement, achievementToUpdateKey, newAchievementValue){
        let newObject = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        for (let element of newObject.elements){
            if (element.key == keyOfElement){
                element.updateAchievement(achievementToUpdateKey, newAchievementValue)
                break
            }
        }
        this._setterFunction(newObject)
    }

    removeAchievementInElement(keyOfElement, achievementToRemoveKey){
        let newObject = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        for (let element of newObject.elements){
            if (element.key == keyOfElement){
                element.deleteAchievement(achievementToRemoveKey)
                break
            }
        }
        this._setterFunction(newObject)
    }

    removeEmptyAchievementsOfElement(keyOfElement){
        let newObject = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        for (let element of newObject.elements){
            if (element.key == keyOfElement){
                element.removeEmptyAchievements()
                break
            }
        }
        this._setterFunction(newObject)
    }

    getElementByKey(keyOfElementToGet){
        for (let element of this._elements){
            if (element.key==keyOfElementToGet){return element}
        }
    }

    getCountOfElements(){
        return this._elements.length;
    }
    get elements(){
        return this._elements;
    }

    set setterFunction(value){
        this._setterFunction = value;
    }

    set elements(value){
        this._elements = value;
    }

}

export class skillsDataHolder{
    constructor(elementsArray=[], setterFunction=null) {
        this._elements = elementsArray;
        this._setterFunction = setterFunction
    }

    addElement(newElement){
        let newObject = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        newObject.elements = [...newObject.elements, newElement];
        this._setterFunction(newObject)
    }

    removeElement(keyOfElementToRemove){
        let newObject = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        newObject.elements = newObject.elements.filter(
            element=>{return element.key!=keyOfElementToRemove}
        )
        this._setterFunction(newObject)
    }

    getCountOfElements(){
        return this._elements.length;
    }

    get elements(){
        return this._elements;
    }

    set elements(value) {
        this._elements = value;
    }

    set setterFunction(value) {
        this._setterFunction = value;
    }
}


export default dataClasses
