function perfectSquares(a, b){
    var count = 0;
    for(var i = a; i <= b; i++) {
        if(Number.isInteger(Math.sqrt(i))) {
            count++;
        }
    }
    return count;
}
