"use strict";
const user2 = {
    name: "Shama",
    age: 29,
    address: {
        city: "Chudaganag",
        district: "Chuadanga",
    },
    phone: "01987268375",
    action: () => console.log("Hello"),
};
const user3 = {
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
