// Top Types
let welcome: any = "Hello world";
welcome = 123;

let phone: unknown = "123";
phone = 19;

// Core Types
const name: string = "Abu Shama";

// Nullish Type
interface IUser {
  name: string;
}
type loggedInUser = IUser | null;

const user: loggedInUser = null;

// Unit Type

const greetings = (): void => {
  console.log("Void Types");
};

// Sub Unit Types
const undefiendTypes = (): undefined => {
  console.log("Exit");
  return undefined;
};

console.log(undefiendTypes());

// Bottom Types
const getError = (msg: string): never => {
  throw new Error(msg);
};
