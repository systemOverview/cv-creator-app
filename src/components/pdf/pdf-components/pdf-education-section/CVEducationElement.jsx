import {Canvas, Text, Font, View} from "@react-pdf/renderer";
import {StyleSheet} from "@react-pdf/renderer";
import Achievements from "../CVAchievements.jsx"
let styles = StyleSheet.create(
    {
        elementHeader : {
            marginTop : 10,
           display : "flex",
            flexDirection:"row",
           justifyContent: "space-between",
            fontWeight : "bold",

        },
        date : {
            textAlign : "right",
        },
        degreeName : {
            fontWeight : "bold",
/*
            fontSize : 13,
*/
            marginTop : 5,
            marginBottom : 2,

        }

    }
)
function CVEducationElement({element, index}){
    let marginTop = 0;
    if (index>0){
        marginTop = 5; // only apply margin top for multiple elements starting from the second one
    }
    return(
        <View style = {{marginTop: marginTop}}>
            <View style = {styles.elementHeader}>

                {element.schoolName?<Text> {element.schoolName} </Text>:null}
                {element.startDate || element.endDate?<Text style={styles.date}> {element.startDate} - {element.endDate} </Text>:null}

            </View>

            {element.degreeName?<Text style={styles.degreeName}> {element.degreeName} </Text>:null}
            <Achievements achievementsList = {element.achievements}/>
        </View>
    )
}

export default CVEducationElement

