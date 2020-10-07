function smallestMult(n) {
    if(n <= 3) return n;
    const s = new Array(n + 1).fill(0);
    const prime = [2];
    for(let i = 3; i < n + 1; i+=2){
        if(s[i] === 0) {
            prime.push(i);
            for(let j = i; j < n; j += i){
                s[j] = 1;
            }
        }
    }
    return prime
        .map(p => p = Math.pow(p, Math.floor(Math.pow(n, 1 / p))))
        .reduce((t, c) => t * c);
}

/**
 * Explanation: 
 * - When looking at the test cases, I noticed that the LCM are all prime numbers and for each prime number, the prime with its respective power does not go over "n".
 * - This means that all I have to do is find all the primes in range of n (inclusive) and ensure that each prime is exponentiated to the point that it is one less than going over "n"
 * - Time complexity: O(n^2)
 * - Space complexity: O(n)
 */