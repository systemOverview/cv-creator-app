/* TODO : refactor the CV education into something more re-usable instead of creating two
*   very similar components (experience/education pdf component)*/

import {Canvas, Text, Font} from "@react-pdf/renderer";
import {StyleSheet} from "@react-pdf/renderer";
import SectionDivider from "../SectionDivider.jsx";
import CVExperienceElement from './CVExperienceElement.jsx'


const styles = StyleSheet.create({
    title : {
        fontWeight : "bold",
        marginTop: 25
    }
});


function CVExperienceELements ({elements}){
    return (
        elements.map(
            (element, index) =>{
                return <CVExperienceElement element = {element} index = {index}> </CVExperienceElement>
            }
        )
    )
}

function CVExperience({experienceData}){
    if (experienceData==undefined || experienceData.getCountOfElements()==0){
        return;
    }
    return <section>
        <Text style = {styles.title}> EXPERIENCE </Text>
        <SectionDivider/>


        <CVExperienceELements elements={ experienceData.elements}> </CVExperienceELements>


    </section>
        ;
}

export default CVExperience;
