// rest operator
const greetFriends = (...friends: string[]) => {
    friends.forEach((friends: String) => console.log(`Hi ${friends}`))
}
greetFriends("John", "Smith", "Alice", "Jen");