import "./styles/editcv.css"
import { jsPDF } from "jsPDF"
import {useState, memo} from 'react'
import CvSectionComponent from "./components/cvSection.jsx";
import ExperienceEditor from "./components/experienceEditor.jsx";
import PersonalInfoSection from "./components/personal-info/personalInfoSection.jsx";
import EducationEditor from "./components/school-info/educationEditor.jsx";
import SkillsEditor from "./components/skills/skillsEditor.jsx";
import {experienceExamples} from "./data/cv-data-examples.js";
import {educationExamples} from "./data/cv-data-examples.js";
import {skillsExamples} from "./data/cv-data-examples.js";
import jobIcon from "./assets/job.svg"
import personalIcon from "./assets/personal.svg"
import educationIcon from "./assets/education.svg"
import skillsIcon from "./assets/skills.svg"
function EditCvSection({PersonalData, educationData, experienceData, skillsData, setName}) {


    const [isEditingExperience, setEditingExperience] = useState(false);
    const [experienceList, setExperienceList] = useState(experienceExamples)
    const [skillsList, setSkillsList] = useState(skillsExamples)
    return (
/*
        PersonalData = {[personalData, setPersonalData]}
*/


        <section id="pdf" className={"edit-cv-section"}>
            <PersonalInfoSection data={PersonalData} title={"Personal information"} icon={personalIcon}/>
            <CvSectionComponent data={educationData} title={"Professional experience"} icon={jobIcon}
                                editor={ExperienceEditor}/>
            <CvSectionComponent data={experienceData} title={"Education"} icon={educationIcon}
                                editor={EducationEditor}/>
            <CvSectionComponent skills={skillsData} setData={setSkillsList} title={"Skills"} icon={skillsIcon}
                                editor={SkillsEditor}/>

        </section>
    )
}

/*
})*/

export default EditCvSection;