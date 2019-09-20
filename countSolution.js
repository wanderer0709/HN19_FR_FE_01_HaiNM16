function countSolution(n, m){
    var a = 0, b; 
    for(; a <= Math.sqrt(n); a++){
        b = n - a*a;
        if(Math.sqrt(m - a) == b){
            return 1;
        }
    }
    return 0;
  }
