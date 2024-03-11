export const insertionSort = (arr, start = 0, end = null) => {
  
  if (end === null) end = arr.length - 1;
  
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] >= arr[i - 1]) continue;
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  
  return arr;
}