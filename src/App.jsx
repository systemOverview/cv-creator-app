import React, {useEffect, useState, memo, useContext, createContext} from 'react'
import './styles/App.css'
import {PDFDownloaderButton} from "./components/pdf/PDFDownloader.jsx"
import {firstPersonalDataExample} from "./data/cv-data-examples.js";
import {experienceExamples} from "./data/cv-data-examples.js";
import {educationExamples} from "./data/cv-data-examples.js";
import {skillsExamples} from "./data/cv-data-examples.js";
import Editcv from "./editcv.jsx";
import MyDocument from "./components/pdf/pdf.jsx";
import CustomPDFViewer from "./components/pdf/pdfPreview.jsx";

const App = () => {

    const [name, setName] = useState("nsull");
    const [personalData, setPersonalData] = useState(firstPersonalDataExample)
    const [educationData,setEducationData] = useState(educationExamples)
    const [experienceData, setExperienceData] = useState(experienceExamples)
    const [skillsData, setSkillsData] = useState(skillsExamples)
    useEffect(() => {
        // Link the state setting function for all objects
        educationData.forEach(
            item=>item.setterFunction = setEducationData
        )

        experienceData.forEach(
            item=>item.setterFunction = setExperienceData
        )

        skillsData.forEach(
            item=>item.setterFunction = setSkillsData
        )

        personalData.setterFunction = setPersonalData;
    }, [educationData, experienceData, skillsData]);
    let arr = [1];

    let CV =             <MyDocument
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
        skillsData={skillsData}
    >
    </MyDocument>

    return(
    <div className={"container"}>

    <div className={"left-container"}>
        <Editcv
            personalData = {[personalData, setPersonalData]}
            educationData = {[educationData,setEducationData]}
            experienceData = {[experienceData,setExperienceData]}
            skillsData = {[skillsData,setSkillsData]}
            >
        </Editcv>

        <PDFDownloaderButton name = {personalData.name} doc = {CV}>

        </PDFDownloaderButton>
    </div>
    <div className={"pdf-viewer"}>
        <CustomPDFViewer>
            {CV}
        </CustomPDFViewer>
    </div>




    </div>
    )



}

export default App
