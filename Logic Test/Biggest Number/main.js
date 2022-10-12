var angka = prompt("Masukkan angka dengan 3 digit!");

urutkan(angka);
// console.log(splitedNumber);

function urutkan(a) {
    let pecahkan = [];
    for (let i = 0; i < a.length; i++) {
        pecahkan.push(a.charAt(i));
    }

    if (a.length > 3 || a < 0 || a.length < 3) {
        return console.log(null);
    }

    return console.log(
        pecahkan.sort(function (a, b) {
            return b - a;
        })
    );
}
