interface IAnimal {
  name: string;
}

interface Icat extends IAnimal {
  breed: string;
}

const pet: Icat = {
  name: "Mew",
  breed: "Persian",
};
