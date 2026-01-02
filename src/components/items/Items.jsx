import {useState} from "react";
import pen from "/src/assets/pen.svg"
import redTrash from "/src/assets/red-trash.svg"

import "./items.css"
import {newDataHolders} from "../../data/cv-data-examples.js"
function ItemsGenerator({items, setterFunction, setEditing, setKeyOfElementToEdit}){

    function editItem(itemToEditKey){
        setEditing(true);
        setKeyOfElementToEdit(itemToEditKey)

    };

    function deleteItem(itemToDeleteKey) {
        items.removeElement(itemToDeleteKey)
    }
    console.log(items)

    return (
        items.elements.map(
            (item) =>{
                return (
                <div key={item.key} className={"item"}>

                    {/* an item here could be a school or work experience
                    so i fetch the first value instead of using a key
                    because the key names differs
                    */}
                    <h3> {Object.values(item)[0]} </h3>
                    <div className={"edit-icons"}>
                        <img onClick={()=>editItem(item.key)} src={pen}  className={"icon"}/>
                        <img onClick={()=>deleteItem(item.key)} src={redTrash}  className={"icon"}/>
                    </div>
                </div>
                );
            }
        )
    )
}

function Items({data,callback, setKeyOfElementToEdit, EditorName}){
    function addItem(){
    let newHolderType;
    if (EditorName=="EducationEditor"){
        newHolderType = "newEducationGenerator"
    }
    else if (EditorName=="ExperienceEditor"){
        newHolderType = "newExperienceGenerator"
    }
    else{
        newHolderType="newSkillsHolder";
    }
    let newDataHolder = newDataHolders[newHolderType]();
    data.addElement(newDataHolder)
    setKeyOfElementToEdit(newDataHolder.key)
    callback(true)
    }
    return (
        <div>
            <ItemsGenerator items={data} setterFunction ={data} setEditing ={callback} setKeyOfElementToEdit ={setKeyOfElementToEdit}> </ItemsGenerator>
            <div className={`add-item`}>
                <button onClick={(
                    ()=>{
                        addItem()
                    }
                )} className={`add-item-button`}> Add item</button>
            </div>
            </div>
    )
}

export default Items