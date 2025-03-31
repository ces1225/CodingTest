//https://cocococo.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-Lv3-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C#2.-%ED%92%80%EC%9D%B4
var answer = [];
function solution(tickets) {
  // 1) 알파벳 순서에 따른 정렬
  let ticketsSort = tickets.sort();

  // 2) ICN에서 출발하기 때문에 ICN 담고 시작한다.
  return dfsPlan("ICN", ticketsSort, ["ICN"]);
}
function dfsPlan(ticket, ticketsSort, planArr) {
  // 3) 티켓이 전부 소진 되면 return 한다.
  if (ticketsSort.length == 0) {
    // 4) 전부 방문하면 answer에 담는다.
    answer = planArr;
    return answer;
  }
  for (let i = 0; i < ticketsSort.length; i++) {
    // 5) 티켓의 시작 위치 = 전 티켓의 도착 위치 && answer에 값이 없을 때만 반복한다.
    if (ticketsSort[i][0] == ticket && answer.length == 0) {
      // 6) 방문한 테켓을 제외
      let reTickets = [...ticketsSort.slice(0, i), ...ticketsSort.slice(i + 1)];

      // 7) 마지막 티켓에 도달( '4)'의 return )하면 모든 DFS 함수를 빠져나온다.
      if (i == ticketsSort.length - 1)
        return dfsPlan(ticketsSort[i][1], reTickets, [
          ...planArr,
          ticketsSort[i][1],
        ]);
      // 8) 마지막 티켓에 도달하지 않았다면,  새로운 DFS 함수 시작한다.
      else
        dfsPlan(ticketsSort[i][1], reTickets, [...planArr, ticketsSort[i][1]]);
    }
  }
  // 9) '3)'에서 담은 answer를 return 한다.
  return answer;
}

//https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C-JS
function solution(tickets) {
  let answer = [];
  const result = [];
  const visited = [];

  tickets.sort();

  const len = tickets.length;
  const dfs = (ticket, count) => {
    result.push(ticket);

    if (count === len) {
      answer = result;
      return true;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i] && tickets[i][0] === ticket) {
        visited[i] = true;
        if (dfs(tickets[i][1], count + 1)) return true;
        visited[i] = false;
      }
    }
    return false;
  };

  dfs("ICN", 0);

  return answer;
}
