"use strict";

var t1;
var t2;
var S;

t1 = Number(process.argv[2]) >= 1 ? Number(process.argv[2]) : 1;
t2 = Number(process.argv[3]) <= 10000 ? Number(process.argv[3]) : 10000;

S = t1 + t2;

process.stdout.write(S.toString());
