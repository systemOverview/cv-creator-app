import {useState} from "react";
import trash from "../../assets/trash.svg";

function SkillsItemsGenerator({data}){
    return (

        data.elements.map(
            (item) =>{
                let itemKeys = Object.values(item)
                return (
                    <div key={item.key} className={"item"}>
                        <h3> {itemKeys[0]} </h3>
                        <div className={"edit-icon"}>
                                <img
                                    onClick={()=>{data.removeElement(item.key)}}
                                    src={trash}
                                    className={"icon"}/>
                            </div>
                    </div>
                );
            }
        )
    )
}


function SkillsItems({data}){
    return (
        <div className={"skills-items"}>
            <SkillsItemsGenerator  data={data}> </SkillsItemsGenerator>
        </div>
    )
}

export default SkillsItems