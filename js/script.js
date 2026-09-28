let userName = "Andrew";
let userAge = 21;
let userPets = ["Cat", "Dog"];
let userBalance = 1200;
const EVERY_DAY_SPENDING = 15.3;
let everyDaySpendingPerPet = 2.4;
let daysSurvived = 0;

//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName);
console.log("User Age", userAge);
console.log("User Balance", userBalance);
console.log("Everyday spending", everyDaySpendingPerPet);
console.log("Days survived", daysSurvived);


while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
    userBalance -= spending
    daysSurvived++
}

userPets.push("Hamster");
userPets.pop();

function nameVertical(name) {
    console.log(name);
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
nameVertical("Triin");

function code(n) {
    return (n < 100) ? "Informational responses" : (n < 200) ? "Successful responses" : (n < 300) ? "Redirection messages" : (n < 400) ? "Client error responses" : (n < 500) ? "Server error responses" : "Not a valid code";
}

console.log(code(121));
console.log("User have sufficient money for " + daysSurvived + " days")

function compareVariables(var1, var2) {
    if (var1 === var2) {
        console.log("The two variables have the same value and type");
    } else if (var1 == var2) {
        console.log("The two variables have the same value but not the same type");
        console.log("The type of var1 is " + typeof var1);
        console.log("The type of var2 is " + typeof var2);
    } else {
        console.log("The two variables do not have the same value nor the same type");
    }
}

function fibonacci(n) {
    let previous = 0;
    let current = 1;
    let next;
    while (current <= n) {
        next =  previous + current;
        previous = current;
        current = next;
        console.log(previous);
    }
}

fibonacci(34);

compareVariables(5, 5)