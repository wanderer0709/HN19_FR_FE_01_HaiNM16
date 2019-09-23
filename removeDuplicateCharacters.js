function removeDuplicateCharacters(str){
    var arrayChar = str.split('');
    var strResult = [];
    for(let i = 0; i < arrayChar.length; i++) {
        if(str.indexOf(arrayChar[i]) === str.lastIndexOf(arrayChar[i])) {
            strResult.push(arrayChar[i]);
        } 
    }
    str = strResult.join('');
    return str;
}
