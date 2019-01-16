function pow(base, power) {
    if (power === 1)
        return base;
    return base * pow(base, power - 1);
}
console.log(pow(5, 5));
//# sourceMappingURL=test.js.map