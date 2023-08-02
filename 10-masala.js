let n = 10;
let S = 1;

for (let i = 11; i <= n * 10; i++) {
  let x = i / 10;
  S *= x;
}
console.log(S);
