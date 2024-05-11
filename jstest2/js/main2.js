let array = [2, 4, 5, 1, 2];

for (const e of array) {
    console.log(`配列の中身:${e}`);
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`配列の中身${index}番目は${array[index]}`);
}

let x = 23;
let y = 6;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

x = 10;
for (let index = 0; index < 3; index++) {
    x += 5

}
console.log(x);


let rnd = Math.random() * 10 + 1;
if (rnd % 2 == 1) {
    console.log(`変数rndは奇数です`);
} else {
    console.log(`変数rndは偶数です`);
}

let bottom = 4.3;
let height = 5.4;
console.log(`底辺：${bottom}、高さ：${height}の三角形の面積は${bottom * height / 2}です`);

let isMarried = true;

if (isMarried = true) {
    console.log(`結婚しています`);
} else {
    console.log(`結婚していません`);
}


let random = Math.random() * 20 + 1;
let random2 = Math.random() * 20 + 1;
if (random2 > random) {
    console.log(`num2:${random2}、num1:${random}　の差は${random2 - random}です`);

} else {
    console.log(`num1:${random}、num2:${random2}　の差は${random - random2}です`);
}

// while (true) {
//     let random3 = Math.random() * 1000;
//     if (random3 == 777) {
//         console.log(`${random3}は${random3.length}回目にでました。`);
//         break;
//     }
// }

const result = document.getElementById("result");

for (let index = 2; index <= 9; index++) {
    for (let i = 1; i <= 9; i++) {
        if (index * i > 50) {
            break;
        }
        result.innerHTML += index * i + " ";
    }
    result.innerHTML += "<br>";
}

for (let i = 1; i < 21; i++) {
    if (i % 3 == 0) {
        continue;
    }
    result.innerHTML += (i) + " ";
    result.innerHTML += "<br>";
}

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) {

        result.innerHTML += (`★`) + " ";

    }
    result.innerHTML += "<br>";
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= i; j++) {

        result.innerHTML += (`★`) + " ";

    }
    result.innerHTML += "<br>";
}