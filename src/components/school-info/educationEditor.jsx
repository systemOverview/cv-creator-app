import DatePicker from "../date.jsx";
import date from "../date.jsx";
import Achievements from "../achievements.jsx";
import {useState} from "react";
import "./educationEditor.css"
import {whichDateIsBigger} from "../helper.js"
import {dateInputFormatter} from "../helper.js"
import {dateDefaultValueFormatter} from "../helper.js"




function EducationEditor({keyOfElementToEdit, callback, data}){
    let educationData = data[0];
    let setEducationData = data[1];
    let [formError, setFormError] = useState(null)
    let [dateError, setDateError] = useState(null)
    function additem(){
        if (element.schoolName==""){
            setFormError(<p className={"form-error"}> School name must be set, add it or discard the entry if you don't need it </p>)
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


    let element = data[0].find(
        educationEntry =>{
            return educationEntry.key == keyOfElementToEdit;
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

    return (
        <div className={"data-modifier-box"}>


            <div className={"school-input"}>

                <div className={"school-name"}>
                    <label htmlFor={"school-name-input"}> School name </label>
                    <input
                        id={"school-name-input"}
                        placeholder={"Hochschule Darmstadt"}
                        defaultValue={element?element.schoolName:""}
                        onChange={(e)=>{element.schoolName = e.target.value}}

                    />
                </div>

                <div className={"school-degree"}>
                    <label htmlFor={"school-degree-input"}> Degree name </label>
                    <input
                        id={"school-degree-input"}
                        placeholder={"Computer science"}
                        defaultValue={element?element.degreeName:""}
                        onChange={(e)=>{element.schoolDegree = e.target.value}}

                    />
                </div>

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

            <div className={"university-descritpion"}>
                <label> Description (text area )</label>
                <textarea className={"description-input"} type={"text"}> </textarea>
            </div>

            <label> Achievements </label>
            <Achievements data={data} keyOfElementToEdit = {keyOfElementToEdit} />
                {formError}
            <div className={"form-action-buttons"}>
            <button onClick={additem} className={"done-button"}>
                Done
            </button>

            <button onClick={discarditem} className={"discard-button"}>
                Discard (delete)
            </button>
            </div>

        </div>
    )
}

export default EducationEditor;