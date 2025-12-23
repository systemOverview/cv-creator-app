import DatePicker from "../date.jsx";
import date from "../date.jsx";
import Achievements from "../achievements.jsx";
import {useState} from "react";

function showDatePicker(index){
    let datePicker = document.getElementsByClassName("date-picker")[index];
    datePicker.classList.remove("hidden")
}



function ExperienceEditor({keyOfElementToEdit, callback, data}){
    console.log(data[0])
    function additem(){
        callback(false);
    }
    let element;

     element = data[0].find(
        experienceEntry =>{
            return experienceEntry.key == keyOfElementToEdit;
        }
    )


    let experienceData = data[0];
    let setExperienceData = data[1];

    function updatedExperienceInfo(attributeToChange, newValue, key) {
        element.companyName = newValue


    }
    console.log(element)

    return (
        <div className={"data-modifier-box"}>
{/*

            <h3 className={"data-modifier-title"}> Experience</h3>
*/}


            <div class={"horizontal-multiple-input-holder"}>
                <div className={"company-input horizontal-element-input"}>
                    <label htmlFor="company-name-input"> Company name </label>
                    <input
                        id="company-name-input"
                        className={"text-input"} /*TODO : is this class necessary? compare to education editor*/
                        placeholder={"Google"}
                        defaultValue={element?element.companyName:""}
                        onChange={(e)=>{updatedExperienceInfo("companyName", e.target.value, keyOfElementToEdit);}}

                    />
                </div>

                <div className={"company-location horizontal-element-input"}>
                    <label htmlFor={"company-location-input"}> Company location </label>
                    <input id={"company-location-input"}
                           placeholder={"Munich, Germany."}
                           defaultValue={element?element.companyLocation:""}
                           onChange={(e)=>{element.companyLocation = e.target.value}}

                    />
                </div>
            </div>
            <div className={"company-input horizontal-element-input"}>
                <label htmlFor="company-name-input"> Title </label>
                <input
                    id="company-name-input"
                    className={"text-input"}
                    placeholder={"Data scientist"}
                    defaultValue={element?element.title:""}
                    onChange={(e)=>{element.title = e.target.value}}

                />
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
            <label> Achievements </label>
            <Achievements  data={data} keyOfElementToEdit = {keyOfElementToEdit}/>

            <button onClick={additem} className={"done-button"}>
                Done
            </button>
{/*
            <div className={"achievements-input"}>
                <div className={"achievement"}>
                    <label htmlFor={"achievementInput"}> • </label>
                    <input id="achievementInput"
                           placeholder={"Created automated scripts using Python to streamline data collection and reporting, reducing manual effort by 40%. "}/>
                </div>

                <div className={"achievement"}>
                    <label htmlFor={"achievementInput"}> • </label>
                    <input id="achievementInput"
                           placeholder={"Created automated scripts using Python to streamline data collection and reporting, reducing manual effort by 40%. "}/>
                </div>

                <div className={"achievement"}>
                    <label htmlFor={"achievementInput"}> • </label>
                    <input id="achievementInput"
                           placeholder={"Created automated scripts using Python to streamline data collection and reporting, reducing manual effort by 40%. "}/>
                </div>

            </div>
*/}


            {/*
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut, culpa debitis dolore dolorem doloremque ipsa itaque labore modi officia optio possimus quasi sint sit soluta unde velit veniam voluptatem? </p>
*/}

            {/*
                <label htmlFor={"date-form"}> From </label>
*/}
{/*
                <input type={"date"}/>
*/}
        </div>
    )
}

export default ExperienceEditor;