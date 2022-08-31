function calcSum() {
    let num1 = document.getElementsByName("n1")[0].value;
    let number2 = document.getElementsByName("n2")[0].value;
    let sum = Number(num1) + Number(number2);
    document.getElementsByName("somado")[0].value = sum;
}