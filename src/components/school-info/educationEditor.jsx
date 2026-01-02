import Achievements from "../achievements.jsx";
import "./educationEditor.css"
import {useState} from "react"
import {whichDateIsBigger} from "../helper.js"
import {dateInputFormatter} from "../helper.js"
import {dateDefaultValueFormatter} from "../helper.js"


function EducationEditor({keyOfElementToEdit, callback, data}) {
    let [formError, setFormError] = useState(null)
    let [dateError, setDateError] = useState(null)
    console.log(data)
    function additem() {
        if (element.schoolName == "") {
            setFormError(<p className={"form-error"}> School name must be set, add it or discard the entry if you don't
                need it </p>)
        } else {
            setFormError(null)
            data.removeEmptyAchievementsOfElement(keyOfElementToEdit)
            callback(false);
        }
    }

    function discarditem() {
        data.removeElement(keyOfElementToEdit)
        callback(false)
    }

    // Closing the editor when a button that changes all the data is clicked to prevent
    // a bug that happens because then the user is editing an inexisting element
    document.getElementById("reset-form").addEventListener("click", () => {
        callback(false)
    })

    document.getElementById("load-example").addEventListener("click", () => {
        callback(false)
    })
    let element = data.getElementByKey(keyOfElementToEdit)


    function dateInputHandler(propretyToChange, date) {
        let fromDate = document.getElementById("from-date-input").value;
        let toDate = document.getElementById("education-to-date-input").value;
        if (toDate == "Present") {
            let d = new Date();
            toDate = d.getFullYear() + "-" + d.getMonth() // convert it to comparable format
        }
        if (whichDateIsBigger(fromDate, toDate) == fromDate && toDate != "") {
            setDateError(<p className={"date-error"}> The end date must be after the start date </p>)
            if (propretyToChange == "startDate") {
                document.getElementById("from-date-input").value = dateDefaultValueFormatter(element.startDate);
            } else {
                document.getElementById("to-date-input").value = dateDefaultValueFormatter(element.endDate);
            }

        } else {
            setDateError(null)
            data.modifyElement(element.key, propretyToChange, dateInputFormatter(date))
        }

    }
    return (
        <div className={"data-modifier-box"}>
            <div className={"school-input horizontal-multiple-input-holder"}>
                <div className={"school-name horizontal-element-input"}>
                    <label htmlFor={"school-name-input"}> School name </label>
                    <input
                        id={"school-name-input"}
                        placeholder={"Hochschule Darmstadt"}
                        defaultValue={element ? element.schoolName : ""}
                        onChange={(e) => {
                            data.modifyElement(element.key, "schoolName", e.target.value)
                        }}

                    />
                </div>

                <div className={"school-degree horizontal-element-input"}>
                    <label htmlFor={"school-degree-input"}> Degree name </label>
                    <input
                        id={"school-degree-input"}
                        placeholder={"Computer science"}
                        defaultValue={element ? element.degreeName : ""}
                        onChange={(e) => {
                            data.modifyElement(element.key, "schoolDegree", e.target.value)
                        }}

                    />
                </div>

            </div>


            <div className={"dates-input horizontal-multiple-input-holder"}>
                <div className={"date-input from-date horizontal-element-input"}>
                    <label htmlFor={"from-date-input"}> From </label>
                    <input id="from-date-input"
                           type={"month"}
                           placeholder={"MM/YYYY"}
                           defaultValue={dateDefaultValueFormatter(element.startDate)}
                           onChange={e => {
                               dateInputHandler("startDate", e.target.value)
                           }}
                    />
                </div>

                <div className={"date-input horizontal-element-input"}>
                    <label htmlFor={"education-to-date-input"}> To </label>
                    <input
                        id="education-to-date-input"
                        type={"month"}
                        placeholder={"MM/YYYY"}
                        defaultValue={dateDefaultValueFormatter(element.endDate)}
                        onChange={e => {
                            dateInputHandler("endDate", e.target.value)
                        }}
                    />
                    <div className={"till-present"}>
                        <input
                            type={"checkbox"}
                            id={"till-present-checkbox"}

                            onChange={(e) => {
                                if (e.target.checked) {
                                    data.modifyElement(element.key, "endDate", "Present")

                                    document.getElementById("education-to-date-input").disabled = true;
                                } else {
                                    document.getElementById("education-to-date-input").disabled = false;
                                    let prevDate = document.getElementById("education-to-date-input").value;
                                    dateInputHandler("endDate", prevDate)
                                }
                            }}
                        />
                        <label htmlFor={"till-present-checkbox"}> Till present </label>
                    </div>
                </div>
            </div>

            {dateError}


            <label> Achievements </label>
            <Achievements data={data} keyOfElementToEdit={keyOfElementToEdit}/>
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