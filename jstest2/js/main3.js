const btn = document.getElementById("btn");
const test = document.getElementById("test");
const x = document.getElementById("x");
const y = document.getElementById("y");



btn.onclick = add;

function add() {
    test.innerText = parseInt(x.value) + parseInt(y.value)
}
