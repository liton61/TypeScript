"use strict";
// regular function
function add(a, b) {
    return a + b;
}
add(5, 10);
// arrow function
const sum = (a, b) => {
    return a + b;
};
sum(5, 10);
// function in object
const userInfo = {
    name: "John",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
// callback function
const array = [1, 4, 10];
const newArray = array.map((num) => num * num);
