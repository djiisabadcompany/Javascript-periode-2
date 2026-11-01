const total = document.getElementById("total");
const first = document.getElementById("first");
const second = document.getElementById("second");

const things = ["racing", "Games", "Movies", "Music", "computers"];
const things2 = ["racing", "Games", "other list", "Music", "computers"];

first.innerHTML = things[0];
second.innerHTML = things[things.length - 1];
total.innerHTML = things.length;

thingsa.innerHTML = things2;