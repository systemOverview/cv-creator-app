import React, {useEffect, useState, memo, useContext, createContext} from 'react'
import './styles/App.css'
import {firstPersonalDataExample} from "./data/cv-data-examples.js";
import {experienceExamples} from "./data/cv-data-examples.js";
import {educationExamples} from "./data/cv-data-examples.js";
import {skillsExamples} from "./data/cv-data-examples.js";
import Editcv from "./editcv.jsx";
import MyDocument from "./components/pdf/pdf.jsx";
import PDFViewer from "./components/pdf/pdfPreview.jsx";
import PersonalInfoSection from "./components/personal-info/personalInfoSection.jsx";
import personalIcon from "./assets/personal.svg";
import CvSectionComponent from "./components/cvSection.jsx";
import ExperienceEditor from "./components/experienceEditor.jsx";
import {getRandomInt} from "./components/helper.js"
import jobIcon from "./assets/job.svg";
/*
const test = memo();
*/



const App = () => {
    const [name, setName] = useState("nsull");
    const [personalData, setPersonalData] = useState(firstPersonalDataExample)
    const [educationData,setEducationData] = useState(educationExamples)
    const [experienceData, setExperienceData] = useState(experienceExamples)
    const [skillsData, setSkillsData] = useState(skillsExamples)
    return(
    <div className={"container"}>


        <Editcv

            PersonalData = {[personalData, setPersonalData]}
            educationData = {[[educationData,setEducationData]]}
            experienceData = {[[experienceData,setExperienceData]]}
            skillsData = {[[skillsData,setSkillsData]]}
            >
        </Editcv>
{/*
        <PDFViewer className ="pdff">
            <MyDocument name={name}> </MyDocument>
        </PDFViewer>
*/}
        <PDFViewer>
            <MyDocument personalData={personalData}> </MyDocument>
        </PDFViewer>



    </div>
    )



}

export default App
