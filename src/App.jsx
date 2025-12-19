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
import ExperienceEditor from "./components/experienceEditor.jsx";
import {getRandomInt} from "./components/helper.js"
import jobIcon from "./assets/job.svg";



const App = () => {


    const [name, setName] = useState("nsull");
    const [personalData, setPersonalData] = useState(firstPersonalDataExample)
    const [educationData,setEducationData] = useState(educationExamples)
    const [experienceData, setExperienceData] = useState(experienceExamples)
    const [skillsData, setSkillsData] = useState(skillsExamples)
    const [pdfLink, setPdfLink] = useState(null);
    const [test, setTest] = useState(1);
    useEffect(() => {
        //Runs only on the first render
    }, []);

    let CV =             <MyDocument
        personalData={personalData}
        educationData={educationData}>
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
        {/* setPdfLink = {setPdfLink}*/}

        <PDFViewer setPdfLink = {setTest}>
            {CV}
        </PDFViewer>

{/*

*/}

{/*

    <div>
        <CreatePdfUrl file = {CV}> </CreatePdfUrl>
    </div>
*/}



    </div>
    )



}

export default App
