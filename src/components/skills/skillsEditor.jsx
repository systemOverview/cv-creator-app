import "./skillsEditor.css"
import SkillsItems from "./skillsItems.jsx";
import {skillsData} from "../../data/classes-files/skills-data-class.js";
function SkillsEditor({data}){
    console.log(data)
    return (
        <div className={"skills-section"}>
            <SkillsItems data = {data}> </SkillsItems>
            <div className={"skills-input-section item"}>
                <input className={"skill-input"} id={"skill-input"}type={"text"} placeholder={"C++"}/>
                <button onClick={()=>{
                    let newSkill = new skillsData(document.getElementById("skill-input").value);
                    data.addElement(newSkill)
                    document.getElementById("skill-input").value="";
                }} id={"add-skill-button"}> ADD SKILL </button>
            </div>
        </div>
    )
}

export default SkillsEditor