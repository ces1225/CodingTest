function solution(citations) {
  citations.sort((a, b) => b - a);

  let start = 0;
  let end = citations.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (citations[mid] >= mid + 1) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}
