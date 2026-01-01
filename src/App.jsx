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
import {emptyData} from "./data/cv-data-examples.js"
const App = () => {
    const [personalData, setPersonalData] = useState(firstPersonalDataExample)
    const [educationData,setEducationData] = useState(educationExamples)
    const [experienceData, setExperienceData] = useState(experienceExamples)
    const [skillsData, setSkillsData] = useState(skillsExamples)
    const [width, setWidth] = useState(null);

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
    }, [personalData,educationData, experienceData, skillsData]);

    let CV =             <MyDocument
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
        skillsData={skillsData}
    >
    </MyDocument>

    function resetData() {
        setPersonalData(emptyData.emptyPersonalData)
        setEducationData([])
        setExperienceData([])
        setSkillsData([])
    }

    function loadExamples(){
        setPersonalData(firstPersonalDataExample)
        setEducationData(educationExamples)
        setExperienceData(experienceExamples)
        setSkillsData(skillsExamples)
    }
    return(
    <div className={"container"}>

    <div className={"left-container"}>
        <div className={"state-buttons"}>
            <button onClick={loadExamples} className={"load-example-button"} id={"load-example"}> Load example</button>
            <button onClick={resetData} className={"reset-form-button"} id={"reset-form"} > Reset form </button>
        </div>
        <Editcv
            personalData = {[personalData, setPersonalData]}
            educationData = {[educationData,setEducationData]}
            experienceData = {[experienceData,setExperienceData]}
            skillsData = {[skillsData,setSkillsData]}
            >
        </Editcv>

        <PDFDownloaderButton  name = {personalData?personalData.name:""} doc = {CV}>

        </PDFDownloaderButton>
    </div>
    <div  className={"pdf-viewer"}>
        <CustomPDFViewer width={width}>
            {CV}
        </CustomPDFViewer>
    </div>




    </div>
    )



}

export default App
