function strcmp(a, b) {
  if (a === b) {
    return 0;
  }

  if (a > b) {
    return 1;
  }

  return -1;
}
export const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (strcmp(arr[j], arr[j + 1]) > 0) {
        // doi thu tu
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

export const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_Index = i;
    for (let j = i + 1; j < n; j++) {
      if (strcmp(arr[j], arr[min_Index]) < 0) {
        min_Index = j;
      }
    }
    if (min_Index !== i) {
      const temp = arr[i];
      arr[i] = arr[min_Index];
      arr[min_Index] = temp;
    }
  }
  return arr;
};

export const insertionSort = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && strcmp(arr[j], temp) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

export const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (strcmp(arr[i], pivot) <= 0) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

export const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (strcmp(left[indexLeft], right[indexRight]) <= 0) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};
