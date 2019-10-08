function powerOfThreeNotNine(m, n){
	var count = 0;
    for(var i = m; i <= n; i++) {
        if(isPowerOfThree(i) && !isPowerOfNine(i)) {
			count++;
		}
	}
	return count;
}

function isPowerOfThree(n) {
	if(n == 0) {
		return false;
	}
	while( n % 3 == 0) {
		n/=3;
	}
	return n == 1;
}

function isPowerOfNine(n) {
	if(n == 0) {
		return false;
	}
	while(n % 9 == 0) {
		n/=9;
	}
	return n == 1;
}
