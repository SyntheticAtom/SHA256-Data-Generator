//Node Requirements
var sha256 = require('js-sha256');

//Function, for getting servers that MiningPC1 will connect to [Amsterdam]
function onRun() {
//Servers that Mining PC1 connects to, [Ports 3333,3334,3335,3336,3337,3338]
var servers = ["Scrypt","SHA256","ScryptNf","X11","X13","Keccak"];
servers[0] = "stratum+tcp://scrypt.eu.nicehash.com:3333";
servers[1] = "stratum+tcp://sha256.eu.nicehash.com:3334";
servers[2] = "stratum+tcp://scryptnnf.eu.nicehash.com:3335";
servers[3] = "stratum+tcp://x11.eu.nicehash.com:3336";
servers[4] = "stratum+tcp://x13.eu.nicehash.com:3337";
servers[5] = "stratum+tcp://keccak.eu.nicehash.com:3338";

//Variables +SHA256 wordlist (WORK IN PROGRESS)
var ShaCycleX =[ 'abandon','ability','able','about','about','above',]+['above','abroad','absence','absent','absolute',]+['abstract','abstract','abuse' ,'abuse','abusive',]+['academic','accept','acceptable',]+['accept']
var Alpha = "1";
var Beta = "2";
var Running = Alpha + Beta;
}
onRun();
//Calling function onRun

//If statement to determine if onRun function is running
if (Running = 3) {
    console.log("Connected")
    console.log("Stratum Server Connecting")
}
while (Running = 3 ) {
  //SHA256 A-Z 
 sha256('rest of code is work in proggress!');
 /*INCOMPLETE
 INCOMPLETE
 */
}
