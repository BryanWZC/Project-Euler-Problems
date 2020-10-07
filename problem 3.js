function largestPrimeFactor(number) {
    while(number % 2 === 0){
        number /= 2;
    }
    let largest = 2;
    let i = 3;
    while(number !== 1){
        if(number % i === 0){
            number /= i;
            largest = i;
        }
        i+=2;
    }
    return largest;
}

/**
 * Explanation:
 * - if a number is evenly divisible by 2. Keep diving by 2 until it cannot be divided further.
 * - If the division above results in 1. That means that the largest prime is 2.
 * - Else, since primes from 3 are odd, we start from 3 and divide the number with i which keeps increasing by 2.
 * - We do not need to worry about dividing the number by another number that is a factor of a prime as if it is a factor, it would have been divided out early on. 
 */