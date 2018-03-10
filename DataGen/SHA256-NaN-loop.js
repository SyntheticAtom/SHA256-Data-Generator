var sha256 = require('js-sha256');

function DataGen() {
  sha256.hex('DataGen');  //Output: 3A8DA37699EE780EA152797F38DC8F6157B65416231A0EC3420E4717BE8E3E12
  var Alpha = "3";
  var Beta = "2";
var Test = Alpha + Beta;
}
DataGen();

while(Test = 5) {
  console.log(sha256.hex)
  sha256.hex++
  //Due to incrementation the console will display NaN(Not a Number)
}
