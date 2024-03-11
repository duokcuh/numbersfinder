import { insertionSort } from './insertionSort.js';

export const quickSort = (arr, startId = 0, endId = null) => {
  if (endId === null) endId = arr.length - 1;
  // if (startId >= endId) return;
  //small optimization
  if (endId - startId <= 16) {
    insertionSort(arr, startId, endId);
    return;
  }
  
  let [endLeft, startRight] = partition(arr, startId, endId);
  quickSort(arr, startId, endLeft);
  quickSort(arr, startRight, endId);
  
}

const partition = (arr, startId, endId) => {
  let pivot = arr[startId];
  let i = startId + 1;
  let g = endId + 1;
  let p = startId;
  let j = endId;
  
  while (true) {
    
    while (i < endId && arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    
    if (i >= j) {
      if (i === j && arr[i] === pivot) {
        p++;
        [arr[i], arr[p]] = [arr[p], arr[i]];
      }
      break;
    }
    
    [arr[i], arr[j]] = [arr[j], arr[i]];
    
    if (arr[i] === pivot) {
      p++;
      [arr[i], arr[p]] = [arr[p], arr[i]];
    }
    if (arr[j] === pivot) {
      g--;
      [arr[j], arr[g]] = [arr[g], arr[j]];
    }
    i++;
    j--;
  }
  
  for (let k = startId; k <= p; k++) {
    [arr[k], arr[j]] = [arr[j], arr[k]];
    j--;
  }
  for (let k = endId; k >= g; k--) {
    [arr[i], arr[k]] = [arr[k], arr[i]];
    i++;
  }
  
  return [j, i];
}

/*const median = (arr, first, last) => {
  
  let mid = (last + first) / 2 - (last + first) % 2;
  
  if (arr[first] <= arr[mid] && arr[mid] <= arr[last]) return arr[mid];
  if (arr[first] <= arr[last]) return arr[first];
  return arr[last];
}*/
