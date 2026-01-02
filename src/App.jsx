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
import {DataHolder} from "./data/cv-data-classes.js"
import {skillsDataHolder} from "./data/cv-data-classes.js"

const App = () => {


    const [personalData, setPersonalData] = useState(firstPersonalDataExample)
    const [educationData, setEducationData] = useState(new DataHolder(educationExamples))
    const [experienceData, setExperienceData] = useState(new DataHolder(experienceExamples))
    const [skillsData, setSkillsData] = useState(new skillsDataHolder(skillsExamples))

    useEffect(() => {
        // Link the state setting function for all objects
        personalData.setterFunction = setPersonalData;;
        educationData.setterFunction = setEducationData;
        experienceData.setterFunction = setExperienceData;
        skillsData.setterFunction = setSkillsData;
    }, [personalData, educationData, experienceData, skillsData]);

    let CV = <MyDocument
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
        skillsData={skillsData}
    >
    </MyDocument>

    function resetData() {
        setPersonalData(emptyData.emptyPersonalData)
        setEducationData(new DataHolder())
        setExperienceData(new DataHolder())
        setSkillsData(new skillsDataHolder())
    }

    function loadExamples() {
        setPersonalData(firstPersonalDataExample)
        setEducationData(new DataHolder(educationExamples))
        setExperienceData(new DataHolder(experienceExamples))
        setSkillsData(new skillsDataHolder(skillsExamples))
    }

    return (
        <div className={"container"}>
            <div className={"left-container"}>
                <div className={"state-buttons"}>
                    <button onClick={loadExamples} className={"load-example-button"} id={"load-example"}> Load example
                    </button>
                    <button onClick={resetData} className={"reset-form-button"} id={"reset-form"}> Reset form</button>
                </div>
                <Editcv
                    personalData={personalData}
                    educationData={educationData}
                    experienceData={experienceData}
                    skillsData={skillsData}
                >
                </Editcv>

                <PDFDownloaderButton name={personalData ? personalData.name : ""} doc={CV}>

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
