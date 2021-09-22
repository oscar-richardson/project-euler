function primeSummation(n) {

    const array = [], rootN = Math.sqrt(n), primes = [];

    for (let i = 0; i < n; i++) {
        array.push(true);
    }

    for (let i = 2; i <= rootN; i++) {
        for (let j = i**2; j < n; j += i) {
            array[j] = false;
        }
    }

    for (let i = 2; i < n; i++) {
        if (array[i]) {
            primes.push(i);
        }
    }

    return primes.reduce((a, b) => a + b, 0);

}