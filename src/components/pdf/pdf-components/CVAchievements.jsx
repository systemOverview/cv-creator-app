import {Canvas, Text, Font, View} from "@react-pdf/renderer";
import {StyleSheet} from "@react-pdf/renderer";
let styles = StyleSheet.create(
    {
        achievement : {
            display : "flex",
            flexDirection : "row",
            marginTop : 5,
            paddingLeft : 15,
/*
            fontSize : 15,
*/
            lineHeight : 0.7,
      },

        bulletPoint : {
            height: "100%",
            fontSize : 13,
            fontWeight : "bold",
            marginRight : 5,
        },


    }
)
function Achievements({achievementsList}){
    return (
        achievementsList.map(
        (achievement)=>{
            return (
                <View style = {styles.achievement} >


                <Text style = {styles.bulletPoint} >•</Text>


                <Text>{achievement.achievementText}</Text>
            </View>)
        }
    )
    )
}

export default Achievements;