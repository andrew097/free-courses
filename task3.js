"use strict";

function wordDecline(num, expressions) {
    let result;
    let count = num % 100;
    if (count >= 5 && count <= 20) {
        result = expressions['2'];
    } else {
        count = count % 10;
        if (count == 1) {
            result = expressions['0'];
        } else if (count >= 2 && count <= 4) {
            result = expressions['1'];
        } else {
            result = expressions['2'];
        }
    }
    return result;
}

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

hstr = wordDecline(hcnt, ["час", "часа", "часов"]);
minstr = wordDecline(mincnt, ["минута", "минуты", "минут"]);
secstr = wordDecline(seccnt, ["секунда", "секунды", "секунд"]);

if (seccnt > 0) {
    process.stdout.write(hcnt.toString() + ' ' + hstr + ' ' + mincnt.toString() + ' ' + minstr + ' ' + seccnt.toString() + ' ' + secstr);
}
else {
    process.stdout.write(hcnt.toString() + ' ' +  hstr + ' ' + mincnt.toString() + ' ' + minstr);
}
