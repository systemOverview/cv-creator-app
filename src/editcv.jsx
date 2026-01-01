import "./styles/editcv.css"
import {useState, memo} from 'react'
import CvSectionComponent from "./components/cvSection.jsx";
import ExperienceEditor from "./components/experience-info/experienceEditor.jsx";
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
function EditCvSection({personalData, educationData, experienceData, skillsData}) {
    console.log(skillsData)
    return (



        <section id="pdf" className={"edit-cv-section"}>
            <PersonalInfoSection data={personalData[0]} title={"Personal information"} icon={personalIcon}/>
            <CvSectionComponent data={educationData} title={"Education"} icon={educationIcon}
                                Editor={EducationEditor}/>
            <CvSectionComponent data={experienceData} title={"Professional experience"} icon={jobIcon}
                                Editor={ExperienceEditor}/>
            <CvSectionComponent skills={skillsData} title={"Skills"} icon={skillsIcon}
                                Editor={SkillsEditor}/>

        </section>
    )
}

/*
})*/

export default EditCvSection;