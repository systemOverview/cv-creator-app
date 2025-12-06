import {useState} from "react";

const days =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const monthsNumbers = {
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12",
}

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const years =[1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]

function PopulateSelect(props){
    let array = props.array;
    console.log(array);
    return (array.map((element) => {
        return <option value={element}> {element} </option>
    }))
}

function DateButton(props){
    return <button id={props.id} className={props.className} onClick={()=>props.clickHandler(props.className, props.id)}> {props.value} </button>
}

function DateButtonsPopulate(props){
    let array = props.array;
    return (
        array.map((element)=>{
            if (typeof element ==="string"){
                element = element.substring(0,3); // use only the first three letters if it's a month
            }
            return <DateButton clickHandler ={props.clickHandler} id={element} className = {props.className} value = {element} key = {element}> </DateButton>
        })
    )
}



function DatePicker(props){
    const [date, setDate] = useState([null,null]); // MMM(string)/YYYY
    function changeDate(index, value){ // index is 0 for month , 1 for year, the chosen index will be updated
        //setDate(prevDate => [id, prevDate[0]]) // change just the month
        let newDate = date;
        if (index==0){
            newDate[0] = value;
        }
        else{
            newDate[1] = value;
        }

        setDate(newDate);
        if (date[0] && date[1]){
            let input = document.getElementById(props.inputToChange);
            input.value = monthsNumbers[date[0]] + "/" + date[1];
            if (props.inputToChange=="from-date-input") {
                document.getElementsByClassName("date-picker")[0].classList.add("hidden")
            }

            else{
                document.getElementsByClassName("date-picker")[1].classList.add("hidden")

            }
            return;
        }
    }
    function handleDateButtons(className, id){
        let dateButton = document.getElementById(id);

        if (date[0] && date[1]){ // make previously selected buttons re-appear as ctive
            let monthButton = document.getElementById(date[0]);
            let yearButton = document.getElementById(date[1]);
            monthButton.classList.add("button-active");
            yearButton.classList.add("button-active");
        }

        if (className=="month-button"){
            if (date[0]!=null){
                let prevSelected = document.getElementById(date[0]);
                prevSelected.classList.remove("button-active")
                if (dateButton!=prevSelected) {
                    dateButton.classList.add("button-active") // if the button is clicked twice in a row, this prevents selecting it again, basically dis-selectingit
                }

            }
            changeDate(0, id);

        }
        else{
            if (date[1]!=null){
                let prevSelected = document.getElementById(date[1]);
                prevSelected.classList.remove("button-active")
                if (dateButton!=prevSelected) {
                    dateButton.classList.add("button-active") // if the button is clicked twice in a row, this prevents selecting it again, basically dis-selectingit
                }

            }
            changeDate(1, id);

        }



    }
    return (
        <div id="date-picker" className = "date-picker hidden">
{/*
            <select name={"year"} id={"year"}>
            <PopulateSelect array={years} > </PopulateSelect>
            </select>
*/}
            <div className={"months-picker"}>
                <div className={"month-buttons"}>
                <DateButtonsPopulate clickHandler ={handleDateButtons} className={"month-button"} array= {months}></DateButtonsPopulate>
                </div>
            </div>

            <div className={"years-picker"}>
                <div className={"year-buttons"}>
                <DateButtonsPopulate clickHandler ={handleDateButtons} className={"year-button"} array= {years}></DateButtonsPopulate>
                </div>
            </div>

        </div>
    )
}

export function monthPicker(){
    return (
        <div>

        </div>
    )
}


export default DatePicker;