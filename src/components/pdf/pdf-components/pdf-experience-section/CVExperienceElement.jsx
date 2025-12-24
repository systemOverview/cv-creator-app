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
        title : {
            fontWeight : "bold",
            /*
                        fontSize : 13,
            */
            marginTop : 5,
            marginBottom : 2,

        }

    }
)
function CVExperienceElement({element, index}){
    let marginTop = 0;
    if (index>0){
        marginTop = 5; // only apply margin top for multiple elements starting from the second one
    }
    return(
        <View style = {{marginTop: marginTop}}>
            <View style = {styles.elementHeader}>
                {element.companyName?<Text> {element.companyName} </Text>:null}
                {element.startDate || element.endDate?<Text style={styles.date}> {element.startDate} - {element.endDate} </Text>:null}
            </View>

            {element.title?<Text style={styles.title}> {element.title} </Text>:null}


            <Achievements achievementsList={element.achievements}/>
        </View>
    )
}


export default CVExperienceElement