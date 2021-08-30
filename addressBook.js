const prompt = require('prompt-sync')();
const UserMenu = require("./UserMenuData.js"); 
const AddressBookData = require("./AddressBookData.js"); 

let userMenu = new UserMenu();
let addressBookData = new AddressBookData();
let personInfoList = new Array();
flag = true;

while( flag ) {

    let option = userMenu.menu();
    switch( option ) {
        case 1:
            personInfoList = Array.from(addressBookData.insert(personInfoList));
            console.log();
            break;
        case 2:
            console.log(personInfoList);
            console.log();
            break;
        case 3:
            let fname = prompt("Enter the First Name of the Contact : ");
            personInfoList = addressBookData.editContact(personInfoList, fname);
            console.log();
            break; 
        case 4:
            let personName = prompt("Enter the First Name of the Contact : ");
            personInfoList = addressBookData.deleteContact(personInfoList, personName);
            console.log();
            break; 
        case 5:
            console.log("Number of contacts in the address book is : " +personInfoList.length);
            console.log();
            break;
        case 6:
            addressBookData.searchContact(personInfoList);
            console.log();
            break;   
        case 7:
            flag = false;
            break;       
        default:
            console.log("You have entered invalid input!");
            flag = false;
            break;
    }
}