function solution(s) {
  var answer = [];
  let splitS = s.split(" ");
  for (let word of splitS) {
    let ans = "";
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        ans += word[i].toUpperCase();
      } else {
        ans += word[i].toLowerCase();
      }
    }
    answer.push(ans);
  }
  return answer.join(" ");
}
