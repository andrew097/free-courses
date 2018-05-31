"use strict";

function ArrayRotateRight(arr)
{
    var newArr;

    newArr = arr;
    newArr.unshift(newArr.pop());
    return newArr.join("");
}

function ArrayRotateLeft(arr)
{
    var newArr;

    newArr = arr;
    newArr.push(newArr.shift());
    return newArr.join("");
}

var a;
var b;
var atestl;
var atestr;
var scntl;

a = process.argv[2];
b = process.argv[3];

scntl = 0;

if (a.length == b.length)
{
    atestl = a;
    atestr = a;
    while (atestl != b && atestr != b && scntl <= a.length)
    {
        atestl = ArrayRotateLeft(atestl.split(""));
        atestr = ArrayRotateRight(atestr.split(""));
        
        scntl++;
    }
}
else
{
    scntl = -1;
}

if (scntl >= a.length)
{
    scntl = -1;
}


process.stdout.write(scntl < a.length ? scntl.toString(): "-1");
