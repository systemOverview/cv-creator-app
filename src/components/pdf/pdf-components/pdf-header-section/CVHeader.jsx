import {Canvas, Text} from "@react-pdf/renderer";
import ContactInfo from "./contact.jsx";
import {StyleSheet} from "@react-pdf/renderer";


const styles = StyleSheet.create({


    fullName : {
        textAlign : "center",
        fontWeight : "bold",
        marginBottom : 3,
        fontSize : 18,

    },

    title : {
        letterSpacing : 1,
        textAlign : "center",
        fontStyle : "italic"
    }



});


function CVHeader({personalData}) {


    return <section className={"header"}>
        <Text style={styles.fullName} fixed>{personalData.name}</Text>

        <Text style={styles.title}> {personalData.title}</Text>

        <ContactInfo
            phoneNumber={personalData.phoneNumber}
            email = {personalData.email}
            address = {personalData.address}

        >
        </ContactInfo>



    </section>;
}

export default CVHeader


