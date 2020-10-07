function fiboEvenSum(n) {
    let prev = 0;
    let curr = 1;
    let sum = 0;
    for(let i = n; i > 0; i--){
        [curr, prev] = [prev + curr, curr];
        if(curr % 2 === 0 && curr <= n) sum += curr;
    }
    return sum;
}