{// generic type
    type GenericArray<T> = Array<T>

    const numbers: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7];
    const person: GenericArray<string> = ["John", "Smith", "Alice", "Jen"]
    const boolean: GenericArray<boolean> = [true, false, true]

    interface User {
        name: string,
        age: number,
    }

    const user: GenericArray<User> = [
        {
            name: "John",
            age: 35,
        },
        {
            name: "Smith",
            age: 35,
        }
    ]
}