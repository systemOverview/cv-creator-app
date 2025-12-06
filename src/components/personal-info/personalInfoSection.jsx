import {useState} from "react";
import angleDownIcon from "../../assets/angle-down.svg";
import Items from "../items/Items.jsx";
import PersonalInfoEditor from "./personalInfoEditor.jsx";

function PersonalInfoSection(props) {
    const [isSectionExpanded, setSectionExpansion] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [elementToEdit, setElementToEdit] = useState(null); // pass the element to edit if the user wants to edit an existing element, null to create a new one

// title


    return <div className={"cv-section"}>
        <div className={"cv-section-info"}>
            <div className={"cv-section-info-title"}>
                <img className={"icon"} src={props.icon}/>
                <h3> {props.title} </h3>
            </div>
            <div className={"dropdown"}>
                <button onClick={
                    ()=>{setSectionExpansion(!isSectionExpanded)}
                } id={"dropdown"} className={"icon-button"}><img src={angleDownIcon} className={"icon"}/>
                </button>
            </div>
        </div>
        <div className={`items-holder ${isSectionExpanded ? "items-open" : "items-closed"}`}>
        <PersonalInfoEditor setName = {props.setName} collapseFunction = {setSectionExpansion}> </PersonalInfoEditor>
        </div>
    </div>;
}
export default PersonalInfoSection;