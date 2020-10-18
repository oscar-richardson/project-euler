function largestPalindromeProduct(n) {
    let product = (10 ** n - 1) ** 2;
    while (product > 0) {
        let digits = [...product.toString()];
        let count = 0;
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] == digits.reverse()[i]) {
                count += 1;
            }
        }
        if (count == digits.length) {
            for (let j = 10 ** n - 1; j >= 10 ** (n - 1); j--) {
                if (product % j == 0 & product / j > 10 ** (n - 1) & product / j < 10 ** n) {
                    return product;
                }
            }
        }
        product -= 1;
    }
}