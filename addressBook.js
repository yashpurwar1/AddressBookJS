//Welcome msg
console.log("Welcome to the AddressBookService");

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
//object
let detail1 = new AddressBook("Yash", "Purwar", "Kadaura", "Kanpur", "UttarPradesh", 285203, 918052493051, "yashpurwar.yash@gmail.com");
//exception handling
try {
    console.log(detail1.toString());
} catch (e) {
    console.error(e);
}