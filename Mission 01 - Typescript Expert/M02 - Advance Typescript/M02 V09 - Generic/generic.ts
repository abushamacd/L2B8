// Function Generic
const wrapInArray = <T>(value: T) => {
  return [value];
};

const strArr = wrapInArray<string>("ABC");
const strArr2 = wrapInArray("ABC");

// Object Generic
interface IUser {
  name: string;
  role: string;
}

interface IBlog {
  title: string;
  desc: string;
  date: string;
}

interface IApiRes<T> {
  data: T;
  statusCode: number;
  success: boolean;
}

const userRes: IApiRes<IUser> = {
  data: {
    name: "Said",
    role: "User",
  },
  statusCode: 200,
  success: true,
};

console.log(userRes);
