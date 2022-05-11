// generieren die wichtigsten Variablen, welche wir verändern wollen

var cardPrice = document.getElementById("price");
var sliderPrice = document.getElementById("priceSlider");
var billingOption = document.getElementById("billing_option");
var pricingOption = document.querySelector(".pricing2");
var disc = document.getElementById("discountAmount");

// bei default wird immer der Anfangswert von dem slider gezeigt 
cardPrice.innerHTML = "$" + sliderPrice.value + ".00";

// je nach input verändert sich der Preis 
sliderPrice.oninput = function () {
  // sliderPrice = 5;
  // console.log(this.value) -> erklärung für this
  cardPrice.innerHTML = "$" + this.value + ".00";
  
    // wenn billing auf yearly umgestellt wird, dann wird die funktion yearlyBill() aufgerufen
  if (billingOption.checked) {
    yearlyBill();
  } else {
    pricingOption.innerHTML = "/monthly";
    disc.innerHTML = "Angebot: Bei einem jährlichen Abo sparen Sie 10%"; 
  }
};

// funktion gibt 10% rabatt
function yearlyBill() {
  var yearPrice = sliderPrice.value * 12;
  var discountPrice = yearPrice * 0.9;
  var discountAmount = yearPrice * 0.1;
  // mit toFixed(2) bekommt man nur 2 Dezimalzahlen
  cardPrice.innerHTML = "$" + discountPrice.toFixed(2);
  pricingOption.innerHTML = "/yearly";
  disc.innerHTML = "Sie sparen durch ein jährliches Abbonement: " + discountAmount.toFixed(2) +"€"
//   console.log(sliderPrice.value);
//   console.log(yearPrice);
//   console.log(discountAmount);
}
