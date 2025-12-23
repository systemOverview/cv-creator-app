import {useState} from "react";
import trash from "../../assets/trash.svg";

function SkillsItemsGenerator(props){

    return (

        props.skills.map(
            (item) =>{
                let itemKeys = Object.values(item)
                return (
                    <div key={item.key} className={"item"}>
                        <h3> {itemKeys[0]} </h3>
                        <div className={"edit-icon"}>
                                <img
                                    onClick={()=>{item.removeSkill()}}
                                    src={trash}
                                    className={"icon"}/>
                            </div>
                    </div>
                );
            }
        )
    )
}


function SkillsItems(props){
    return (
        <div className={"skills-items"}>
            <SkillsItemsGenerator setData = {props.setData} skills={props.skills}> </SkillsItemsGenerator>
        </div>
    )
}

export default SkillsItems