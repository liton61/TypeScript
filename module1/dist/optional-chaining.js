"use strict";
var _a, _b;
{ // optional chaining
    const user = {
        name: "John",
        address: {
            city: "Dhaka",
            road: "A12",
            presentAddress: "Dhaka",
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress });
}
