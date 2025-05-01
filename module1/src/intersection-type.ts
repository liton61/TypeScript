{
    type FrontendDeveloper = {
        skills: string[];
        role1: "Frontend Developer";
    }

    type BackendDeveloper = {
        skills: string[];
        role2: "Backend Developer";
    }
    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ["Js", "Node"],
        role1: "Frontend Developer",
        role2: "Backend Developer"
    }
}