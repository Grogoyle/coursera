#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var n = new Array();
var maxn = 10000;
var currp = 2;
var out = "2";
for (found = 1; found < 100; found++) {
    for (i = currp; i < maxn; i += currp) {
        n[i] = false;
    }
    while (n[currp] == false) currp++;
    out = out + "," + currp;
}
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
