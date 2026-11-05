// Type Guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

// Truthiness - If condition it true then the work done

// Equality
const compare = (x: string | number, y: number | boolean) => {
  if (x === y) {
    console.log(x, y);
  }
};

// in operator

type bird = { fly: () => void };
type fish = { swim: () => void };

const move = (animal: bird | fish) => {
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

const showDate = (value: Date | String) => {
  if (value instanceof Date) {
    console.log(value.toISOString());
    return;
  }
  const date = new Date(value as string);
  console.log(date.toISOString());
};

// Discriminated Union
interface ICircle {
  kind: "circle";
  redius: number;
}

interface ISquare {
  kind: "square";
  sideLength: number;
}

const getArea = (shape: ICircle | ISquare) => {
  if (shape.kind === "circle") {
    console.log(shape.redius);
  } else {
    console.log(shape.sideLength);
  }
};
