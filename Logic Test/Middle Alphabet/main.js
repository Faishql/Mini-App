var min = prompt("Masukkan alfabet pertama!").toUpperCase();
var max = prompt("Masukkan alfabet terakhir!").toUpperCase();

var alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(tengah(min, max));
// console.log(splitedNumber);

function tengah(min, max) {
    let a = alfabet.split("");
    let result = a.slice(a.indexOf(min), a.indexOf(max) + 1);

    var mid = result.length / 2;
    if (result.length % 2 == 1) {
        return result[Math.floor(mid)];
    } else {
        return [result[mid - 1], result[mid]];
    }
}
