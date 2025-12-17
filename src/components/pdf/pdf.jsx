import {Canvas, Document, Page, StyleSheet, View} from '@react-pdf/renderer';
import CVHeader from "./pdf-components/CVHeader.jsx";
import SectionDivider from "./pdf-components/SectionDivider.jsx";
import {useState, useContext} from "react";
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        fontSize: 15,
    }

});


// Create Document Component
const MyDocument = ({personalData}) => {
    let {name, title, email, phoneNumber, address} = personalData;

    const [fullName, setFullName] = useState("null");

    const test = {
        name : "B",
        title :"t",
        photo : null,
        email : "test",
        phoneNumber : "1234",
        address : "here"
    }
    return (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <CVHeader
                    name={() => (`${name}`)}
                    title={() => (`${title}`)}
                    email={() => (`${email}`)}
                    phoneNumber={() => (`${phoneNumber}`)}
                    address={() => (`${address}`)}


                />

                <SectionDivider> </SectionDivider>
            </View>

        </Page>
    </Document>
    )

};


export default MyDocument