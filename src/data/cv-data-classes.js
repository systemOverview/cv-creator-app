import {generateRandomId} from "../components/helper.js";
import {getRandomInt} from "../components/helper.js";
import {achievementsList} from "./cv-data-examples.js"

export function personalData (name, title, photo, email, phoneNumber, address){

    this.name = name;
    this.title = title;
    this.photo = photo;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
}

export function experienceData(companyName, companyLocation, startDate, endDate, achievements){
    this.companyName = companyName;
    this.companyLocation = companyLocation;
    this.startDate = startDate;
    this.endDate = endDate;
    this.achievements = achievements;
    this.key = generateRandomId();
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