const fruit = document.getElementById("fruit");
const price = document.getElementById("price");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.onclick = addFruit;
price.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        addFruit();
    }
});

let fruitsList = [];

// ボタンに追加する関数
function addFruit() {
    // 入力欄の値を取得
    let fruitName = fruit.value;
    let fruitPrice = parseInt(price.value);

    // 入力欄を空にする
    fruit.value = "";
    price.value = "";

    // オブジェクトを作成
    let obj = {
        name: fruitName,
        price: fruitPrice
    };

    // 配列に追加、並び替え
    fruitsList.push(obj);
    sortPriceDesc();

    // ol要素をクリアする
    list.innerHTML = "";

    // 配列の中身をol要素に追加して表示
    for (const f of fruitsList) {
        createLi(f);
    }

    fruit.focus();
}

function createLi(obj) {
    // li要素作成
    let li = document.createElement("li");
    li.innerHTML = `${obj.name}：${obj.price}円`;
    list.append(li);

    if (obj.price >= 1000) {
        li.classList.add("red");
    }
}

// 値段の高い順に並び替え
function sortPriceDesc() {
    for (let i = 0; i < fruitsList.length - 1; i++) {
        for (let j = i + 1; j < fruitsList.length; j++) {
            // 入れ替え処理
            if (fruitsList[i].price < fruitsList[j].price) {
                let temp = fruitsList[j];
                fruitsList[j] = fruitsList[i];
                fruitsList[i] = temp;
            }
        }
    }
}