function nthFibo(n) {
    let result = 0;
    if (n <= 1) {
        result = 1;
    } else {
        result = nthFibo(n - 1) + nthFibo(n - 2);
    }
    return result;
}

function fiboEvenSum(n) {
    let fibo = 0;
    let total = 0;
    for (let i = 1; fibo <= n; i++) {
        if (fibo % 2 == 0) {
            total += fibo;
        }
        fibo = nthFibo(i);
    }
    return total;
}