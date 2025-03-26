function solution(n, lost, reserve) {
  let answer = n - lost.length;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 0; i < lost.length; i++) {
    let l = lost[i];
    if (reserve.includes(l)) {
      answer++;
      lost.splice(i, 1);
      reserve.splice(reserve.indexOf(l), 1);
      i--;
    }
  }

  for (let l of lost) {
    let left = l - 1;
    let right = l + 1;
    if (reserve.includes(left)) {
      answer++;
      reserve.splice(reserve.indexOf(left), 1);
    } else if (reserve.includes(right)) {
      answer++;
      reserve.splice(reserve.indexOf(right), 1);
    }
  }
  return answer;
}
