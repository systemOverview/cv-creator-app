import {Canvas, Text, View} from "@react-pdf/renderer";
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


    return <View>
        {personalData.name!=""?<Text style={styles.fullName} fixed>{personalData.name}</Text>:null}

        {personalData.title!=""?<Text style={styles.title} fixed>{personalData.title}</Text>:null}

        <ContactInfo
            phoneNumber={personalData.phoneNumber}
            email = {personalData.email}
            address = {personalData.address}

        >
        </ContactInfo>



    </View>;
}

export default CVHeader


