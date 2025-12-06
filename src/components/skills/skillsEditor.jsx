import {useState} from "react";
import "./skillsEditor.css"
import SkillsItems from "./skillsItems.jsx";
import {skillsData} from "../../data/cv-data-classes.js";
function SkillsEditor(props){
    return (
        <div className={"skills-section"}>
            <SkillsItems setData = {props.setData} skills = {props.skills}> </SkillsItems>
            <div className={"skills-input-section item"}>
                <input className={"skill-input"} id={"skill-input"}type={"text"} placeholder={"C++"}/>
                <button onClick={()=>{
                    let newSkill = new skillsData(document.getElementById("skill-input").value)
                    props.setData(
                        [...props.skills, newSkill]
                    )
                    document.getElementById("skill-input").value=""
                }} id={"add-skill-button"}> ADD SKILL </button>
            </div>
        </div>
    )
}

export default SkillsEditor