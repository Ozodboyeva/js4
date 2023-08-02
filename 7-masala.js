// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.
let a = 1;
let b = 10;
let sum = 0;
for (let i = a; i <= b; i++) {
  sum += i ** 2;
  console.log(sum);
}
