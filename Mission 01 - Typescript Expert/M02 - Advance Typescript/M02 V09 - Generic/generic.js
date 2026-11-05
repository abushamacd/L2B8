// Function Generic
const wrapInArray = (value) => {
    return [value];
};
const strArr = wrapInArray("ABC");
const strArr2 = wrapInArray("ABC");
const userRes = {
    data: {
        name: "Said",
        role: "User",
    },
    statusCode: 200,
    success: true,
};
console.log(userRes);
export {};
