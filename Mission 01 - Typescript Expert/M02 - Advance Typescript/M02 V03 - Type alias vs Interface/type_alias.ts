type vehicle = {
  brand: string;
};

type car = vehicle & {
  model: string;
};

const myCar: car = {
  model: "Primio",
  brand: "Toyota",
};
