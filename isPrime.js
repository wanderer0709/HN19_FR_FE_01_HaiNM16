function isPrime(n){
 if(n == 0){
     return false;
 }
 for(var i = 2; i < n; i++){
     if(n % i == 0){
         return false;
         break;
     }
 }
 return true;
}
