function arrayCenter(a) {
  var b = [];
  a.forEach(function(number) {
     if( Math.min(...a) > Math.abs(number - average(a))) {
       b.push(number);
     }
  });
  return b;
}

function average(array) {
  var sum = array.reduce(function(sum, value) {
    return sum + value;
  });
  return sum / array.length;
}
