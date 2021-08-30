class PersonInfo {

    // Variables.
    firstName; lastName; address; city; state; zip; phoneNumber; email;

    //constructor
    constructor ( ...params ) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    // Generating setters and getters and validating user details.
    set fName( firstName ) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if ( nameRegex.test( firstName )) {
            this.firstName = firstName;
        }
        else {
            throw "First Name is Incorrect!";
        }
    }

    get fName() {
        return this.firstName;
    }

    set lName( lastName ) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if ( nameRegex.test( lastName )) {
            this.lastName = lastName;
        }
        else {
            throw "Last Name is Incorrect!";
        }
    }

    get lName() {
        return this.lastName;
    }

    set addressName( address ) {
        let nameRegex = RegExp('^([0-9A-Za-z\\s,-\\\\.]{4,})$');
        if ( nameRegex.test( address )) {
            this.address = address;
        }
        else {
            throw "Address is Incorrect!";
        }
    }

    get addressName() {
        return this.address;
    }

    set cityName( city ) {
        let nameRegex = RegExp('^([A-Za-z\\s]{4,})$');
        if ( nameRegex.test( city )) {
            this.city = city;
        }
        else {
            throw "City is Incorrect!";
        }
    }

    get cityName() {
        return this.city;
    }

    set stateName( state ) {
        let nameRegex = RegExp('^([A-Za-z\\s]{4,})$');
        if ( nameRegex.test( state )) {
            this.state = state;
        }
        else {
            throw "State is Incorrect!";
        }
    }

    get stateName() {
        return this.state;
    }

    set zipNumber( zip ) {
        let nameRegex = RegExp('^([0-9]{6})$');
        if ( nameRegex.test( zip )) {
            this.zip = zip;
        }
        else {
            throw "Zip is Incorrect!";
        }
    }

    get zipNumber() {
        return this.zip;
    }

    set phoneNumberInput( phoneNumber ) {
        let nameRegex = RegExp('^[0-9]{10}$');
        if ( nameRegex.test( phoneNumber )) {
            this.phoneNumber = phoneNumber;
        }
        else {
            throw "Phone Number is Incorrect!";
        }
    }

    get phoneNumberInput() {
        return this.phoneNumber;
    }

    set emailInput( email ) {
        let nameRegex = RegExp('^[A-Za-z0-9!#$%&*+\\\\=?`{|}~^-]+(?:\\.[A-Za-z!#$%&*+\\\\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\\.)+[a-zA-Z]{2,3}$');
        if ( nameRegex.test( email )) {
            this.email = email;
        }
        else {
            throw "Email is Incorrect!";
        }
    }

    get emailInput() {
        return this.email;
    }

    //method
    toString() {
        return "firstName = " +this.firstName + ", lastName = " +this.lastName + ", address = " +this.address + ", city = " +this.city +
                                ", state = " +this.state + ", zip = " +this.zip + ", phoneNumber = " +this.phoneNumber + ", email = " +this.email;
    }
}

//exporting the class file to another class
module.exports = PersonInfo;