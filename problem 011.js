function largestGridProduct(arr) {
    let length = arr.length;
    let maxProduct = 0;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            let [across, down, rightDownDiag, rightUpDiag] = [1, 1, 1, 1];
            for(let c = 0; c < 4; c++){
            if(j < length - 3) across *= arr[i][j+c];
            if(i < length - 3) down *= arr[i+c][j];
            if(i < length - 3 && j < length - 3) rightDownDiag *= arr[i+c][j+c];
            if(i > 3 && j < length - 3) rightUpDiag *= arr[i-c][j+c];
            }
            const cellMax = Math.max(across, down, rightDownDiag, rightUpDiag);
            if(cellMax > maxProduct) maxProduct = cellMax;
        }
    }
    return maxProduct;
}

/**
 * Explanation:
 * - Grid arrays are square arrays. As such finding a single length is enough.
 * - The products we will be focusing on is across, down, and right diagonals(up right and down right)
 * - We focus on only these as with only them, we will be able to cover the entire matrix.
 * - Next, we focus on the conditions that limit each one of these products.
 * - For across, it will be limited by the cell's row position (j). Only multiply across if position is less than length - 3 else you will go over the array index and get NaN.
 * - For down and right diagonals, similar restrictions can be enforced through if statements.
 * The arrays of ones will be put through a for loop that terminates after 3 that multiplies each element in the array by their respective cells within the grid.
 * - After looping, check to see if max element of array is bigger than maxProduct. If so, it becomes the new maxProduct.
 * - We do not need to care if the any of the values default to one and max cellProduct is ones as we only care about maxProduct.
 * - After looping through entire grid, return maxProduct.
 * Time complexity: O(n2)
 * Space complexity: O(n)
 */