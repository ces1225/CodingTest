function solution(n, times) {
  times.sort();
  let start = 0;
  let end = Math.max(...times) * n;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (sum < n) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}
