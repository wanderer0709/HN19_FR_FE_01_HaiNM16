function typeOfTriangle(a, b, c){
    var rightTri = 3, scaleneTri = 0, 
    equilateralTri = 1, isoscelesTri = 2;
    if(triangleCheck(a, b, c) == false){
        return -1; 
    }

    if(a == b && b == c){
        return equilateralTri;
    }
    else if(a == b || a == c || c == b){
        return isoscelesTri;
    }
    else if(((a*a + b*b) == c*c) || ((a*a + c*c) == b*b) ||
    ((b*b + c*c) == a*a)){
        return rightTri;
    }
    else{
        return scaleneTri;
    }

}

function triangleCheck(a, b, c){
    var triangleCheck = false;
    if((a + b > c) && (a + c > b) && (b + c > a)){
        triangleCheck = true;
    }
    else{return triangleCheck;}
}
