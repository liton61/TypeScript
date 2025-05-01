"use strict";
// rest operator
const greetFriends = (...friends) => {
    friends.forEach((friends) => console.log(`Hi ${friends}`));
};
greetFriends("John", "Smith", "Alice", "Jen");
