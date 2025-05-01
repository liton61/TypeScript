// union type
type frontendDeveloper = "React" | "Angular";
type fullStackDeveloper = "MongoDB" | "GraphQL";

type developer = frontendDeveloper | fullStackDeveloper

const newDeveloper: frontendDeveloper = "React"

type TUser = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "B+";
}

const user1: TUser = {
    name: "John",
    gender: "male",
    bloodGroup: "B+",
}