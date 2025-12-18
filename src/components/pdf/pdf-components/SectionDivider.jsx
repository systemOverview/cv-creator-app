import {Canvas, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({

    sectionDivider : {
        marginTop : 10,
        paddingLeft : -40
    }


});

function SectionDivider() {
    return (
    <Canvas style={styles.sectionDivider} paint={(painterObject) => {
        painterObject.moveTo(0, 0)
            .lineTo(600, 0)
            .stroke();

    }}>

    </Canvas>
    )
}

export default SectionDivider