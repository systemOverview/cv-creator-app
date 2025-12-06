import angleDownIcon from "../assets/angle-down.svg";
import {useState} from "react";
import {experienceData} from "../data/cv-data-classes.js";
import Items from "./items/Items.jsx";

function CvSectionComponent(props) {
    const [isSectionExpanded, setSectionExpansion] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [elementToEdit, setElementToEdit] = useState(null); // pass the element to edit if the user wants to edit an existing element, null to create a new one

// title

    if (isEditing){
        // editor is the component that handles taking the item input
        return <props.editor element = {elementToEdit} callback = {setEditing}> </props.editor>; // if the user clicks on add item, it switches to the editing part of the section
    }
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
            {props.data?<Items items={props.data} callback={setEditing} setElement={setElementToEdit} > </Items>:null}
            {props.title =='Skills'?<props.editor skills = {props.skills} setData = {props.setData}> </props.editor>:null}
        </div>
    </div>;
}

export default CvSectionComponent