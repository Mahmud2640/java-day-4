// inch to feet

function inchToFeet(inches) {
  var feet = inches / 12;
  return feet;
}

var dadiBolche = inchToFeet(60);
console.log("dadi bolche this feet; ", dadiBolche);

var amiBolchhi = inchToFeet(100);
console.log("ami jeitaa bolchi oitaaa right: ", amiBolchhi);

// mile to km
function mileToKm(miles) {
  var km = miles * 1.60934;
  return km;
}

var marathon = mileToKm(25);
console.log("marathon in km: ", marathon);
