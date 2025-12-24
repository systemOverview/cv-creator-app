import {useState} from "react";
import angleDownIcon from "../../assets/angle-down.svg";
import Items from "../items/Items.jsx";
import PersonalInfoEditor from "./personalInfoEditor.jsx";

function PersonalInfoSection({data, title, icon}) {
    const [isSectionExpanded, setSectionExpansion] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [elementToEdit, setElementToEdit] = useState(null); // pass the element to edit if the user wants to edit an existing element, null to create a new one

// title
    return <div className={"cv-section"}>
        <div className={"cv-section-info"}>
            <div className={"cv-section-info-title"}>
                <img className={"icon"} src={icon}/>
                <h3> {title} </h3>
            </div>
            <div className={"dropdown"}>
                <button onClick={
                    ()=>{setSectionExpansion(!isSectionExpanded)}
                } id={"dropdown"} className={"icon-button"}><img src={angleDownIcon} className={"icon"}/>
                </button>
            </div>
        </div>
        <div className={`items-holder ${isSectionExpanded ? "items-open" : "items-closed"}`}>
        <PersonalInfoEditor data = {data} collapseFunction = {setSectionExpansion}> </PersonalInfoEditor>
        </div>
    </div>;
}
export default PersonalInfoSection;