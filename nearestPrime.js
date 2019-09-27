function nearestPrime(n){
  var nearestDown = n;
    var distance = 0;
    while(nearestDown > 0) {
      if(isPrime(nearestDown)){
        distance = n - nearestDown;
        break;
      }
      nearestDown--;
    }
    for(let i = n; i < (n + distance); i++) {
      if(isPrime(i)) {
        return i;
      }
    }
  return nearestDown;
}

function isPrime(n){
  if(n % 2 == 0){
      return false;
  }
  for(var i = 3; i * i <= n; i+=2){
      if(n % i == 0){
          return false;
      }
  }
  return true;
}
