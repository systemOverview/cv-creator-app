
import {Canvas, Text, Font} from "@react-pdf/renderer";
import {StyleSheet} from "@react-pdf/renderer";
import SectionDivider from "../SectionDivider.jsx";


const styles = StyleSheet.create({
    title : {
        fontWeight : "bold",
        marginTop: 25
    },
    skillstext:{
        marginTop: 10
    }
});



function CVSkills({skillsData}){
    if (skillsData==undefined || skillsData.getCountOfElements()==0){
        return;
    }
    let skillsText = "";
    skillsData.elements.map(

        element=>{
            if (skillsText.length!=0) {
                skillsText += ", "
            }
            skillsText+=(element.skillName)
        }
    )

    return <section>
        <Text style = {styles.title}> SKILLS </Text>
        <SectionDivider/>
        <Text style={styles.skillstext}> {skillsText} </Text>



    </section>

}

export default CVSkills;
