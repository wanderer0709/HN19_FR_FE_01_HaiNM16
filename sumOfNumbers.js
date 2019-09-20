function sumOfNumbers(arr, n){
  var sum = 0;
  for(let i = 1; i <= n; i++){
      for(let j = 0; j < arr.length; j++){
          if(i % arr[j] == 0){
              sum = sum + i;
              break;
          }
      }
  }
  return sum;
}
