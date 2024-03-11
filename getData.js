export const getData = async () => {
  
  let response = await fetch('10m.txt');
  let data = await response.text();
  data = data.split('\n').map( e => Number(e) );
  
  return data;
}