// // 1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın.

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log("Cəmi: " + sum);

// // -------------------------

// let say = 1;
// for (let i = 1; i <= 10; i++) {
// say *= i;
// }
// console.log("Hasil: " + say);

// // 1-dən100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }


// let cem = 0;

// // -------------------------

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     cem += i;
//   }
// }
// console.log("Cüt ədədlərin cəmi: " + cem);

// // -------------------------

// let hasil = 1;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     hasil *= i;
//   }
// }
// console.log("Cüt ədədlərin hasil: " + hasil);


// // 3 rəqəmli ədədlərin ədədi ortasını tapın

// let eded = 0;
// let count = 0;

// for (let i = 100; i <= 999; i++) {
//   eded += i;
//   count++;
// }

// let average = eded / count;
// console.log("3 rəqəmli ədədlərin ədədi ortası: " + average);


// // 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın

// for (let i = 100; i <= 999; i++) {
//     if (i % 7 === 0 && i % 8 === 0) {
//       console.log(i);
//     }
//   }

// //   3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın

// let sayı = 0;

// for (let i = 100; i <= 999; i++) {
//     if (i % 7 === 0 && i % 8 === 0 ) {
//      sayı += i;

//     }
//   }
//   console.log(" 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmi " + sayı);

// //   3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ve son ədədi tapın

// let firstNumber;

// for (let i = 100; i <= 999; i++) {
//   if (i % 7 === 0 && i % 8 === 0) {
//     firstNumber = i;
//     break; 
//   }
// }

// console.log("7 və 8-ə bölünən ilk 3 rəqəmli ədəd: " + firstNumber);

// let lastNumber;

// for (let i = 999; i >= 100; i--) {
//   if (i % 7 === 0 && i % 8 === 0) {
//     lastNumber = i;
//     break;
//   }
// }

// console.log("7 və 8-ə bölünən son 3 rəqəmli ədəd: " + lastNumber);


// // Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın

// let a = 10;
// let b = 5;
// let c = 8;

// let min = a;
// let max = a;

// if (b < min) {
//   min = b;
// }
// if (c < min) {
//   min = c;
// }

// if (b > max) {
//   max = b;
// }
// if (c > max) {
//   max = c;
// }

// console.log("Ən kiçik ədəd: " + min);
// console.log("Ən böyük ədəd: " + max);


// // İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)


// let number = prompt("Zəhmət olmasa bir ədəd daxil edin:");

// if (number % 2 == 0) {
//   console.log(number + " cütdür.");
// } else {
//   console.log(number + " təkdir.");
// }



// // İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini tələb edirik
// let number1 = prompt("Birinci rəqəmi daxil edin:");
// let number2 = prompt("İkinci rəqəmi daxil edin:");
// let operator = prompt("Riyazi əməli daxil edin (+, -, *, /):");


// let result;

// switch (operator) {
//   case "+":
//     result = number1 * 1 + number2 * 1;
//     break;
//   case "-":
//     result = number1 * 1 - number2 * 1;
//     break;
//   case "*":
//     result = number1 * 1 * number2 * 1;
//     break;
//   case "/":
//     result = number1 * 1 / number2 * 1;
//     break;
//   default:
//     console.log("Yanlış riyazi əməl ");
// }


// console.log("Nəticə: " + result);


// // Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.

// let num = prompt("Bir ədəd daxil edin:");


// for (let i = 100; i <= 999; i++) {
  
 
// if (i % num == 0) {
    
   
// console.log(i + " daxil edilən ədədə bölünür.");
//   }
// }

// 12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)

let sayılar = 12;

// Bütün kombinasiyaları tapmaq üçün dövr
for (let i = 1; i <= sayılar / 2; i++) {
  let j = sayılar - i;
  console.log(i + " + " + j + " = " + sayılar);
}


  
// İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, =&gt; x=6, y=5)

let x = 5;
let y = 6;

let temp = x;
x = y;
y = temp;

console.log("x = " + x);
console.log("y = " + y);

// Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın.


let deyisen = 8; 


if (deyisen % 1 === 0) {
  console.log(deyisen + " tam ədəddir.");
} else {
  console.log(deyisen + " tam ədəd deyil.");
}


// number dəyişənində iki rəqəmli ədəd saxlanılır. Bu ədədin- beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın);- 3-ə bölünmədən qalan qalığını (tapın);


let numberrr = 23; 

let Power = numberrr ** 5;
console.log(numberrr + " ədədinin beşinci dərəcə qüvvəti: " + Power);


let qalıq = numberrr % 3;
console.log(numberrr + " ədədinin 3-ə bölündükdə qalan qalığı: " + qalıq);

