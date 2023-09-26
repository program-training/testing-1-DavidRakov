import axios from "axios";
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const countLength = (str: string) => str.length;

export const palindrome = (str: string) => {
  const cleanStr = str.replace(/\s/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
};

export const sortArray = (arr: number[]) => {
  return arr.sort();
};

export const sqrt = (num: number) => {
  if (num <= 0) throw new Error("can not calculate");
  return Math.sqrt(num);
};

export const sumArray = (arr: number[]) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};

export const fetchUserData = async (id: number) => {
  try {
    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!user.email) {
      throw new Error(`Failed to fetch user data`);
    }
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fibonacci = (arr: number[]) => {
  const check =
    arr.length >= 3 &&
    arr.every((num, index) => {
      if (index < 2) {
        return true;
      }
      return num === arr[index - 1] + arr[index - 2];
    });
  if (!check) throw new Error("not a fibonacci");
  return arr[arr.length - 1] + arr[arr.length - 2];
};
