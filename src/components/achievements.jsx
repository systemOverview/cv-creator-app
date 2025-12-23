import {getRandomInt} from "./helper.js";
import {achievementsList} from "../data/cv-data-examples.js";
import {memo, useEffect, useState} from "react";
import {generateRandomId} from "./helper.js"
import Achievement from "../data/classes-files/achievements-class.js"

const CreateAchievements = memo(function CreateAchievements(props){
    let currentData = props.data [0];
    let setterFunction = props.data [1]; // The function responsible for changing the state of data, passed from the main app component
    let element = currentData.find(
        entry =>{
            
            if (entry.key == props.keyOfElementToEdit){
                return true;
            }

        }
    )

    console.log(currentData);

    let achievements = element.achievements;



    useEffect(() => {
        var addAchievementButton = document.getElementById(props.keyOfElementToEdit);
        addAchievementButton.addEventListener("click",
            ()=>{
            element.addAchievement();
            }
        )



    }, [achievements]);

    function deleteAchievement (keyOfAchievementToDelete) {

    }
    function updateAchievement (keyOfAchievementToUpdate, newAchievementValue){
    }


    return (
        achievements.map((achievement, index)=>{
            return (
            <div className={"achievement"} key = {achievement.achievementKey}>
                <label htmlFor={index}>•</label>
                <input
                       id={index}
                       placeholder={achievement.achievementPlaceholder}
                       defaultValue={achievements?achievement.achievementText:""}
                       onChange={(e)=>{
                           element.updateAchievements(achievement.achievementKey, e.target.value)
                       }}

                />
                <svg onClick={
                    ()=>{
                        element.deleteAchievement(achievement.achievementKey);
                    }
                } className={"delete-button"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#d07171" d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
            </div>
            )
        })
    )
});

function achievements({data,keyOfElementToEdit}){
    return (
    <div className={"achievements-input"}>
        <CreateAchievements data={data} keyOfElementToEdit = {keyOfElementToEdit}> </CreateAchievements>
            <button
                className={"add-achievement-button"}
                id={keyOfElementToEdit}
/*
                onClick={element.addAchievement}
*/
            >
                <svg className={"add-achievement-icon icon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#63E6BE" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"/></svg>
                Add achievement
            </button>
    </div>
    )

}

export default achievements;