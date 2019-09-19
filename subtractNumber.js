function subtractNumber(a, b){  
  var minus, count = 0;
  while(true){
      minus = Math.abs(a-b);
      if(a > b){
          a = minus;
      }
      else if(b > a){
          b = minus;
      }
      else {
          a = minus;
      }
      count++;
      if(a == 0 || b == 0){
          break;
      }
  }
  return count;
}

