function gold(n){
  var count = 0;
  for(var i = 1; i < n/2; i++) {
      if(isPrime(i) && isPrime(n - i) && n-i) {
          count ++;
      }
  }
  return count;
}

function isPrime(n){
  if(n % 2 == 0 || n === 1){
      return false;
  }
  for(var i = 3; i * i <= n; i+=2){
      if(n % i == 0){
          return false;
      }
  }
  return true;
}


