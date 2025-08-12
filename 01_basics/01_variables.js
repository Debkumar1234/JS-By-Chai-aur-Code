const accountId = 873874
let accountEmail = "debkumar@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 1234 --> not allowed

/*
    Prefer not to use var
    because of issue in block scope and functional scope

    if (true) {
        var message = "Hello";
        console.log(message); // Output: Hello
    }
    console.log(message); // Output: Hello (Unexpected behavior - 'message' is accessible outside the if block)
*/

accountEmail = "debkumar@google.com"
accountPassword = "12345@12"
accountCity = "Ghatal"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
