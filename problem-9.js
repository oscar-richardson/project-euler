function specialPythagoreanTriplet(n) {

    for (let i = Math.ceil(n/3)+1; i < n - 2; i++) {

      const jMax = Math.min(i, n-i);

      for (let j = Math.ceil((n-i)/2); j < jMax; j++) {

        if ((n-i-j)**2 + j**2 == i**2) {
          return i*j*(n-i-j);
        }

      }
    }
}