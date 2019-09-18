function isIPv4Address(inputString){
  var splitStr = inputString.split(".");
  for(var i = 0; i < splitStr.length; i++){
      if(parseInt(splitStr[i]) < 0 || parseInt(splitStr[i]) > 255 
      || splitStr.length != 4 ){
          return false;
      }
      else if(splitStr[i] == "" || isNaN(splitStr[i])){
          return false;
      }
  }
  return true;
}
