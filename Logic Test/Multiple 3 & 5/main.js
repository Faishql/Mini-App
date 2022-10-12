var angka = parseInt(prompt("Masukkan Angka!", "0"));

multiple(angka);

function multiple(a) {
    var arr = [];
    var sum = 0;

    for (let m = 1; m <= a; m++) {
        if (m % 3 == 0 || (m % 5 == 0 && m < a)) {
            arr.push(m);
            console.log(m);
            sum += m;
        }
    }

    return console.log(sum);
}
