function houghPlanet(a, b){
    var result = [];
    for(var i = 0; i < b.length; i++) {
        let count = 0;
        for(var j = 0; j < a.length; j++) {
            if(b[i] > a[j]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}
