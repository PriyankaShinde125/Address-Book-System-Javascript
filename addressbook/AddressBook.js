const prompt = require("prompt-sync")({ sigint: true });

let addressBook = new Array();

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

function inputName(msg) {
    let name = prompt(msg);
    if (isValidName(name)) {
        return name;
    }
    else
        console.log("Invalid input please enter correct");
    return inputName(msg);
}

function inputPhoneNumber() {
    let phoneNumber = prompt("Enter phoneNumber :");
    if (isValidNumber(phoneNumber)) {
        return phoneNumber;
    }
    else
        console.log("Invalid input please enter correct");
    return inputPhoneNumber();
}

function inputEmailId() {
    let emailId = prompt("Enter emailId :");
    if (isValidEmail(emailId)) {
        return emailId;
    }
    else
        console.log("Invalid input please enter correct");
    return inputEmailId();
}

function inputAddressEntities(msg) {
    let input = prompt(msg);
    if (isValidAddress(input)) {
        return input;
    }
    else
        console.log("Invalid input please enter correct");
    return inputAddressEntities(msg);
}

function inputZip() {
    let zip = prompt("Enter zip :");
    if (isValidZip(zip))
        return zip;
    else
        console.log("Invalid input please enter correct");
    return inputZip();
}


function createContact() {
    let firstName = inputName("Enter first name");
    let lastName = inputName("Enter last name");
    if (isExist(firstName, lastName) != undefined) {
        console.log("Contact with same name already exist");
        return;
    }
    let phoneNumber = inputPhoneNumber();
    let emailId = inputEmailId();
    let area = inputAddressEntities("Enter area");
    let city = inputAddressEntities("Enter city");
    let state = inputAddressEntities("Enter state");
    let zip = inputZip();
    let contact = new Contact(firstName, lastName, phoneNumber, emailId, area, city, state, zip);
    return contact;
}

function isValidName(name) {
    let nameRegex = new RegExp(/^[A-Z]{1}[a-z]{2,}/);
    return nameRegex.test(name);
}

function isValidNumber(phoneNumber) {
    let phoneNumberRegex = new RegExp(/^(?!.*0{4})\+?([1][\s\-])?[1-9]{1,3}\s[0-9]{10}$/);
    return phoneNumberRegex.test(phoneNumber);
}

function isValidEmail(email) {
    let emailIdRegex = new RegExp(/^((?!.*[\.\-_]{2,})^[^0-9\.\-][a-z0-9\-\.+_]*[^.+_])*@+([a-z0-9]{1,6})+(\.[a-z]{2,6}){1,2}?$/);
    return emailIdRegex.test(email);
}

function isValidAddress(address) {
    let areaCityStateRegex = new RegExp(/^[a-z]{3,}$/);
    return areaCityStateRegex.test(address);
}

function isValidZip(zip) {
    let zipRegex = new RegExp(/^(?!(0))[0-9]{6}$/);
    return zipRegex.test(zip);
}

function addNewContact() {
    let contact = createContact();
    if (contact != undefined)
        addressBook.push(contact);
}

function editContact() {
    let firstNameInput = prompt("Enter first name");
    let lastNameInput = prompt("Enter last name");
    let contact = isExist(firstNameInput, lastNameInput);
    if (contact == undefined) {
        console.log("contact not found");
        return;
    }
    console.log("Enter which field do you want to edit : ")
    let choice = Number(prompt(" 1 : First name 2 : Last name 3 : Phone no 4 : Email Id 5 : Area 6 : City 7 : State 8 : Zip"));
    switch (choice) {
        case 1:
            input = inputName("Enter first name");
            contact.setFirstName = input;
            break;
        case 2:
            input = inputName("Enter last name");
            contact.setLastName = input;
            break;
        case 3:
            input = inputPhoneNumber();
            contact.setPhoneNumber = input;
            break;
        case 4:
            input = inputEmailId();
            contact.setEmailId = input;
            break;
        case 5:
            input = inputAddressEntities("Enter area");
            contact.setArea = input;
            break;
        case 6:
            input = inputAddressEntities("Enter city");
            contact.setCity = input;
            break;
        case 7:
            input = inputAddressEntities("Enter state");
            contact.setState = input;
            break;
        case 8:
            input = inputZip();
            contact.setZip = input;
            break;
        default:
            console.log("Invalid input");
            break;
    }
    console.log(contact);
}

function isExist(firstNameInput, lastNameInput) {
    let contact = addressBook.find(element => element.getFirstName.toLowerCase() === firstNameInput.toLowerCase() && element.getLastName.toLowerCase() === lastNameInput.toLowerCase());
    return contact;
}

