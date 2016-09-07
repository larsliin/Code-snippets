// round to decimals (n = number to round, n = decimals (10, 100, 1000, 10000))
function dec(n, r) {
    return Math.round(r * n) / r;
}
