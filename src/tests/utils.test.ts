import { describe, expect, it, test } from "vitest";
import {
  countLength,
  palindrome,
  sortArray,
  sqrt,
  sumArray,
  fetchUserData,
  fibonacci,
} from "../utils/utils";
import { User } from "../utils/utils";

test("counts the length of a string", () => {
  expect(countLength("hello world")).toBe(11);
});

describe("palindrome test", () => {
  test("isPalindrome", () => {
    expect(palindrome("Go dog")).toBe(true);
  });
});

test("sorting", () => {
  expect(sortArray([9, 8, 7, 2, 5, 6])).toEqual([2, 5, 6, 7, 8, 9]);
});

describe.concurrent("Returns the square root (if possible)", () => {
  test("return the result", () => {
    expect(sqrt(64)).toBe(8);
  });
  test("sqrt2 test under then 0", () => {
    expect(() => {
      sqrt(-1);
    }).toThrowError(Error);
  });
});

describe.concurrent("Calculation of the array", () => {
  it("sum Array", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  it("sum Array bigger then 9", () => {
    expect(sumArray([1, 7, 3])).toBeGreaterThan(8);
  });
});

describe("get user from data", () => {
  test("user", async () => {
    const expectedUser: User = {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    };
    const result = await fetchUserData(2);

    expect(result).toEqual(expectedUser);
  });
  test("error", async () => {
    await expect(fetchUserData(1000)).rejects.toThrowError();
  });
});

describe.concurrent("test a fibonacci", () => {
  test("returns the next number", () => {
    const arr = [1, 1, 2, 3, 5, 8, 13];
    expect(fibonacci(arr)).toEqual(21);
  });

  test("returns if fibonacci is correct", () => {
    const arr = [1, 1, 2, 3, 4, 8, 13];
    expect(() => {
      fibonacci(arr);
    }).toThrowError();
  });
});
