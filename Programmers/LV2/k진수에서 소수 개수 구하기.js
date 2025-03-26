function solution(n, k) {
  var answer = 0;
  let N = parseInt(n).toString(k).split("0");
  let isNotPrime = false;

  for (let i = 0; i < N.length; i++) {
    if (N[i] < 2) {
      continue;
    } else {
      for (let j = 2; j <= Math.floor(Math.sqrt(N[i])); j++) {
        if (N[i] % j === 0) {
          isNotPrime = true;
        }
      }
      if (isNotPrime === false) {
        answer++;
      } else {
        isNotPrime = false;
      }
    }
  }
  return answer;
}
