function divisibleTriangleNumber(n) {
    if(n === 1) return 1;
    let [divisors, number, next] = [1, 1, 2];
    while(divisors < n){
        number += next;
        next ++;
        divisors = 1;
        let [num, exp] = [number, 0];
        while(num % 2 === 0){
            num /= 2;
            exp += 1;
        }
        divisors *= (exp + 1);
        for(let i = 3; i < Math.sqrt(num); i++){
            exp = 0;
            while(num % i === 0){
                num /= i;
                exp += 1;
            }
            divisors *= (exp + 1);
        }
        if(num !== 0) divisors *= 2;
    }
    return number;
}

/**
 * Explanation:
 * - First understand that the total number of divisors for any number is multiplying the exponentials of the primes which have been added one to. Eg. n = (p^a)(q^b). divisors = (a+1) * (b+1).
 * - If number is one, just return 1.
 * - Set up variables divisors, triangle number and next number to add to triangle number. We shall start with 1 and have next be 2.
 * - While our divisors is not equal to n, loop. Number gets added to next and next increments by one at the start of each loop. Divisors gets reset to 0.
 * - If divisible by 2, keep dividing until it can't be divided. Then with the incremental exponential, add one and then multiply by divisors.
 * In the other for loop to find odd primes, reset exp to 0 at the start of each. If dividable by odd prime, keep diving and incrementing exp at the same time. At the end multiply it to divisors as before.
 * - If a number remains after, multiply divisors by 2 since it has an exponential of 1 and you add 1 to it before multiplication.
 * - If divisors greater than n, while loop breaks and number is returned.
 */