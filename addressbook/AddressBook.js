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
let contact = new Contact("priyanka", "shinde", 9518905320, "pshinde@gmail.com", "bhugaon", "pune", "maharashtra", 412115);

