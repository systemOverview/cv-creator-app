export class personalData {
    get setterFunction() {
        return this._setterFunction;
    }

    set setterFunction(value) {
        this._setterFunction = value;
    }
    constructor(name, title, photo, email, phoneNumber, address) {

        this._name = name;
        this._title = title;
        this._photo = photo;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._address = address;
        this._setterFunction = null;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this.changePersonalData("_name", value)
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this.changePersonalData("_title", value)
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this.changePersonalData("_photo", value)
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this.changePersonalData("_email", value)
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this.changePersonalData("_phoneNumber", value)
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this.changePersonalData("_address", value)
    }

    changePersonalData(attributeToChange, newValue){
        let newPersonalData = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        newPersonalData[attributeToChange] = newValue;
        console.log(newPersonalData)
        this.setterFunction(newPersonalData)
    }
}
