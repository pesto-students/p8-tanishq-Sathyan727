function findPair(arr, diff) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
      let val1 = arr[i] - diff;
      let val2 = arr[i] + diff;
      if (set.has(val1) || set.has(val2)) {
        return 1;
      }
      set.add(arr[i]);
    }
    return 0;
  }
  