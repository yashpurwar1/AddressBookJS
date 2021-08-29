//Welcome msg
console.log("Welcome to the AddressBookService");
const prompt = require('Prompt-sync')();

class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;
    // constructor
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
    // getters and setters
    get firstName() { 
        return this._firstName; 
    }
    // Setters with the regex expresseion
    set firstName(firstName) {
        const fnRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(fnRegex.test(firstName))
        this._firstName = firstName;
        else
            throw 'Invalid First Name';
        
    }
    
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        const lnRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(lnRegex.test(lastName)){
        this._lastName = this.lastName;
        }else{
            throw 'Invalid Last Name'
        }
    }
    
    get address() {
        return this._address;
    }
    set address(address) {
        const addRegex = RegExp("[A-Za-z]{4,}$")
        if(addRegex.test(address)){
        this._address = this.address;
        }else{
            throw 'Invalid Address';
        }
    }
    
    get city() {
        return this._city;
    }
    set city(city) {
        const cityRegex = RegExp("[A-Za-z]{4,}$")
        if(cityRegex.test(city)){
        this._city = city;
        }else{
            throw 'Invalid city';
        }
    }
    
    get state() {
        return this._state;
    }
    set state(state) {
        const stateRegex = RegExp("[A-Za-z]{4,}$")
        if(stateRegex.test(state)){
        this._state = state;
        }else{
            throw 'Invalid State';
        }
    }
    
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        const zipRegex = RegExp('^\d{5}(?:[-\s]\d{4})?$');
        if(zipRegex.test(zip)){
        this._zip = zip;
        }else{
            throw 'Invalid zip';
        }
    }
    
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        const phoneRegex = RegExp('((91){1})[ ]([98765]{1})([0-9]{9})$');
        if(phoneRegex.test(phone)) {
            this._phone = this.phone;
        }else{
            throw 'invalid Phone Number';
        }
    }
    
    get email() {
        return this._email;
    }
    set email(email) {
        const emailRegex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
        if(emailRegex.test(email)){
        this._email = this.email;
        }else{
            throw 'Invalid email';
        }
    }
    
    toString() {
        return "FirstName : " +this.firstName+ "\nLastName : " +this.lastName+ "\nAddress :" +this.address+ 
        "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhone : " +this.phone+ 
        "\nemail : " +this.email;
    }
}
// Array to save address details
let detailArray = new Array();

//object
let detail1 = new AddressBook("Yash", "Purwar", "Kadaura", "Kanpur", "UttarPradesh", 285203, 918052493051, "yashpurwar.yash@gmail.com");
detailArray.push(detail1);

let detail2 = new AddressBook("Ankit", "Purwar", "Orai", "Orai", "UttarPradesh", 285258, 918052493052, "yashpurwar@gmail.com");
detailArray.push(detail2);

// Method to print details 
detailArray.forEach(details => console.log(details.toString()));

console.log("\nAdd Contacts")
function addContacts() {
    let fName=prompt("Enter First Name :");
    let lName=prompt("Enter Last Name :");
    let address=prompt("Enter Address: ");
    let city = prompt("Enter City :");
    let state = prompt("Enter State :");
    let zip = prompt("Enter zip :");
    let phone = prompt("Enter Phone Number :");
    let email = prompt("Enter Email :");
    let person = new AddressBook(fName,lName,address,city,state,zip,phone,email);
    detailArray.push(person);
}
//addContacts();


//UC4 - ability to find exiting contact person using their name
function searchByName() {
    let flag = false;
    let personName = prompt("Enter Person name to find the contact details :")
    detailArray.forEach(element => {
        if (element.firstName == personName) {
            console.log("\nContact Found \n"+ element);
            flag = true;
        }
    }
    )
    if(flag == false) {
        console.log("Contact not find");
    }
}
searchByName();

function deleteByFirstName(){
    flag = false;
    let personName = prompt("Enter Person name to delete contact details :")
    detailArray.forEach (element => {
        if(element.firstName == personName){
            let index = detailArray.indexOf(element)
            detailArray.splice(index)
            console.log("Deleted Successfull");
            flag = true;
        }
    })
    if (flag == false){
            console.log("Contact Not Found");
    }
}
deleteByFirstName();

detailArray.forEach(details => console.log(details.toString()));
