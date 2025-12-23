import angleDownIcon from "../assets/angle-down.svg";
import {useState, memo} from "react";
import Items from "./items/Items.jsx";

function CvSectionComponent({data,title,icon,Editor}) {
    const [isSectionExpanded, setSectionExpansion] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [keyOfElementToEdit, setKeyOfElementToEdit] = useState(null);

    /*
         pass the element to edit if the user wants
         to edit an existing element,
         null to create a new one title
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
            {/* data is an array of the data itself, and a state function, items generator only needs the data
            therefore i passed only the first element of the array
            */}
            {data?<Items data={data} callback={setEditing} setKeyOfElementToEdit={setKeyOfElementToEdit}> </Items>:null}

{/*
            {title =='Skills'?<Editor skills = {data[0]} setData = {setData}> </Editor>:null}
*/}



        </div>
    </div>;
}

export default CvSectionComponent