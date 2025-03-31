// 배열의 실질적인 값을 통해 heap을 구현 [5,4,2,1,4,3,2]
class Maxheap {
  constructor() {
    this.heap = [];
  }

  getParentIdx(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIdx(i) {
    return i * 2 + 1;
  }

  getRightIdx(i) {
    return i * 2 + 2;
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    // 새로운 노드는 항상 힙의 마지막 노드로 삽입
    let index = this.heap.length - 1;
    let parentIdx = this.getParentIdx(index);

    // 힙의 마지막 노드를 부모 노드와 비교
    // 해당 index가 부모 노드보다 작거나 같을 때까지 반복복
    while (parentIdx >= 0 && this.heap[index] > this.heap[parentIdx]) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      let leftIdx = this.getLeftIdx(index);
      let rightIdx = this.getRightIdx(index);
      let largest = index;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx] > this.heap[largest]
      ) {
        largest = leftIdx;
      }

      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] > this.heap[largest]
      ) {
        largest = rightIdx;
      }

      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
    }
  }
}

// 배열, 튜플 기반으로 받을 수 있는 최소 합으로, ["A" , 0] 이런 식으로 heap를 저장
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (
      this.heap[parentIdx] &&
      this.heap[index][1] < this.heap[parentIdx][1]
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[index][1]) ||
      (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[index][1])
    ) {
      let smallerIdx = leftIdx;
      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx][1] < this.heap[smallerIdx][1]
      ) {
        smallerIdx = rightIdx;
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}
