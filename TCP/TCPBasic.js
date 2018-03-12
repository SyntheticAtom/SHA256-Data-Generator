//Node Requirements
var sha256 = require('js-sha256');

//Function, for getting servers that MiningPC1 will connect to [Amsterdam]
function onRun() {
//Servers that Mining PC1 connects to, [Ports 3333,3334,3335,3336,3337,3338]
var Servers = [Scrypt,Sha256x,ScryptNf,x11,x13,Keccak];
var Scrypt = "stratum+tcp://scrypt.eu.nicehash.com:3333";
//Note that the SHA256 has an x at the end, this is to prevent confusion between the js-sha256 command sha256('');
   var Sha256x = "stratum+tcp://sha256.eu.nicehash.com:3334";
   var ScryptNf = "stratum+tcp://scryptnf.eu.nicehash.com:3335";
   var x11 = "stratum+tcp://x11.eu.nicehash.com:3336";
   var x13 = "stratum+tcp://x13.eu.nicehash.com:3337";
   var Keccak = "stratum+tcp://keccak.eu.nicehash.com:3338";
var Alpha = "1";
var Beta = "2";
var Running = Alpha + Beta;
}
onRun();
//Calling function onRun

//If statement to determine whether MiningPC1 is connected. Script must be run both ways with Mining PC1 Connected to L-Feed PC Via Crossover Cable
if (Running = 3) {
    console.log("TCPBasic OnRun Connected")
    console.log("Connecting"+ Servers)
    console.log("Stratum found server")

}
while (Running = 3 ) {

sha256('INCOMPLETE');

//REST OF CODE IS INCOMPLETE
