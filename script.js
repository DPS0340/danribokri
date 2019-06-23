function run() {
    let money = +document.getElementById('original').value;
    let year = +document.getElementById('year').value;
    let ratio = +document.getElementById('ratio').value;
    let result = document.getElementById("result");
    result.innerText = String(money*((1+(ratio/100))**year));
}
function run2() {
    let money = +document.getElementById('original').value;
    let year = +document.getElementById('year').value;
    let ratio = +document.getElementById('ratio').value;
    let result = document.getElementById("result");
    result.innerText = String(money+money*(ratio/100)*year);
}