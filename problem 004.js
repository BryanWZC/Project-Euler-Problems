function largestPalindromeProduct(n) {
    let upper = 9;

    for(let i = 1; i < n; i++){
      upper = upper * 10 + 9;
    }

    let lower = Math.floor(upper / 10) + 1;
    let largest = 0;

    for(let i = upper; i >= lower; i--){
        for(let j = i; j >= lower; j--){
            let mult = i * j;
            if(mult < largest) break;

            let value = mult;
            let reverse = 0;

            while(value !== 0){
                reverse = reverse * 10 + value % 10;
                value = Math.floor(value / 10);
        }
        
        if(mult === reverse && mult > largest) largest = mult;
    }
    }
    return largest;
}

/**
 * Explanation:
 * - Since we know that the number of digits of the 2 numbers have to be n, we can set the lower and upper bounds for the numbers
 * - Set up 2 for loops with the first and second number starting from the upper bound since you will reach a solution faster.
 * - If the multiple of i and j is less than the largest palindrome, break out of the second loop since there is no point in going further.
 * - If it is larger, then you check to see if the number and reverse is true. If true, then largest takes on the value of multiple.
 * - At the end of all loops, the value of largest is returned.
 */