import {useState, useEffect} from "react";
import "./personalInfo.css"
import {titleExamples} from "../../data/cv-data-examples.js";
import {getRandomInt} from "../helper.js";
function PersonalInfoEditor({data, collapseFunction}){

    const [title, setTitle] = useState("");
    useEffect(() => {
        setTitle(titleExamples[getRandomInt(0,titleExamples.length)]);
    },[]);

    console.log(data.name)

    return (
        <div className={"personal-data-modifier-box"}>


            <div className={"personal-data-inputs"}>
                <div className={"personal-input horizontal-element-input"}>
                    <label htmlFor="personal-name-input"> Full name </label>
                    <input id="personal-name-input" className={"text-input"} placeholder={"John Doe"}
                           value={data ? data.name : ""}
                           onChange={(e)=>{data.name = e.target.value}
                    }
                           />
                </div>

                <div className={"personal-title horizontal-element-input"}>
                    <label htmlFor={"personal-title-input"}> Professional title </label>
                    <input id={"personal-title-input"}
/*
                           placeholder={titleExamples[getRandomInt(0,titleExamples.length)]}
*/
                        placeholder={title}
                           value={data ? data.title : ""}
                           onChange={(e)=>{data.title = e.target.value}}
                    />
                </div>

                <div className={"contact-info"}>

                    <div className={"phone-number-input-section"}>
                        <label htmlFor={"phone-number-input"}> Phone number </label>
                        <input
                               id={"phone-number-input"}
                               placeholder={"0123456789"}
                               value={data ? data.phoneNumber : ""}
                               onChange={(e)=>{data.phoneNumber = e.target.value}}
                        />
                    </div>

                    <div className={"email-input-section"}>
                        <label htmlFor={"email-input"}> Email address </label>
                        <input
                               id={"email-input"}
                               placeholder={"John.doe@gmail.com"}
                               value={data ? data.email : ""}
                               onChange={(e)=>{data.email = e.target.value}}
                        />
                    </div>

                    <div className={"address-input-section"}>
                        <label htmlFor={"address-input"}> Address </label>
                        <input
                            id={"address-input"}
                            placeholder={"Marktplatz 15"}
                            value={data ? data.address : ""}
                            onChange={(e)=>{data.address = e.target.value}}
                        />

                    </div>

                </div>
            </div>

            <button onClick={()=>{collapseFunction(false)}} className={"done-button"}>
                Done
            </button>

        </div>
    )
}

export default PersonalInfoEditor;