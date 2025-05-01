{// optional chaining
    type TUser = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress?: string;
            permanentAddress?: string;
        }
    }

    const user: TUser = {
        name: "John",
        address: {
            city: "Dhaka",
            road: "A12",
            presentAddress: "Dhaka",
        }
    }
    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
    console.log({ permanentAddress })
}