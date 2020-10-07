function nthPrime(n) {
    if(n === 1) return 2;
    if(n === 2) return 3;
    let count = 2;
    let i = 1;
    while(count < n + 1){
        let p1 = 6 * i - 1;
        let p2 = 6 * i + 1;
        if(isPrime(p1)) count++;
        if(count === n) return p1;
    
        if(isPrime(p2)) count++;
        if(count === n) return p2;
        i++;
    } 
}

function isPrime(num){
    if(num % 2 === 0) return false;
    for(let i = 3; i < num; i+=2){
        if(num % i === 0) return false;
    }
    return true;
}

/**
 * Explanation:
 * - Formula to find primes is (6n - 1) and (6n  + 1). This formula represents prime numbers above 3 that are odd numbers and not divisible by 3. Since prime numbers above 2 are odd, using this formula, we can greatly reduce the time searching for primes.
 * - Included is a helper function to verify if a number is a prime number.
 * - If n is 1 or 2 return 2 and 3.
 */