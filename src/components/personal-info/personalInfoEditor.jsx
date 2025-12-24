import {useState, useEffect} from "react";
import "./personalInfo.css"
import avatar from "../../assets/avatar.png"
import {titleExamples} from "../../data/cv-data-examples.js";
import {getRandomInt} from "../helper.js";
function PersonalInfoEditor({data, collapseFunction}){

    const [title, setTitle] = useState("");
    useEffect(() => {
        setTitle(titleExamples[getRandomInt(0,titleExamples.length)]);
    },[]);


    function avatarHandler(){
    let avatarDisplay = document.getElementById("avatar-edit")
    let avatarInput = document.getElementById("img-input-hidden").files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
          avatarDisplay.src = event.target.result;
      };

      reader.readAsDataURL(avatarInput);


  }
    console.log(data)
    function updatePersonalInfo(attributeToChange, newValue) {
        setPersonalData(prevData => ({
            ...prevData,
            [attributeToChange]: newValue
        }));

    }
    return (
        <div className={"personal-data-modifier-box"}>

            <div className={"cv-picture-container"}>


                <label htmlFor={"picture-input"}> Your photo </label>
                <div className={"cv-picture-input"}>
                    <label for ={"img-input-hidden"}> <img id ={"avatar-edit"}  src={avatar}/> </label>
                    <input id={"img-input-hidden"} onInput={avatarHandler} className={"hidden"} type={"file"}/>
                </div>
            </div>


            <div className={"personal-data-inputs"}>
                <div className={"personal-input horizontal-element-input"}>
                    <label htmlFor="personal-name-input"> Full name </label>
                    <input id="personal-name-input" className={"text-input"} placeholder={"John Doe"}
                           defaultValue={data ? data.name : ""}
                           onChange={(e)=>{data.name = e.target.value}}
                           />
                </div>

                <div className={"personal-title horizontal-element-input"}>
                    <label htmlFor={"personal-title-input"}> Professional title </label>
                    <input id={"personal-title-input"}
/*
                           placeholder={titleExamples[getRandomInt(0,titleExamples.length)]}
*/
                        placeholder={title}
                           defaultValue={data ? data.title : ""}
                           onChange={(e)=>{data.title = e.target.value}}
                    />
                </div>

                <div className={"contact-info"}>

                    <div className={"phone-number-input-section"}>
                        <label htmlFor={"phone-number-input"}> Phone number </label>
                        <input
                               id={"phone-number-input"}
                               placeholder={"0123456789"}
                               defaultValue={data ? data.phoneNumber : ""}
                               onChange={(e)=>{data.phoneNumber = e.target.value}}
                        />
                    </div>

                    <div className={"email-input-section"}>
                        <label htmlFor={"email-input"}> Email address </label>
                        <input
                               id={"email-input"}
                               placeholder={"John.doe@gmail.com"}
                               defaultValue={data ? data.email : ""}
                               onChange={(e)=>{data.email = e.target.value}}
                        />
                    </div>

                    <div className={"address-input-section"}>
                        <label htmlFor={"address-input"}> Address </label>
                        <input
                            id={"address-input"}
                            placeholder={"Marktplatz 15"}
                            defaultValue={data ? data.address : ""}
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