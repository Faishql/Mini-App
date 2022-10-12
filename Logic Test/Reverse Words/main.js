var kalimat = prompt("Masukkan kalimat!");

balik(kalimat);
// console.log(splitedNumber);

function balik(k) {
    let pecahkan = k.split(" ");

    for (let i = 0; i < pecahkan.length; i++) {
        console.log(pecahkan[i].split("").reverse().join(""));
    }
}
