function specialPythagoreanTriplet(n) {
    let maxA =Math.floor(n * Math.sqrt(2) / (2 + Math.sqrt(2)));
    for(let c = n - 1; c > maxA; c--){
        for(let a = 1; a < maxA; a++){
            let b = n - c - a
            if(b < a) break;
            if(a**2 + b**2 === c**2) return a * b * c
        }
    }
}

/**
 * Explanation: 
 * - since a < b < c and a^2 + b^2 = c^2. I found the max value A can be through some algebra and got maxA by setting a = b. I floored the value since the value of A could not be beyond that and we want whole numbers.
 * - This solution uses 2 for loops. c with a restriction that does not go below maxA and a with a restriction that does not go beyond maxA. 
 * Within the 2nd for loop, we can find b through algebraic relations. If b < a, break the loop in order to conform to a < b < c.
 */