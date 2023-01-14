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

let contact = createContact();
addressBook.push(contact);
console.log(addressBook);

