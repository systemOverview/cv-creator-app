import {useState} from "react"
import Achievements from "../achievements.jsx";
import {dateInputFormatter, whichDateIsBigger} from "../helper.js"
import {dateDefaultValueFormatter} from "../helper.js"


function ExperienceEditor({keyOfElementToEdit, callback, data}) {

    let [formError, setFormError] = useState(null)
    let [dateError, setDateError] = useState(null)

    function additem() {
        if (element.companyName == "") {
            setFormError(<p className={"form-error"}> Company name must be set, add it or discard the entry if you don't
                need it </p>)
        } else {
            setFormError(null)
            element.removeEmptyAchievements();
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
        let toDate = document.getElementById("experience-to-date-input").value;
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

    function updatedExperienceInfo(attributeToChange, newValue, key) {
        element.companyName = newValue


    }

    return (
        <div className={"data-modifier-box"} id={"experience-data-modifier-box"}>
            <div class={"horizontal-multiple-input-holder"}>
                <div className={"company-input horizontal-element-input"}>
                    <label htmlFor="company-name-input"> Company name </label>
                    <input
                        id="company-name-input"
                        className={"text-input"}
                        placeholder={"Google"}
                        defaultValue={element ? element.companyName : ""}
                        onChange={(e) => {
                            data.modifyElement(element.key, "companyName", e.target.value)
                        }}

                    />
                </div>

                <div className={"company-location horizontal-element-input"}>
                    <label htmlFor={"company-location-input"}> Company location </label>
                    <input id={"company-location-input"}
                           placeholder={"Munich, Germany."}
                           defaultValue={element ? element.companyLocation : ""}
                           onChange={(e) => {
                               data.modifyElement(element.key, "companyLocation", e.target.value)
                           }}

                    />
                </div>
            </div>
            <div className={"company-input horizontal-element-input"}>
                <label htmlFor="job-title-input"> Title </label>
                <input
                    id="job-title-input"
                    className={"text-input"}
                    placeholder={"Data scientist"}
                    defaultValue={element ? element.title : ""}
                    onChange={(e) => {
                        data.modifyElement(element.key, "title", e.target.value)
                    }}

                />
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
                    <label htmlFor={"experience-to-date-input"}> To </label>
                    <input
                        id="experience-to-date-input"
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
                                    document.getElementById("experience-to-date-input").disabled = true;
                                } else {
                                    document.getElementById("experience-to-date-input").disabled = false;
                                    let prevDate = document.getElementById("experience-to-date-input").value;
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
                    Discard (Delete)
                </button>
            </div>

        </div>
    )
}

export default ExperienceEditor;