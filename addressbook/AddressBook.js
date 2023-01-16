const prompt = require("prompt-sync")({ sigint: true });

class Contact {
    constructor(firstName, lastName, phoneNumber, emailId, area, city, state, zip) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.emailId = emailId;
        this.area = area;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    get getFirstName() {
        return this.firstName;
    }


    set setFirstName(firstName) {
        this.firstName = firstName;
    }

    get getLastName() {
        return this.lastName;
    }

    set setLastName(lastName) {
        this.lastName = lastName;
    }

    get getPhoneNumber() {
        return this.phoneNumber;
    }

    set setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    get getEmailId() {
        return this.emailId;
    }

    set setEmailId(emailId) {
        this.emailId = this.emailId;
    }

    get getArea() {
        return this.area;
    }

    set setArea(area) {
        this.area = area;
    }

    get getCity() {
        return this.city;
    }

    set setCity(city) {
        this.city = city;
    }

    get getState() {
        return this.state;
    }

    set setState(state) {
        this.state = state;
    }

    get getZip() {
        return this.zip;
    }

    set setZip(zip) {
        this.zip = zip;
    }

    toString() {
        return '{ First name = ' + this.firstName + '  Lastname = ' + this.lastName + '  Phone number = ' + this.phoneNumber + ' Email Id = ' + this.emailId + '  Address = ' + this.area + ' , ' + this.city + ' , ' + this.state + ' , ' + this.zip + '}';
    }
}

let addressBook = new Array();
function createContact() {
    let firstName = prompt("Enter firstname :");
    let lastName = prompt("Enter lastName :");
    let phoneNumber = prompt("Enter phoneNumber :");
    let emailId = prompt("Enter emailId :");
    let area = prompt("Enter area :");
    let city = prompt("Enter city :");
    let state = prompt("Enter state :");
    let zip = prompt("Enter zip :");
    let contact = new Contact(firstName, lastName, phoneNumber, emailId, area, city, state, zip);
    return contact;
}

function isValidContact(contact) {
    let nameRegex = new RegExp(/^[A-Z]{1}[a-z]{2,}/);
    let phoneNumberRegex = new RegExp(/^(?!.*0{4})\+?([1][\s\-])?[1-9]{1,3}\s[0-9]{10}$/);
    let emailIdRegex = new RegExp(/^((?!.*[\.\-_]{2,})^[^0-9\.\-][a-z0-9\-\.+_]*[^.+_])*@+([a-z0-9]{1,6})+(\.[a-z]{2,6}){1,2}?$/);
    let areaCityStateRegex = new RegExp(/^[a-z]{3,}$/);
    let zipRegex = new RegExp(/^(?!(0))[0-9]{6}$/);
    console.log(contact.getFirstName);
    if (!nameRegex.test(contact.getFirstName)) {
        console.log("Invalid first name");
        return false;
    }
    if (!nameRegex.test(contact.getLastName)) {
        console.log("Invalid last name");
        return false;
    }
    if (!phoneNumberRegex.test(contact.getPhoneNumber)) {
        console.log("Invalid phone number");
        return false;
    }
    if (!emailIdRegex.test(contact.getEmailId)) {
        console.log("Inalid email id");
        return false;
    }
    if (!areaCityStateRegex.test(contact.getArea)) {
        console.log("Invalid area");
        return false;
    }
    if (!areaCityStateRegex.test(contact.getCity)) {
        console.log("Invalid city");
        return false;
    }
    if (!areaCityStateRegex.test(contact.getState)) {
        console.log("Invalid state");
        return false;
    }
    if(!zipRegex.test(contact.getZip)){
        console.log("Invalid zip");
        return false;
    }
    return true;
}

let contact = createContact();
let isValid = isValidContact(contact);
if(isValid){
    addressBook.push(contact);
}
console.log(addressBook);