function deleteContact() {
    let firstNameInput = prompt("Enter first name");
    let lastNameInput = prompt("Enter last name");
    let contact = isExist(firstNameInput, lastNameInput);
    if (contact == undefined) {
        console.log("contact not found");
        return;
    }
    addressBook.splice(addressBook.indexOf(contact), 1);
    console.log("Contact deleted");
    console.log(addressBook);
}

function getAddressBookContactCount() {
    let numberOfRecords = addressBook.reduce(((totalRecords) => totalRecords + 1), 0)
    console.log("Total number of records " + numberOfRecords);
}

function searchContactByCityOrState() {
    let choice = Number(prompt("1 : Search contact by city 2 : search contact by state"));
    let filteredArray;
    switch (choice) {
        case 1: let city = prompt("Enter city");
            filteredArray = addressBook.filter(element => searchByCityOrStateCallback(choice, city, element));
            console.log(filteredArray);
            break;
        case 2: let state = prompt("Enter state");
            filteredArray = addressBook.filter(element => searchByCityOrStateCallback(choice, state, element));
            console.log(filteredArray);
            break;
        default: console.log("Invalid input");
    }
}

function searchByCityOrStateCallback(choice, cityOrState, contact) {
    if (choice === 1)
        return contact.city == cityOrState;
    else
        return contact.state == cityOrState;
}

function viewByCityOrState() {
    let choice = Number(prompt("1 : view contact by city 2 : view contact by state"));
    let filteredMap;
    switch (choice) {
        case 1:
            filteredMap = getCityWiseContacts(choice);
            console.log(filteredMap);
            break;
        case 2:
            filteredMap = getStateWiseContacts(choice);
            console.log(filteredMap);
            break;
        default: console.log("Invalid input");
    }
}

function getCityWiseContacts(choice) {
    return new Map(Object.entries(addressBook.reduce((city, contact) => cityOrStateWiseContactCollector(choice, city, contact), {})));
}

function getStateWiseContacts(choice) {
    return new Map(Object.entries(addressBook.reduce((state, contact) => cityOrStateWiseContactCollector(choice, state, contact), {})));
}

function cityOrStateWiseContactCollector(choice, cityOrState, contact) {
    if (choice === 1)
        return ((cityOrState[contact.getCity] = cityOrState[contact.getCity] || []).push(contact), cityOrState);
    else
        return ((cityOrState[contact.getState] = cityOrState[contact.getState] || []).push(contact), cityOrState);
}

function getCityOrStateWiseContactCount() {
    let choice = Number(prompt("1 : Citiwise contact count 2 : Statewise contact count "));
    let filteredMap;
    switch (choice) {
        case 1: filteredMap = getCityWiseContacts(choice);
            filteredMap.forEach((value, key) => console.log(key + "==" + value.reduce(((totalRecords) => totalRecords + 1), 0)));
            break;
        case 2: filteredMap = getStateWiseContacts(choice);
            filteredMap.forEach((value, key) => console.log(key + "==" + value.reduce(((totalRecords) => totalRecords + 1), 0)));
            break;
        default:
            console.log("Invalid choice");
    }
}

function sortAddressBookByContactName() {
    addressBook.sort(function (a, b) {
        let x = a.getFirstName.toLowerCase() + " " + a.getLastName.toLowerCase();
        let y = b.getFirstName.toLowerCase() + " " + b.getLastName.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    console.log(addressBook);
}

function menu() {
    while (true) {
        console.log("\n1 : Add new contact to address book " +
            "\n2 : Edit contact " +
            "\n3 : Print address book " +
            "\n4 : Delete contact" +
            "\n5 : Get contacts count" +
            "\n6 : Search person by city or state " +
            "\n7 : View contacts by city or state" +
            "\n8 : Get citywise and statewise contact count" +
            "\n9 : Sort address book by contact name" +
            "\n0 : Exit\n");
        let choice = prompt("enter your choice");
        let ch = parseInt(choice);
        switch (ch) {
            case 1: addNewContact();
                console.log(addressBook);
                break;
            case 2: editContact();
                break;
            case 3: console.log(addressBook);
                break;
            case 4: deleteContact();
                break;
            case 5: getAddressBookContactCount();
                break;
            case 6: searchContactByCityOrState();
                break;
            case 7: viewByCityOrState();
                break;
            case 8: getCityOrStateWiseContactCount();
                break;
            case 9: sortAddressBookByContactName();
                break;
            case 0: return;
            default:
        }
    }
}

menu();