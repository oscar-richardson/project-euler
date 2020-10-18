function largestPrimeFactor(number) {
    let lpf = number;
    for (let i = 2; !isPrime(lpf); i++) {
        if (isPrime(i)) {
            while (lpf % i == 0 && !isPrime(lpf)) {
                lpf /= i;
            }
        }
    }
    return lpf;
}

function isPrime(x) {
    for (let i = 2; i * i <= x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}