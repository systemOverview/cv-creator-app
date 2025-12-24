/*
* An experienceData class holds the information for just one experience entry, deleting one entry as a whole
* would require the experienceData to access the state function for all the experienceData entries, same for
* updating any info within that entry, it requires looping through the current state of data, and finding its
* own data and updating it, so I thought it would be better to create a class that holds all the experience entries
* instead of just an array
* */


export class ExperienceDataHolder{
    constructor() {
        let experienceDataEntries = {};
    }

    addEntry(experienceDataEntry){
        experienceDataEntries[experienceDataEntry.key] == experienceDataEntry;
    }

    print(){
        console.log(experienceDataEntries)
    }
}