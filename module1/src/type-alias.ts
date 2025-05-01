// type alias

type TStudent = {
    name: string;
    age: number;
    gender: string;
    contact?: string;
    address: string;
}

{
    const student1: TStudent = {
        name: "John",
        age: 35,
        gender: "male",
        contact: "017777778709",
        address: "Bangladesh",
    }

    const student2: TStudent = {
        name: "Smith",
        age: 30,
        gender: "male",
        address: "Dhaka",
    }

    type UserName = string
    type IsAdmin = boolean
    const userName: UserName = "John Doe";
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2
}