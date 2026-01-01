import "./skillsEditor.css"
import SkillsItems from "./skillsItems.jsx";
import {skillsData} from "../../data/classes-files/skills-data-class.js";
function SkillsEditor(props){
    return (
        <div className={"skills-section"}>
            <SkillsItems skills = {props.data[0]}> </SkillsItems>
            <div className={"skills-input-section item"}>
                <input className={"skill-input"} id={"skill-input"}type={"text"} placeholder={"C++"}/>
                <button onClick={()=>{
                    if (props.data[0][0]!=null) {
                        props.data[0][0].addSkill(document.getElementById("skill-input").value)
                    } else{
                        let newSkill = new skillsData(document.getElementById("skill-input").value);
                        props.data[1]([newSkill])
                    }
                    document.getElementById("skill-input").value = ""

                }} id={"add-skill-button"}> ADD SKILL </button>
            </div>
        </div>
    )
}

export default SkillsEditor