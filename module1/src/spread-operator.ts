// spread operator
const fns1: string[] = ["John", "Smith", "Alice"];
const fns2: string[] = ["Taylor", "Jen", "David"];
fns1.push(...fns2)

const mentors1 = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan"
}
const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid"
}

const mentors = {
    ...mentors1,
    ...mentors2
}