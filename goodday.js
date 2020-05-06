// Total stars - 27   Good predicts - 9
// 1. Janma Thara
// 2. Sampath Thara
// 3. Vipath Thara
// 4. Kshema Thara
// 5. Pratyak Thara
// 6. Saadhan Thara
// 7. Naidhan Thara
// 8. Mitra Thara
// 9. Param Mitra Thara
// var counter = 0;
// for(var i=stars.indexOf(birthstar);i<=stars.indexOf(daystar);i++){
//   counter++;
//   console.log(counter);
//   if(counter>9){
//     counter=1;
//   }
// }

var stars = ["aswini", "bharani", "krithika", "rohini", "mrugasira", "arudra", "punarvasu", "pushyami", "aslesha", "makha", "pubha", "uthara", "hastha", "chitha", "swathi", "visakha", "anuradha", "jyestha", "moola", "poorvashada", "utharashada", "sravanam", "dhanista", "sathabhisham", "purvabadra", "utharabadra", "revathi"];
var birthstar = prompt("input your birth star");
var daystar = prompt("input the particular day star");
getstarindex();
function getstarindex() {
  //console.log(stars.indexOf(birthstar));
  //console.log(stars.indexOf(daystar));
}
var counter = 0;

if (stars.indexOf(birthstar) > stars.indexOf(daystar)) {
  for (i = stars.indexOf(birthstar); i < stars.length; i++) {
    counter++;
    if (counter > 9) {
      counter = 1;
    }
  }
  for (i = 0; i <= stars.indexOf(daystar); i++) {
    counter++;
    if (counter > 9) {
      counter = 1;
    }
  }
  //console.log("else:" + counter);
}
else (stars.indexOf(birthstar) <= stars.indexOf(daystar))
  for (var i = stars.indexOf(birthstar); i <= stars.indexOf(daystar); i++) {
    counter++;
    //console.log(counter);
    if (counter > 9) {
      counter = 1;
  }
}
if (counter === 1) {
  console.log("Janma Thara, Not that good");
}
else if (counter === 2) {
  console.log("Sampath Thara, A good one");
}
else if (counter === 3) {
  console.log("Vipath Thara, Not that good");
}
else if (counter === 4) {
  console.log("Kshema Thara, A good one");
}
else if (counter === 5) {
  console.log("Pratyak Thara, Not that good");
}
else if (counter === 6) {
  console.log("Saadhan Thara, A good one");
}
else if (counter === 7) {
  console.log("Naidhan Thara, Not that good");
}
else if (counter === 8) {
  console.log("Mitra Thara, A good one");
}
else if (counter === 9) {
  console.log("Param Mitra Thara, A good one");
}
//console.log("final : "+counter);
//console.log("here : "i);
// for(var j=stars.indexOf(daystar);j<=27;j++){
//   if (j>27) {
//     j=0;
//   }
// }

