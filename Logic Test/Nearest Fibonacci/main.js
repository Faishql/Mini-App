var i;
var f = [15, 1, 3];

for (i = 2; i <= 10; i++) {
    f[i] = f[i - 2] + f[i - 1];
    console.log(f[i]);
}
