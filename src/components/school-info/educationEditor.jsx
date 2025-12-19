import DatePicker from "../date.jsx";
import date from "../date.jsx";
import Achievements from "../achievements.jsx";
import {useState} from "react";
import "./educationEditor.css"
function showDatePicker(index){
    let datePicker = document.getElementsByClassName("date-picker")[index];
    datePicker.classList.remove("hidden")
}



function EducationEditor({keyOfElementToEdit, callback, data}){

    function additem(){
        callback(false);
    }
    let element = data[0].find(
        entry =>{
            return entry.key == keyOfElementToEdit;
        }
    )

    return (
        <div className={"data-modifier-box"}>
            {/*
            <h3 className={"data-modifier-title"}> Experience</h3>
*/}

            <div className={"school-input"}>

                <div className={"school-name"}>
                    <label htmlFor={"school-name-input"}> School name </label>
                    <input id={"school-name-input"} placeholder={"Hochschule Darmstadt"} defaultValue={element?element.schoolName:""}/>
                </div>

                <div className={"school-degree"}>
                    <label htmlFor={"school-degree-input"}> School name </label>
                    <input id={"school-degree-input"} placeholder={"Computer science"} defaultValue={element?element.degreeName:""}/>
                </div>

            </div>


            <div className={"dates-input"}>
                <div className={"date-input from-date"}>
                    <label htmlFor={"from-date-input"}> From </label>
                    <input id="from-date-input" placeholder={"MM/YYYY"}  onClick={()=>{showDatePicker(0)}}/>
                    <DatePicker inputToChange={"from-date-input"}/> {/* Since the date component has ownership of it's state, I chose to pass the input id to it so it can change the input value too, instead of having to create the state in this component and passing it to the date */}
                </div>

                <div className={"date-input"}>
                    <label htmlFor={"to-date-input to-date"}> To </label>
                    <input id="to-date-input" placeholder={"MM/YYYY"} onClick={()=>{showDatePicker(1)}}/>
                    <DatePicker inputToChange={"to-date-input"}/>
                </div>
            </div>

            <div className={"university-descritpion"}>
                <label> Description (text area )</label>
                <textarea className={"description-input"} type={"text"}> </textarea>
            </div>

            <label> Achievements </label>
            <Achievements data={data} keyOfElementToEdit = {keyOfElementToEdit} />

            <button onClick={additem} className={"done-button"} >
                Done
            </button>

        </div>
    )
}

export default EducationEditor;