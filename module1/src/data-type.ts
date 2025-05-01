{// primitive data type
    const country: string = "Bangladesh"; // string
    const number: number = 123; // number
    const isHappy: boolean = true; // boolean
    const x: undefined = undefined; // undefined
    const y: null = null; // null

    // non primitive data type
    const arr: string[] = ["John", "Smith", "Alice"]; // array
    const numbers: number[] = [1, 2, 3, 4, 5, 6]  //array
    const tuple: [number, string, boolean] = [1, "string", true];  // tuple

    // object
    const user: {
        company: 'SoftyPy', // literal type
        firstName: string;
        middleName?: string; // optional type
        lastName: string;
        isMarried: boolean;
    } = {
        company: "SoftyPy",
        firstName: "John",
        lastName: "Doe",
        isMarried: true,
    }
}