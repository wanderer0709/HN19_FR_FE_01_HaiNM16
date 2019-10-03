function findMinPalindrome(n){
  while(true){
    n++;
    if(isPalindrome(n)) {
      break;
    }
  }
  return n;
}

function isPalindrome(n) {
  var str = n.toString();
  return str == str.split('').reverse().join('');
}
