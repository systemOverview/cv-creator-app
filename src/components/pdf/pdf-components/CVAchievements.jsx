import {Canvas, Text, Font, View} from "@react-pdf/renderer";
import {StyleSheet} from "@react-pdf/renderer";
let styles = StyleSheet.create(
    {
        achievement : {
            display : "flex",
            flexDirection : "row",
            marginTop : 5,
            paddingLeft : 15,
            fontSize : 15,
            lineHeight : 1.25,
      },

        bulletPoint : {
/*
            marginTop : 0,
*/
            marginTop : -5,
            height: "100%",
            fontSize : 25,
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


                <Text>{achievement}</Text>
            </View>)
        }
    )
    )
}

export default Achievements;