import {useState} from "react";
import pen from "/src/assets/pen.svg"
import redTrash from "/src/assets/red-trash.svg"

import "./items.css"
import {newDataHolders} from "../../data/cv-data-examples.js"
function ItemsGenerator({items, setterFunction, setEditing, setKeyOfElementToEdit}){

    function editItem(item){
        setEditing(true);
        setKeyOfElementToEdit(item.key)

    };

    function deleteItem(item){
        item.removeSelf()
    }


    return (
        items.map(
            (item) =>{
                return (
                <div key={item.key} className={"item"}>

                    {/* an item here could be a school or work experience
                    so i fetch the first value instead of using a key
                    because the key names differs
                    */}
                    <h3> {Object.values(item)[0]} </h3>
                    <div className={"edit-icons"}>
                        <img onClick={()=>editItem(item)} src={pen}  className={"icon"}/>
                        <img onClick={()=>deleteItem(item)} src={redTrash}  className={"icon"}/>
                    </div>
                </div>
                );
            }
        )
    )
}

function Items({data,callback, setKeyOfElementToEdit, EditorName}){
    let setDataFunction = data[1] // the functions responsible for updating the data state
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
    setDataFunction(
        prev => [...prev,newDataHolder ]
    )
    setKeyOfElementToEdit(newDataHolder.key)
    callback(true)



    }
    return (
        <div>
            <ItemsGenerator items={data[0]} setterFunction ={data[1]} setEditing ={callback} setKeyOfElementToEdit ={setKeyOfElementToEdit}> </ItemsGenerator>
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