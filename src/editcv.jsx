import "./styles/editcv.css"
import {useState, memo} from 'react'
import CvSectionComponent from "./components/cvSection.jsx";
import ExperienceEditor from "./components/experience-info/experienceEditor.jsx";
import PersonalInfoSection from "./components/personal-info/personalInfoSection.jsx";
import EducationEditor from "./components/school-info/educationEditor.jsx";
import SkillsEditor from "./components/skills/skillsEditor.jsx";
import jobIcon from "./assets/job.svg"
import personalIcon from "./assets/personal.svg"
import educationIcon from "./assets/education.svg"
import skillsIcon from "./assets/skills.svg"
function EditCvSection({personalData, educationData, experienceData, skillsData}) {
    return (

        <section id="pdf" className={"edit-cv-section"}>
            <PersonalInfoSection data={personalData} title={"Personal information"} icon={personalIcon}/>
            <CvSectionComponent data={educationData} title={"Education"} icon={educationIcon}
                                Editor={EducationEditor}/>

            <CvSectionComponent data={experienceData} title={"Professional experience"} icon={jobIcon}
                                Editor={ExperienceEditor}/>

            <CvSectionComponent data={skillsData} title={"Skills"} icon={skillsIcon}
                                Editor={SkillsEditor}/>



        </section>
    )
}

/*
})*/

export default EditCvSection;