function solution(jobs) {
  let sum = 0;
  let sec = 0;
  let size = jobs.length;

  while (jobs.length > 0) {
    if (!jobs.some((job) => job[0] <= sec)) {
      sec++;
      continue;
    }

    const target = jobs
      .filter((job) => job[0] <= sec)
      .sort((a, b) => a[1] - b[1])[0];

    sec += target[1];
    sum = sum + (sec - target[0]);
    jobs.splice(jobs.indexOf(target), 1);
  }

  return Math.floor(sum / size);
}
