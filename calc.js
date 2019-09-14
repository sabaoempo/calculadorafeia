// JavaScript source code

function soma(num1, num2) {
    var result = num1 + num2;
    return result;
}

function multiplicacao(num1, num2) {
    var result = num1 * num2;
    return result;
}

function divisao(num1, num2) {
    var result = num1 / num2;
    return result;
}

function subtracao(num1, num2) {
    var result = num1 - num2;
    return result;
}

function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerHTML = "0.00";

    operator = document.getElementById("operador").selectedIndex=0;
}



function processCalc() {

    if (document.getElementById("num1").value == "" || document.getElementById("num2").value == "")
    {
        alert("Por favor, preencha os dois valores antes de realizar o cálculo.");
        return;
    }

    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    
    var result = 0.00;
    var validade = 1;

    var operator = document.getElementById("operador");
    var valor = operator.options[operator.selectedIndex].value;

    switch (valor) {
        case "+":
            result = soma(num1, num2);
            break;
        case "*":
            result = multiplicacao(num1, num2);
            break;
        case "-":
            result = subtracao(num1, num2);
            break;
        case "/":

            if (document.getElementById("num2").value == "0")
            {
                validade = 0;
            }
            else
            {
                result = divisao(num1, num2);
            }
            break;
    }

    if (validade == 0)
    {
        alert("O divisor não pode ser zero");
        return;
    }

    var element = document.getElementById("resultado");
    element.innerHTML = result.toString();

    return false;
}