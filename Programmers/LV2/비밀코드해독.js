function solution(n, q, ans) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let result = [];
  var answer = [];

  const verification = () => {
    for (let i = 0; i < result.length; i++) {
      let isValid = true;
      for (let j = 0; j < q.length; j++) {
        if (result[i].filter((x) => q[j].includes(x)).length !== ans[j]) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        answer.push([...result[i]]);
      }
    }
  };

  const dfs = (code, count) => {
    if (code.length === 5) {
      result.push([...code]);
    }

    for (let i = count; i < n; i++) {
      code.push(arr[i]);
      dfs(code, i + 1);
      code.pop();
    }
  };
  dfs([], 0);
  verification(result);
  return answer.length;
}
