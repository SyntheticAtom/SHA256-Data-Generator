# Sha256-Data-Generator-
A simple JS program using js-sha256 to generate hashes for a statistics feed
Using js-sha256 this .js script is able to in console create hashes and a console feed that is simillar to the feed in BTC mining this is being used for a discord statistic project.
-
-
-
-
-
Requirements:
Node.JS heap must have a good amount of memory dedicated to it in order for the data generator to run for a while.
Must have js-sha256 Installed
NPM Page for instructions https://www.npmjs.com/package/js-sha256
Bower supported
_______________
Disclaimer: Still a work in progress, right now it's all run through CLI but the goal is to have it so it can be pushed through webhooks via Discord
_______________
Troubleshooting:
While incrementing by one to the function sha256.hex to run indefinitely via while loop, you may reccieve the Error:
$  FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
To fix this you must manually allot memory to the application this can be done using this command(8GB for example):
$ node --max-old-space-size=8192 appname.js
