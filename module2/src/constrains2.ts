{
    // generic constrains with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }
    type Owner = "bike" | "car" | "ship"  // manually
    type Owner2 = keyof Vehicle

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
        return obj[key];
    }

    const user = {
        name: "John Doe",
        age: 26,
        address: "Dhaka"
    }

    const result = getPropertyValue(user, "name");
    console.log(result);


}