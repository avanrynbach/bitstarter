#!/usr/bin/env node
console.log("Hello Wordl")
var fs = require('fs');
var msg = fs.readFileSync('./index.html');
var string = msg.toString('utf-8');
console.log(string);
