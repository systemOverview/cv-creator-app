import {getRandomInt} from "./helper.js";
import {achievementsList} from "../data/cv-data-examples.js";
import {memo} from "react";
import {generateRandomId} from "../components/helper.js"



const CreateAchievements = memo(function CreateAchievements(props){
    let currentData = props.data [0];
    let setterFunction = props.data [1]; // The function responsible for changing the state of data, passed from the main app component
    let element = currentData.find(
        entry =>{
            return entry.key == props.keyOfElementToEdit;
        }
    )
    let achievements = element.achievements;

    if (achievements==null){
        achievements = [];
        for (let i=0;i<3; i++){
            achievements.push(achievementsList[getRandomInt(0,achievementsList.length)])
        }

    }

    function deleteAchievement (key) {
        let newAchievementsList = achievements.filter(
            (achievement)=>{ return achievement.achievementKey!=key}
        )
        let newElement = {...element, achievements : newAchievementsList}
        let newData = currentData.map(
            (currentElement) =>{
                if (currentElement.key == element.key){
                    return newElement;
                }
                else{
                    return currentElement;
                }
            }
        )


        setterFunction(newData)

    }


    return (
        achievements.map((achievement, index)=>{
            return (
            <div className={"achievement"} key = {achievement.achievementKey}>
                <label htmlFor={index}>•</label>
                <input id={index} placeholder={achievement} defaultValue={achievements?achievement.achievementText:""}/>
                <svg onClick={
                    ()=>{
                        deleteAchievement(achievement.achievementKey);
                    }
                } className={"delete-button"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#d07171" d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
            </div>
            )
        })
    )
});

function achievements({data,keyOfElementToEdit}){
    console.log(data)
    return (
    <div className={"achievements-input"}>
        <CreateAchievements data={data} keyOfElementToEdit = {keyOfElementToEdit}> </CreateAchievements>

    </div>
    )

}

export default achievements;