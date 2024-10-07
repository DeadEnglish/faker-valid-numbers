import { fakerEN_GB } from "@faker-js/faker";
import { isPhoneNumberValid } from "./phone";

const DATA_ROWS = 5_000;

const numbers = [];

for (let i = 0; i < DATA_ROWS; i++) {
  numbers.push(fakerEN_GB.phone.number({ style: "international" }));
}

const validNumbers = numbers.filter((number) =>
  isPhoneNumberValid(number, "GB"),
);

console.log(`${validNumbers.length} valid numbers`);

Bun.write(`./data/${validNumbers.length}.json`, JSON.stringify(validNumbers));
