function calculateElectricBill(n){
  var totalMoney = 0, fee = 1000;
  if(n > 50){
      totalMoney = 50 * 230;
      n = n - 50;
  }
  else{
      totalMoney = n * 230;
      n = 0;
  }
  if(n > 50){
      totalMoney = totalMoney + 50 * 480;
      n = n -50;
  }
  else{
      totalMoney = totalMoney + n * 480;
      n = 0;
  }
  if(n > 49){
      totalMoney = totalMoney + 49 * 700;
      n = n -49;
  }
  else{
      totalMoney = totalMoney + n * 700;
      n = 0;
  }
  if(n > 0){
      totalMoney = totalMoney + n * 900;
  }
  return totalMoney + fee;
}
