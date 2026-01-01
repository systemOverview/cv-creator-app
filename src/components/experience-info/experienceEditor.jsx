import DatePicker from "../date.jsx";
import date from "../date.jsx";
import Achievements from "../achievements.jsx";
import {useState} from "react";
import {dateInputFormatter, whichDateIsBigger} from "../helper.js"
import {dateDefaultValueFormatter} from "../helper.js"

function showDatePicker(index){
    let datePicker = document.getElementsByClassName("date-picker")[index];
    datePicker.classList.remove("hidden")
}



function ExperienceEditor({keyOfElementToEdit, callback, data}){
    let experienceData = data[0];
    let setExperienceData = data[1];
    let [formError, setFormError] = useState(null)
    let [dateError, setDateError] = useState(null)
    function additem(){
        if (element.companyName==""){
            setFormError(<p className={"form-error"}> Company name must be set, add it or discard the entry if you don't need it </p>)
        }
        else {
            setFormError(null)
            element.removeEmptyAchievements();
            callback(false);
        }
    }
    function discarditem(){
        element.removeSelf();
        callback(false)
    }
    let element;

     element = data[0].find(
        experienceEntry =>{
            return experienceEntry.key == keyOfElementToEdit;
        }
    )
    function dateInputHandler(propretyToChange, date){

        let fromDate = document.getElementById("from-date-input").value;
        let toDate = document.getElementById("to-date-input").value;
        if(whichDateIsBigger(fromDate, toDate)==fromDate && toDate!=""){
            setDateError(<p className={"date-error"}> The end date must be after the start date </p>)
            if (propretyToChange=="startDate"){
                document.getElementById("from-date-input").value = dateDefaultValueFormatter(element.startDate);
            }
            else{
                document.getElementById("to-date-input").value = dateDefaultValueFormatter(element.endDate);
            }

        }
        else{
            setDateError(null)
            element[propretyToChange] = dateInputFormatter(date);
        }

    }

    function updatedExperienceInfo(attributeToChange, newValue, key) {
        element.companyName = newValue


    }

    return (
        <div className={"data-modifier-box"} id={"experience-data-modifier-box"}>
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
                    <input id="from-date-input"
                           type={"month"}
                           placeholder={"MM/YYYY"}
                           defaultValue={dateDefaultValueFormatter(element.startDate)}
                           onChange={e=>{dateInputHandler("startDate", e.target.value)}}
                    />
                </div>

                <div className={"date-input"}>
                    <label htmlFor={"to-date-input to-date"}> To </label>
                    <input
                        id="to-date-input"
                        type={"month"}
                        placeholder={"MM/YYYY"}
                        defaultValue={dateDefaultValueFormatter(element.endDate)}
                        onChange={e=>{dateInputHandler("endDate",e.target.value)}}
                    />
                </div>
            </div>
            {dateError}
            <label> Achievements </label>
            <Achievements  data={data} keyOfElementToEdit = {keyOfElementToEdit}/>
                {formError}
            <div className={"form-action-buttons"}>
            <button onClick={additem} className={"done-button"}>
                Done
            </button>

            <button onClick={discarditem} className={"discard-button"}>
                Discard
            </button>
            </div>

        </div>
    )
}

export default ExperienceEditor;