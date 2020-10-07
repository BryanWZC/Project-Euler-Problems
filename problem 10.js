function primeSummation(n) {
    const s = new Array(n).fill(0);
    let sum = 2;
    for(let i = 3; i < n; i+=2){
        if(s[i] === 0){
            sum += i;
            for(let j = i; j < n; j += i){
                s[j] = 1;
            }
        }
    }
    return sum;
}

/**
 * Explanation:
 * - Use sieve method to find primes up till n and sum them up
 * - Time complexity: O(n^2)
 * - Space complexity: O(n) 
 */