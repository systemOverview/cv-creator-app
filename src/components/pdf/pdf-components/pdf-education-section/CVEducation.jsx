import {Canvas, Text, Font} from "@react-pdf/renderer";
import {StyleSheet} from "@react-pdf/renderer";
import SectionDivider from "../SectionDivider.jsx";
import CVEducationElement from './CVEducationElement.jsx'

const styles = StyleSheet.create({
    title : {
        fontWeight : "bold",
    }
});

/*
Font.register({ family: 'FamilyName', src: source, fontStyle: 'normal', fontWeight: 'normal'});
*/

function CVEducationElements ({elements}){
    return (
    elements.map(
        (element, index) =>{
            return <CVEducationElement element = {element} index = {index}> </CVEducationElement>
        }
    )
    )
}

function CVEducation({educationData}){
    if (educationData==undefined || educationData.getCountOfElements()==0){
        return;
    }
    return <section>
        <Text style = {styles.title}> EDUCATION </Text>
        <SectionDivider/>

        <CVEducationElements elements={ educationData.elements}> </CVEducationElements>

    </section>
    ;
}

export default CVEducation;

