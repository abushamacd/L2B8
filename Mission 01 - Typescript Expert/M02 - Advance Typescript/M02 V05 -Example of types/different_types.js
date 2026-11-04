// Top Types
let welcome = "Hello world";
welcome = 123;
let phone = "123";
phone = 19;
// Core Types
const name = "Abu Shama";
const user = null;
// Unit Type
const greetings = () => {
    console.log("Void Types");
};
// Sub Unit Types
const undefiendTypes = () => {
    console.log("Exit");
    return undefined;
};
console.log(undefiendTypes());
// Bottom Types
const getError = (msg) => {
    throw new Error(msg);
};
export {};
