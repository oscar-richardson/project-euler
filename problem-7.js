function isPrime(x) {
    for (let i = 2; i * i <= x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

function nthPrime(n) {
    let primes = [];
    let i = 2;
    while (primes.length < n) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }
    return primes[n - 1];
}