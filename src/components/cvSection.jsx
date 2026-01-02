import angleDownIcon from "../assets/angle-down.svg";
import {useState, memo} from "react";
import Items from "./items/Items.jsx";

function CvSectionComponent({data, skills, title,icon,Editor}) {
    const [isSectionExpanded, setSectionExpansion] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [keyOfElementToEdit, setKeyOfElementToEdit] = useState(null);
    /*
         pass the element to edit if the user wants
         to edit an existing element,
         null to create a new one
    */
    if (isEditing){
        // editor is the component that handles taking the item input
        return <Editor keyOfElementToEdit = {keyOfElementToEdit} data = {data} callback = {setEditing}> </Editor>; // if the user clicks on add item, it switches to the editing part of the section
    }
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

            {title!="Skills"?<Items data={data} callback={setEditing} setKeyOfElementToEdit={setKeyOfElementToEdit} EditorName = {Editor.name}> </Items>:null}
            {title =='Skills'?<Editor data = {data}> </Editor>:null}





        </div>
    </div>;
}

export default CvSectionComponent