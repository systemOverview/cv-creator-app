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


function CVHeader(props) {

    let {name, title, email, phoneNumber, address, personalData} = props;

    return <section className={"header"}>
        <Text style={styles.fullName} render={name} fixed></Text>
        <Text style={styles.title} render={title}> </Text>

        <ContactInfo
            phoneNumber={phoneNumber}
            email = {email}
            address = {address}

        >
        </ContactInfo>


    </section>;
}

export default CVHeader


