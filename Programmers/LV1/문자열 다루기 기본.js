function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let compare of s) {
      if (isNaN(compare)) return false;
    }
    return true;
  } else {
    return false;
  }
}
