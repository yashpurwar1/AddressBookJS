const prompt = require('prompt-sync')();

class UserMenu {
    menu() {
        console.log("Press 1 to insert contacts in Address Book");
        console.log("Press 2 to display the list of Person Data");
        console.log("Press 3 to edit contact in the Address Book")
        console.log("Press 4 to delete contact from the Address Book");
        console.log("Press 5 to get the number of contacts in the Address Book");
        console.log("Press 6 to search person by City or State in the Address Book");
        console.log("Press 7 to exit");
        console.log();
        return parseInt(prompt("Enter your choice : "));
       }
}
module.exports = UserMenu;