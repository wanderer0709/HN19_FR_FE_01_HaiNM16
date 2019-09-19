function reverseString(str1){
  str1 = str1.replace(/[^a-zA-Z]/g, '');
  arrayStr = str1.split('');
  arrayStr = arrayStr.reverse();
  str1 = arrayStr.join('');
  return str1;
  
}
