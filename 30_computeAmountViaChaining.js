// “Here we use method chaining, which works because each method returns the same object (this). We store the running total in a closure variable and add values in crore, lacs, and thousand units. Finally, the value() method returns the total amount.”
computeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();

function computeAmount() {
  let total = 0;

  const obj = {
    crore(num) {
      total += num * 10000000; // 1 crore = 10,000,000
      return this;             // return object for chaining
    },
    lacs(num) {
      total += num * 100000;   // 1 lakh = 100,000
      return this;
    },
    thousand(num) {
      total += num * 1000;     // 1 thousand = 1,000
      return this;
    },
    value() {
      return total;            // final output
    },
  };

  return obj;
}

console.log(
  computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()
);
// Output → 143545000