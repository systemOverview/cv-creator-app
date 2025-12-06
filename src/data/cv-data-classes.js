import {generateRandomId} from "../components/helper.js";


export const personalData = {
    name : "",
    title: "",
    photo:"",
    Email:"",
    phoneNumber:"",
    address:""

}

export function experienceData(companyName, companyLocation, startDate, endDate, achievements){
    this.companyName = companyName;
    this.companyLocation = companyLocation;
    this.startDate = startDate;
    this.endDate = endDate;
    this.achievements = achievements;
    this.key = generateRandomId();
}

export function educationData(schoolName, startDate, endDate, achievements){
    this.schoolName = schoolName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.achievements = achievements;
    this.key = generateRandomId();
}

export function skillsData(skillName){
    this.skillName = skillName;
    this.key = generateRandomId();
}