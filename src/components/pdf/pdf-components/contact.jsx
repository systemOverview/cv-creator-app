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
    },

    icon : {
        marginRight : 3,
        height : 18,
        width : "auto",
    }
})
export const ContactInfo = ({email, phone, address}) => {
    return(
        <View style = {styles.contactSection}>
            <View style = {styles.contactSectionItem}>
                <Image style = {styles.icon} src={phoneIcon}> </Image>
                <Text> 012345678</Text>
            </View>

            <View style = {styles.contactSectionItem}>
                <Image style = {styles.icon} src={emailIcon}> </Image>
                <Text> badiskerdellou@gmail.com </Text>
            </View>

            <View style = {styles.contactSectionItem}>
                <Image style = {styles.icon} src={addressIcon}> </Image>
                <Text> Pallaswiesenstr 35 </Text>
            </View>

        </View>
    )
}

export default ContactInfo