function randomNumberGeeratorInRange(min, max) {
    // write your solution here

    return Math.floor(Math.random() * (max - min + 1)) + min

}
console.log{`My random number: $(randomNumerGeneratorInRange(5, 100)}`);