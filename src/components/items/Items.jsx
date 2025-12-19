import {useState} from "react";
import pen from "/src/assets/pen.svg"
import "./items.css"
import ExperienceEditor from "../experienceEditor.jsx";

function ItemsGenerator({items, setEditing, setKeyOfElementToEdit}){
    function editItem(item){
        setEditing(true);
        setKeyOfElementToEdit(item.key)

    };


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
                    <div className={"edit-icon"}>
                        <img onClick={()=>editItem(item)} src={pen}  className={"icon"}/>
                    </div>
                </div>
                );
            }
        )
    )
}

function Items({items,callback, setKeyOfElementToEdit}){
    return (
        <div>
            <ItemsGenerator items={items} setEditing ={callback} setKeyOfElementToEdit ={setKeyOfElementToEdit}> </ItemsGenerator>
            <div className={`add-item`}>
                <button onClick={(
                    ()=>{
                        callback(true)
                    }
                )} className={`add-item-button`}> Add item</button>
            </div>
            </div>
    )
}

export default Items