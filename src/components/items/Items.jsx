import {useState} from "react";
import pen from "/src/assets/pen.svg"
import "./items.css"
import ExperienceEditor from "../experience-info/experienceEditor.jsx";
import {newEducationHolder} from "../../data/cv-data-examples.js"
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

function Items({data,callback, setKeyOfElementToEdit}){
    let setDataFunction = data[1] // the functions responsible for updating the data state
    function addItem(){
/*
        callback(true)
*/
        setDataFunction(
            prev => [...prev, newEducationHolder]
        )
        setKeyOfElementToEdit(newEducationHolder.key)
        callback(true)

/*
        setKeyOfElementToEdit(newEducationHolder)
*/

    }
    return (
        <div>
            <ItemsGenerator items={data[0]} setEditing ={callback} setKeyOfElementToEdit ={setKeyOfElementToEdit}> </ItemsGenerator>
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