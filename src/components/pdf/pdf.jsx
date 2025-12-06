import {Canvas, Document, Page, StyleSheet, View} from '@react-pdf/renderer';
import CVHeader from "./pdf-components/CVHeader.jsx";
import SectionDivider from "./pdf-components/SectionDivider.jsx";
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        fontSize: 15,
    }

});


// Create Document Component
const MyDocument = ({name}) => {

    return (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <CVHeader render={() => (
                    `${name}`
                )} />

                <SectionDivider> </SectionDivider>
            </View>

        </Page>
    </Document>
    )

};


export default MyDocument