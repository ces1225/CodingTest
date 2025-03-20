function solution(players, m, k) {
  let server = Array(24).fill(0);
  let answer = 0;

  players.forEach((cnt, time) => {
    if (parseInt(cnt / m) > server[time]) {
      let serverCnt = parseInt(cnt / m) - server[time];

      for (let i = 0; i < k; i++) {
        if (time + i <= 23) {
          server[time + i] = server[time + i] + serverCnt;
        }
      }
      answer += serverCnt;
    }
  });
  return answer;
}

/*초기 코드 (실패)
function solution(players, m, k) {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < players.length + 1; i++) {
    if (players[i] / m < 1) {
      map.set(i, 0);
    } else {
      if (players[i] / m <= map.get(i - 1)) {
        map.set(i, map.get(i - 1));
      } else if (players[i] / m > map.get(i - 1)) {
        map.set(i, Math.floor(players[i] / m));
        count += Math.floor(players[i] / m) - map.get(i - 1);
      }
    }
  }
  return count;
}
*/
