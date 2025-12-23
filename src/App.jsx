import React, {useEffect, useState, memo, useContext, createContext} from 'react'

import './styles/App.css'


import {PDFDownloaderButton} from "./components/pdf/PDFDownloader.jsx"
import {firstPersonalDataExample} from "./data/cv-data-examples.js";
import {experienceExamples} from "./data/cv-data-examples.js";
import {educationExamples} from "./data/cv-data-examples.js";
import {skillsExamples} from "./data/cv-data-examples.js";
import Editcv from "./editcv.jsx";
import MyDocument from "./components/pdf/pdf.jsx";
import PDFViewer from "./components/pdf/pdfPreview.jsx";
import {generateRandomExample} from "./components/helper.js"
import PersonalInfoSection from "./components/personal-info/personalInfoSection.jsx";
import personalIcon from "./assets/personal.svg";
import CvSectionComponent from "./components/cvSection.jsx";
import {getRandomInt} from "./components/helper.js"
import jobIcon from "./assets/job.svg";



const App = () => {


    const [name, setName] = useState("nsull");
    const [personalData, setPersonalData] = useState(firstPersonalDataExample)
    const [educationData,setEducationData] = useState(educationExamples)
    const [experienceData, setExperienceData] = useState(experienceExamples)
    const [skillsData, setSkillsData] = useState(skillsExamples)
    useEffect(() => {
        experienceData[0].setterFunction = setExperienceData;
        educationData[0].setterFunction = setEducationData;
    }, []);
    let arr = [1];

    let CV =             <MyDocument
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
    >
    </MyDocument>
    return(
    <div className={"container"}>

    <div className={"left-container"}>
        <Editcv
            PersonalData = {[personalData, setPersonalData]}
            educationData = {[educationData,setEducationData]}
            experienceData = {[experienceData,setExperienceData]}
            skillsData = {[skillsData,setSkillsData]}
            >
        </Editcv>

        <PDFDownloaderButton name = {personalData.name} doc = {CV}>

        </PDFDownloaderButton>
    </div>

        <PDFViewer>
            {CV}
        </PDFViewer>




    </div>
    )



}

export default App
