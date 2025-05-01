"use strict";
// object destructuring
{
    const user = {
        id: 101,
        name: {
            firstName: "John",
            lastName: "Doe",
        },
        contact: "01777777777",
        address: "Dhaka"
    };
    const { contact, name: { firstName } } = user;
    console.log(contact, firstName);
}
// array destructuring
const myFriends = ["John", "Smith", "Jen", "Taylor", "David"];
const [, , bestFriend, ...rest] = myFriends;
