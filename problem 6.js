function sumSquareDifference(n) {
    let expSum = 0;
    let sum = 0;
    for(let i = 0; i < n + 1; i++){
        expSum += i ** 2;
        sum += i;
    }
    return sum ** 2 - expSum;
}

/**
 * Explanation:
 * - Straight-forward. Have 2 variable accumulate the exponential sum and sum.
 * - Return sum squared minus sum of exponentials
 */