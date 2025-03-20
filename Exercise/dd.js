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

function solution(players, m, k) {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    let compare = players[i] !== undefined ? Math.floor(players[i] / m) : 0;
    if (isNaN(compare)) compare = 0; // NaN 방지

    if (i === 0) {
      map.set(i, compare);
    } else if (compare < 1) {
      map.set(i, map.get(i - 1) ?? 0); // 이전 값이 undefined면 0으로 설정
    } else {
      map.set(i, 10);
    }
  }
  console.log(map);
  return count;
}
