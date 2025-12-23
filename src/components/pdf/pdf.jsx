import {Canvas, Document, Page, StyleSheet, View, Text} from '@react-pdf/renderer';
import CVHeader from "./pdf-components/pdf-header-section/CVHeader.jsx";
import CVEducation from "./pdf-components/pdf-education-section/CVEducation.jsx";
import CVExperience from "./pdf-components/pdf-experience-section/CVExperience.jsx";
import CVSkills from "./pdf-components/pdf-skills-section/CVSkills.jsx"

import SectionDivider from "./pdf-components/SectionDivider.jsx";
import {useState, useContext} from "react";
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        fontSize: 11,
        paddingLeft : 40,
        paddingRight : 40,
        paddingTop: 20,
    },

    section : {
        marginTop: 15,
    },

    debugRedBorder : {
        border : "1pt solid red",
    }

});


// Create Document Component
const MyDocument = ({personalData,educationData, experienceData,skillsData}) => {
    console.log(skillsData)
    let {name, title, email, phoneNumber, address} = personalData;
    const [fullName, setFullName] = useState("null");
    return (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <CVHeader
                    name={() => (`${name}`)}
                    title={() => (`${title}`)}
                    email={() => (`${email}`)}
                    phoneNumber={() => (`${phoneNumber}`)}
                    address={() => (`${address}`)}

                />

{/*
                <SectionDivider> </SectionDivider>
*/}


            </View>

            <View  style={styles.section}>
                <CVEducation
                    educationData = {educationData}
                />

            </View>

            <View>
                <CVExperience
                experienceData={experienceData}>
            </CVExperience>
            </View>

            <View>
                <CVSkills skillsData={skillsData}>
                </CVSkills>
            </View>

        </Page>
    </Document>
    )

};


export default MyDocument