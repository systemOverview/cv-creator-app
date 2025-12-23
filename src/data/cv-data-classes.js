import {experienceData} from "./classes-files/experience-data-class.js"
import {educationData} from "./classes-files/education-data-class.js"
import {skillsData} from "./classes-files/skills-data-class.js"

let dataClasses = {
    experienceData : experienceData,
    educationData: educationData,
    skillsData : skillsData
}

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



export default dataClasses
