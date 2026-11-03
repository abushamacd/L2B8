type address = {
  city: string;
  district: string;
};

interface IUser {
  name: string;
  age: number;
  action?: () => void;
  address: address;
  phone: string;
}

const user2: IUser = {
  name: "Shama",
  age: 29,
  address: {
    city: "Chudaganag",
    district: "Chuadanga",
  },
  phone: "01987268375",
  action: () => console.log("Hello"),
};

const user3: IUser = {
  name: "Rafik",
  age: 29,
  address: {
    city: "Chudaganag",
    district: "Chuadanga",
  },
  phone: "01987268375",
  action: () => console.log("Hello"),
};

console.log(user2.address);
console.log(user3.address.city);
