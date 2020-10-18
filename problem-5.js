function smallestMult(n) {
    let primes = primesAndNonPrimesUpToN(n)[0];
    let nonPrimes = primesAndNonPrimesUpToN(n)[1];
    let primeProduct = 1;
    for (let i = 0; i < primes.length; i++) {
        primeProduct *= primes[i];
    }
    for (let i = 0; i < nonPrimes.length; i++) {
        primeProduct = lcm(primeProduct, nonPrimes[i]);
    }
    return primeProduct;
}

function primesAndNonPrimesUpToN(n) {
    let primes = [];
    let nonPrimes = [];
    for (let i = 2; i <= n; i++) {
        primes.push(i)
    }
    for (let i = 0; i < primes.length; i++) {
        let j = 2;
        while (primes[i] * j <= primes[primes.length - 1]) {
            for (let k = 0; k < primes.length; k++) {
                if (primes[k] == primes[i] * j) {
                    nonPrimes.push(primes.splice(k, 1) * 1);
                }
            }
            j++;
        }
    }
    let array = [primes, nonPrimes];
    return array;
}

function lcm(a, b) {
    return (a * b) / hcf(a, b);
}

function hcf(a, b) {
    let r = 0;
    while (b != 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}