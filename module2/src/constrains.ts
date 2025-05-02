{
    // constrains in typescript
    const addCourseToStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent<
        {
            id: number;
            name: string;
            email: string;
            devType: string;
        }>({
            id: 101,
            name: "Smith",
            email: "smith@gmail.com",
            devType: "NLWD",
        })

    const student2 = addCourseToStudent({
        id: 101,
        name: "Smith",
        email: "smith@gmail.com",
        devType: "NLWD",
    })

    const student3 = addCourseToStudent({
        id: 101,
        name: "John Doe",
        email: "john@gmail.com"
    })
}