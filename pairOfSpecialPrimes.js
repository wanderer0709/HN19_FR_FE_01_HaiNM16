function pairOfSpecialPrimes(l, r){
  var count = 0;
  for(var i = l; i <= r - 6; i++) {
    if(isPrime(i) && isPrime(i + 6)) {
      count++;
    }
  }
  return count;
}

function isPrime(n){
    if(n % 2 == 0 || n == 1){
        return false;
    }
    for(var i = 3; i <= Math.sqrt(n); i+=2){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
