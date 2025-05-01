// regular function
function add(a: number, b: number): number {
    return a + b
}
add(5, 10);

// arrow function
const sum = (a: number, b: number): number => {
    return a + b;
}
sum(5, 10);

// function in object
const userInfo = {
    name: "John",
    balance: 0,

    addBalance(balance: number): number {
        return this.balance + balance;
    }
}

// callback function
const array: number[] = [1, 4, 10];
const newArray: number[] = array.map((num: number): number => num * num)
