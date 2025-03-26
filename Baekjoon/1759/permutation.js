// 조합
const ar = ["a", "b", "c", "d"];
const C = 3;
let output = [];
let arr = ar.sort();

const dfs = (candidate, used) => {
  if (candidate.length === C) {
    output.push(candidate);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (!used.includes(i)) {
        dfs(candidate + arr[i], [...used, i]);
      }
    }
  }
};

dfs("", []);
console.log(output.join("\n"));
console.log(output.length);
