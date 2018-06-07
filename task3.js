"use strict";

var t1;
var t2;
var S;


var hcnt;
var mincnt;
var seccnt;
var hstr;
var minstr;
var secstr;

t1 = Number(process.argv[2]);
t2 = Number(process.argv[3]);

S = t1 + t2;

seccnt = S % 60;
mincnt = Math.floor(S / 60) % 60;
hcnt = Math.floor(S / 3600);

switch (hcnt) {
    case 1:
        hstr = "час";
        break;

    case 0:
    case 5:
    case 6:
    case 7:
        hstr = "часов";
        break;

    case 2:
    case 3:
    case 4:
        hstr = "часа";
    default:
        break;
}

if (seccnt > 0) {
    process.stdout.write(hcnt.toString() + ' ' + hstr + ' ' + mincnt.toString() + ' минут ' + seccnt.toString() + ' секунд');
}
else {
    process.stdout.write(hcnt.toString() + ' ' +  hstr + ' ' + mincnt.toString() + ' минут ');
}
