"use strict";

var t1;
var t2;
var S;


var hcnt;
var mincnt;
var seccnt;

t1 = Number(process.argv[2]);
t2 = Number(process.argv[3]);

S = t1 + t2;

seccnt = S % 60;
mincnt = Math.floor(S / 60) % 60;
hcnt = Math.floor(S / 3600);

if (seccnt > 0) {
    process.stdout.write(hcnt.toString() + ' час ' + mincnt.toString() + ' минут ' + seccnt.toString() + ' секунд');
}
else {
    process.stdout.write(hcnt.toString() + ' час ' + mincnt.toString() + ' минут ');
}
