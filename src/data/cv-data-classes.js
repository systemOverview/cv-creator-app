import {generateRandomId, getRandomInt} from "../components/helper.js";
import {achievementsList} from "./cv-data-examples.js"
import {experienceData} from "./classes-files/experience-data-class.js"

let dataClasses = {
    experienceData : experienceData
}

export default dataClasses
export class personalData {
    constructor(name, title, photo, email, phoneNumber, address) {

        this.name = name;
        this.title = title;
        this.photo = photo;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }


}



export function educationData(schoolName, degreeName, startDate, endDate, achievements){
    this.schoolName = schoolName;
    this.degreeName = degreeName;
    this.startDate = startDate;
    this.endDate = endDate;

    this.achievements = achievements.map(
        achievement=>{
            return {
                achievementText : achievement,
                achievementKey : generateRandomId(),
                achievementPlaceholder : achievementsList[getRandomInt(0,achievementsList.length-1)]
            }
        }
    );
    this.key = generateRandomId();

}

export function skillsData(skillName){
    this.skillName = skillName;
    this.key = generateRandomId();
}