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
        marginTop = 15; // only apply margin top for multiple elements starting from the second one
    }
    return(
        <View style = {{marginTop: marginTop}}>
            <View style = {styles.elementHeader}>
                <Text> {element.schoolName} </Text>
                <Text style={styles.date}> {element.startDate} - {element.endDate} </Text>
            </View>

            <Text style = {styles.degreeName}> {element.degreeName} </Text>
            <Achievements achievementsList = {element.achievements}/>
        </View>
    )
}

export default CVEducationElement

/*
export function educationData(schoolName, degreeName, startDate, endDate, achievements){
    this.schoolName = schoolName;
    this.degreeName = degreeName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.achievements = achievements;
    this.key = generateRandomId();
}
*/