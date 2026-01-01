import {Canvas, Document, Page, StyleSheet, View, Text} from '@react-pdf/renderer';
import CVHeader from "./pdf-components/pdf-header-section/CVHeader.jsx";
import CVEducation from "./pdf-components/pdf-education-section/CVEducation.jsx";
import CVExperience from "./pdf-components/pdf-experience-section/CVExperience.jsx";
import CVSkills from "./pdf-components/pdf-skills-section/CVSkills.jsx"
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


const MyDocument = ({personalData,educationData, experienceData,skillsData}) => {

    return (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <CVHeader
                    personalData = {personalData}

                />

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