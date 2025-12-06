import {Canvas, Text} from "@react-pdf/renderer";
import ContactInfo from "./contact.jsx";
import {StyleSheet} from "@react-pdf/renderer";


const styles = StyleSheet.create({


    fullName : {
        textAlign : "center",
        fontWeight : "bold",
        marginBottom : 3,

    },

    title : {
        letterSpacing : 1,
        textAlign : "center",
        fontStyle : "italic"
    }



});


function CVHeader(props) {
    return <section className={"header"}>
        <Text style={styles.fullName} render={props.render} fixed></Text>
        <Text style={styles.title}> Student at Hochschule Darmstadtsssssssssssssspakakaka Darmstadssssssss </Text>
        <ContactInfo> </ContactInfo>

    </section>;
}

export default CVHeader


