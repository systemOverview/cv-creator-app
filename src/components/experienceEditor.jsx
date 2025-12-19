import DatePicker from "./date.jsx";
import date from "./date.jsx";
import Achievements from "./achievements.jsx";
import {useState} from "react";

function showDatePicker(index){
    let datePicker = document.getElementsByClassName("date-picker")[index];
    datePicker.classList.remove("hidden")
}



function ExperienceEditor(props){



    function additem(){
        props.callback(false);
    }
    let test = "ah";
/*    useEffect(() => {

    }, []);*/

    return (
        <div className={"data-modifier-box"}>
{/*
            <h3 className={"data-modifier-title"}> Experience</h3>
*/}

            <div class={"horizontal-multiple-input-holder"}>
                <div className={"company-input horizontal-element-input"}>
                    <label htmlFor="company-name-input"> Company name </label>
                    <input id="company-name-input" className={"text-input"} placeholder={"Google"} defaultValue={props.element?props.element.companyLocation:""}/>
                </div>

                <div className={"company-location horizontal-element-input"}>
                    <label htmlFor={"company-location-input"}> Company location </label>
                    <input id={"company-location-input"} placeholder={"Munich, Germany."} defaultValue={props.element?props.element.companyLocation:""}/>
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
            <label> Achievements </label>
            <Achievements  data={props.data} achievements = {props.element.achievements}/>

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