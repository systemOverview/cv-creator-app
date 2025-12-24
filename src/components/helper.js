export function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export function generateRandomId() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

export function generateRandomExample(examplesList){
    let randomIndex = getRandomInt(0,examplesList.length-1);
    return examplesList[randomIndex];
}

export function whichDateIsBigger(firstDate, secondDate){
    // dates are formatted MM/YYYY (this function is used for the form data validation)
    let firstYear = firstDate.substring(0,4)
    let firstMonth = firstDate.substring(5,7)

    let secondYear = secondDate.substring(0,4)
    let secondMonth = secondDate.substring(5,7)

    if (firstYear>secondYear){
        return firstDate
    }
    else if (secondYear>firstYear){
        return secondDate
    }
    else{
        if (firstMonth>secondMonth){
            return firstDate
        }
        else if (secondMonth>firstMonth){
            return secondDate
        }
        else{
            return "equal"
        }
    }

}

// this function takes the input as YYYY-MM and converts it to MM/YYYY which is what the PDF would show
export function dateInputFormatter(date){
    let year = date.substring(0,4)
    let month = date.substring(5,7)
    return (month+"/"+year);
}
// this function is the inverse of the one above, it takes MM/YYYY and converts it to YYYY-MM
// this is to fill the default values of the inputs
export function dateDefaultValueFormatter(date){
    let year = date.substring(3,7)
    let month = date.substring(0,2)
    return (year+"-"+month);
}


