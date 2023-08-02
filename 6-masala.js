// For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin
let a = 1;
let b = 10;
let sum = 1;
for (let i = a; i <= b; i++) {
  sum *= i;
  console.log(sum);
}
