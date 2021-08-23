//Welcome msg
console.log("Welcome to the AddressBookService");

class AddressBook {
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
    set firstName(firstName) {
        this._firstName = firstName;
    }
    
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = this.lastName;
    }
    
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = this.address;
    }
    
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        this._zip = zip;
    }
    
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        this._phone = this.phone;
    }
    
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = this.email;
    }
    
    toString() {
        return "[FirstName : " +this.firstName+ "\nLastName : " +this.lastName+ "\nAddress :" +this.address+ 
        "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhone : " +this.phone+ 
        "\nemail : " +this.email+"]";
    }
}
// object
let detail = new AddressBook("Yash", "Purwar","Kadaura", "Kalpi","UP", "285203","974493051");

console.log(detail.toString());