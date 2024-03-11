import { getData } from './getData.js';
import { quickSort } from './quickSort.js';

const data = await getData();

const app = arr => {
  
  let timeStart = Date.now();
  
  let maxIncId     = 0,
      maxDecId     = 0,
      maxIncLength = 1,
      curIncLength = 1,
      maxDecLength = 1,
      curDecLength = 1,
      sum = arr[0];
      
  for (let i = 1; i < arr.length; i++) {
    
    sum += arr[i];
    
    if (arr[i] > arr[i - 1]) {
      curIncLength++;
      if (curIncLength>maxIncLength) {
        maxIncLength = curIncLength;
        maxIncId = i;
      }
      curDecLength = 1;
    } else if (arr[i] < arr[i - 1]) {
      curIncLength = 1;
      curDecLength++;
      if (curDecLength>maxDecLength) {
        maxDecLength = curDecLength;
        maxDecId = i;
      }
    } else {
      curDecLength = 1;
      curIncLength = 1;
    }
  }
  const maxInc = arr.slice(maxIncId - maxIncLength + 1, maxIncId + 1);
  const maxDec = arr.slice(maxDecId - maxDecLength + 1, maxDecId + 1);
  const average = sum / arr.length;
  
  quickSort(arr);
  const maxNumber = arr.at(-1);
  const minNumber = arr[0];
  
  const median = (arr.length % 2 === 1)
    ? arr[(arr.length - 1) / 2]
    : 0.5 * (arr[arr.length / 2 - 1] + arr[arr.length / 2]);
  
  let searchTime = Date.now() - timeStart;
  console.log('SearchTime, sec: ', searchTime / 1000);
  
  return({
    maxNumber,
    minNumber,
    median,
    average,
    maxInc,
    maxDec,
  })
}

console.log(app(data));