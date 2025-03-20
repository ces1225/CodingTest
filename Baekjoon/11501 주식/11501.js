const fs = require("fs");
const input = fs.readFileSync("11501 주식/input11501.txt", "utf8").trim().split(/\r?\n/);

let index = 0;
const T = parseInt(input[index++]);

for (let i = 0; i < T; i++) {
    const N = parseInt(input[index++]);
    let numbers = input[index++].split(" ").map(Number);
    let sum = 0;
    let maxPrice = 0;

    for (let j = N - 1; j >= 0; j--) {
        if (numbers[j] > maxPrice) {
            maxPrice = numbers[j];
        } else {
            sum += maxPrice - numbers[j];
        }
    }

    console.log(sum);
}