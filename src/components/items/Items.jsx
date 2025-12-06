import {useState} from "react";
import pen from "/src/assets/pen.svg"
import "./items.css"
import ExperienceEditor from "../experienceEditor.jsx";

function ItemsGenerator(props){
    function editItem(item){
        props.setElement(item);
        props.setEditing(true);

    };
    console.log(props.items)
    return (

        props.items.map(
            (item) =>{
                let itemKeys = Object.values(item)
                return (
                <div key={item.key} className={"item"}>
                    <h3> {itemKeys[0]} </h3>
                    <div className={"edit-icon"}>
                        <img onClick={()=>editItem(item)} src={pen}  className={"icon"}/>
                    </div>
                </div>
                );
            }
        )
    )
}

function Items(props){
    return (
        <div>
            <ItemsGenerator items={props.items} setEditing ={props.callback} setElement ={props.setElement}> </ItemsGenerator>
            <div className={`add-item`}>
                <button onClick={(
                    ()=>{
                        props.callback(true)
                    }
                )} className={`add-item-button`}> Add item</button>
            </div>
            </div>
    )
}

export default Items