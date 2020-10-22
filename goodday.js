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


//var birthstar = prompt("input your birth star");
//var daystar = prompt("input the particular day star");
//var birthstar = prompt("input your birth star");
//var daystar = prompt("input the particular day star");

//getstarindex();

function getstarindex() {
var str1 = document.getElementById("str1").value;
var str2 = document.getElementById("str2").value;
console.log(str1, str2);
var stars = ["aswini", "bharani", "krithika", "rohini", "mrugasira", "arudra", "punarvasu", "pushyami", "aslesha", "makha", "pubha", "uthara", "hastha", "chitha", "swathi", "visakha", "anuradha", "jyestha", "moola", "poorvashada", "utharashada", "sravanam", "dhanista", "sathabhisham", "purvabadra", "utharabadra", "revathi"];
var counter = 0;

if (stars.indexOf(str1) > stars.indexOf(str2)) {
  for (i = stars.indexOf(str1); i < stars.length; i++) {
    counter++;
    if (counter > 9) {
      counter = 1;
    }
  }
  for (i = 0; i <= stars.indexOf(str2); i++) {
    counter++;
    if (counter > 9) {
      counter = 1;
    }
  }
  //console.log("else:" + counter);
}
else (stars.indexOf(str1) <= stars.indexOf(str2))
  for (var i = stars.indexOf(str1); i <= stars.indexOf(str2); i++) {
    counter++;
    //console.log(counter);
    if (counter > 9) {
      counter = 1;
  }
}
// (str1==="")||(str2==="")
if((!stars.includes(str1))&&(!stars.includes(str2))){
  document.getElementById("thara").innerHTML = "Either typo or missed field";
}
else{
if (counter === 1) {
  //alert("Janma Thara, Not that good");
  document.getElementById("thara").innerHTML = "Janma Thara, may not be good";
}
else if (counter === 2) {
  // alert("Sampath Thara, A good one");
  document.getElementById("thara").innerHTML = "Sampath Thara, A good one";
}
else if (counter === 3) {
  // alert("Vipath Thara, Not that good");
  document.getElementById("thara").innerHTML = "Vipath Thara, may not be good";
}
else if (counter === 4) {
  // alert("Kshema Thara, A good one");
  document.getElementById("thara").innerHTML = "Kshema Thara, A good one";
}
else if (counter === 5) {
  // alert("Pratyak Thara, Not that good");
  document.getElementById("thara").innerHTML = "Pratyak Thara, may not be good";
}
else if (counter === 6) {
  // alert("Saadhan Thara, A good one");
  document.getElementById("thara").innerHTML = "Saadhan Thara, A good one";
}
else if (counter === 7) {
  // alert("Naidhan Thara, Not that good");
  document.getElementById("thara").innerHTML = "Naidhan Thara, may not be good";
}
else if (counter === 8) {
  // alert("Mitra Thara, A good one");
  document.getElementById("thara").innerHTML = "Mitra Thara, A good one";
}
else if (counter === 9) {
  // alert("Param Mitra Thara, A good one");
  document.getElementById("thara").innerHTML = "Param Mitra Thara, A good one";
}
else{
  alert("Error");
}
}
console.log(stars.indexOf(str1));
console.log(stars.indexOf(str2));
//console.log("final : "+counter);
//console.log("here : "i);
// for(var j=stars.indexOf(daystar);j<=27;j++){
//   if (j>27) {
//     j=0;
//   }
// }
document.getElementById('str1').value = '';
document.getElementById('str2').value = '';
}