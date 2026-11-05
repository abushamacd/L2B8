// Type Guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
// Truthiness - If condition it true then the work done
// Equality
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
// instance of
// const date = new Date();
// const error = new Error("Error throw");
// console.log(date instanceof Error);
const showDate = (value) => {
    if (value instanceof Date) {
        console.log(value.toISOString());
        return;
    }
    const date = new Date(value);
    console.log(date.toISOString());
};
export {};
// Discriminated Union
