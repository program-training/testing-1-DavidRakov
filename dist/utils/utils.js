"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.testing = void 0;
const countLength = (str) => {
  return str.length;
};
const palindrome = (str) => {
  const cleanStr = str.replace(/\s/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
};
const sortArray = (arr) => {
  const sorted = arr.sort();
  return sorted;
};
const sqrt = (num) => {
  if (num > 0) {
    return Math.sqrt(num);
  } else {
    return "can not calculate";
  }
};
const sumArray = (arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};
const fetchUserData = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const response = yield fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch user data. Status code: ${response.status}`
        );
      }
      const user = yield response.json();
      return user;
    } catch (error) {
      return `Error fetching user data: ${error.message}`;
    }
  });

exports.testing = {
  countLength,
  palindrome,
  sortArray,
  sqrt,
  sumArray,
  fetchUserData,
};
