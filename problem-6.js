function sumSquareDifference(n) {
    let sumOfSquares = 0;
    let squareOfSum = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sumOfSquares += i * i;
        sum += i;
    }
    squareOfSum = sum * sum;
    return squareOfSum - sumOfSquares;
}