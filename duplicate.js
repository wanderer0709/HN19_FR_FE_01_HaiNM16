function duplicate(arr){
    for(var i = 0; i < arr.length - 1; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                return true;
            }
        }
    }
    return false;

}
