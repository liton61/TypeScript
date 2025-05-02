{
    // asynchronous typescript
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "Something";
            if (data) {
                resolve(data)
            }
            else {
                reject("Failed to load data !")
            }
        })
    }
    const showData = async (): Promise<string> => {
        const data = await createPromise();
        // console.log(data)
        return data
    }
    showData();

    type Todo = {
        userId: number;
        id: number;
        title: string;
        complete: boolean
    }

    const getToto = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data
        // console.log(data)
    }
    getToto();
}