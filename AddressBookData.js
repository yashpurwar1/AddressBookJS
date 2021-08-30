const PersonInfo = require("./PersonInfoData.js");
const prompt = require('prompt-sync')();

class AddressBookData {
    personInfoList = new Array();
    
    insert(personInfoList) {
        let found = false;
        try{
            let personInfo = new PersonInfo();
            personInfo.fName = prompt("Enter First Name : "); 
            personInfo.lName = prompt("Enter Last Name : "); 
            personInfo.addressName = prompt("Enter Address : "); 
            personInfo.cityName = prompt("Enter City : "); 
            personInfo.stateName = prompt("Enter State : "); 
            personInfo.zipNumber = prompt("Enter Zip : "); 
            personInfo.phoneNumberInput = prompt("Enter Phone Number : "); 
            personInfo.emailInput = prompt("Enter Email : "); 

            if( personInfoList.length < 0 ) {
                personInfoList.push(personInfo);
            } else if ( personInfoList.length >= 0 ) {
                personInfoList.forEach(element => {
                    if( (element.fName === personInfo.fName ) == true ) {
                        found = true;
                        return;
                    }
                });
                if( found == true ) {
                    console.log();
                    console.log("Duplicate entry exists!");
                } else {
                    personInfoList.push(personInfo);
                }
            }

            return personInfoList;
        } catch ( e ) {
            console.error(e);
        }
    }
        

    editContact(personInfoList, fname) {
         personInfoList.forEach(element => {
            if( (element.fName === fname) == true ) {
                console.log("Press 1 to edit Last Name");
                console.log("Press 2 to edit Address");
                console.log("Press 3 to edit City")
                console.log("Press 4 to edit State");
                console.log("Press 5 to edit Zip");
                console.log("Press 6 to edit Phone Number");
                console.log("Press 7 to edit Email");
                let option = parseInt(prompt("Enter your choice : "));
                let personInfo = new PersonInfo();
                    
                switch ( option ) {
                    case 1:
                        personInfo.lName = prompt("Enter Last Name : "); 
                        element.lName = personInfo.lName;
                        break;
                    case 2:
                        personInfo.addressName = prompt("Enter Address : "); 
                        element.addressName = personInfo.addressName;
                        break;
                    case 3:
                         personInfo.cityName = prompt("Enter City : "); 
                         element.cityName = personInfo.cityName;
                         break;
                    case 4:
                        personInfo.stateName = prompt("Enter State : "); 
                        element.stateName = personInfo.stateName;
                        break;
                    case 5:
                        personInfo.zipNumber = prompt("Enter Zip : "); 
                        element.zipNumber = personInfo.zipNumber;
                        break;
                    case 6:
                        personInfo.phoneNumberInput = prompt("Enter Phone Number : ");
                        element.phoneNumberInput = personInfo.phoneNumberInput;
                        break;
                    case 7:    
                        personInfo.emailInput = prompt("Enter Email : ");
                        element.emailInput = personInfo.emailInput;
                        break;
                    default:
                        console.log("You have entered invalid input!");
                        break;
                    }
                }
            });
            return personInfoList;
    }

    deleteContact(personInfoList, fname) {
        personInfoList.forEach(element => {
            if( (element.fName === fname) == true ) {
                let index = personInfoList.indexOf(fname);
                personInfoList.splice(index, 1);
            }
        });
        return personInfoList;
    }
}

module.exports = AddressBookData;