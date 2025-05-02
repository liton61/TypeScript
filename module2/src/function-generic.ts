{
    // function with generic
    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    interface Obj {
        id: number;
        name: string;
    }

    const result1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGeneric<string>("Bangladesh")
    const resGenericObj = createArrayWithGeneric<Obj>({ id: 101, name: "John" })


    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const tuple = createArrayWithTuple<string, number>('Tuple', 101)
}