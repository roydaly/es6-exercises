// No matter what we pass into getNewFlavor(), it never
// changes the chip flavor. Fix it using arrow functions.

var chips = {
  flavor: "Original Flavor",
  getNewFlavor: function(flavorNum) {
    if (flavorNum === 1) {
      function upgradeFlavor() {
        this.flavor = "Extreme Kickin'";
      }
      upgradeFlavor();
    } else {
      function downgradeFlavor() {
        this.flavor = "Sea Salt"
      }
      downgradeFlavor();
    }
  }
}

console.log(chips.flavor);
chips.getNewFlavor(1);
console.log(chips.flavor);