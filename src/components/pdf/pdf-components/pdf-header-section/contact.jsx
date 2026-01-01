import {Page, Text, View, Document, StyleSheet, Canvas, Image} from '@react-pdf/renderer';
import  phoneIcon from "/src/assets/iconspng/phone.png"
import  emailIcon from "/src/assets/iconspng/email.png"
import  addressIcon from "/src/assets/iconspng/location.png"

const styles = StyleSheet.create({
    contactSection : {
        marginTop: 10,
        display: "flex",
        flexDirection : "row",
        justifyContent : "center"
    },

    contactSectionItem : {
        display: "flex",
        flexDirection : "row",
        marginRight : 10,
        alignItems : "center"
    },

    icon : {
        marginRight : 3,
        height : 10,
        width : "auto",
    }
})
export const ContactInfo = (contactInfo) => {
    let {phoneNumber, email, address} = contactInfo;
    return(

    <View style = {styles.contactSection}>
            <View style = {styles.contactSectionItem}>
                {phoneNumber!=""?<Image style={styles.icon} src={phoneIcon}> </Image>:null}
                {phoneNumber!=""?<Text> {phoneNumber}</Text>:null}
            </View>

            <View style = {styles.contactSectionItem}>
                {email!=""?<Image style={styles.icon} src={emailIcon}> </Image>:null}
                {email!=""?<Text>{email}</Text>:null}
            </View>

            <View style = {styles.contactSectionItem}>
                {address!=""?<Image style={styles.icon} src={addressIcon}> </Image>:null}
                {address!=""?<Text>{address}</Text>:null}
            </View>

        </View>
    )
}

export default ContactInfo