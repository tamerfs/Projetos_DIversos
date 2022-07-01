function calculadora(){
    const entrada = prompt(' insira os dados a calcular:\n subtração | - \n soma  | + \n multiplicação | * \n divisão | / \n por exemplo: 20 + 2');

    let[denominador, operador, numeral] = entrada.split(" ")
    let Denominador = parseInt(denominador);
    let Numeral = parseInt(numeral);

    switch (operador){
        case "+" : {
            soma(Denominador,Numeral);break}
        case "-" : {
            subtracao(Denominador,Numeral);break}
        case "*" : {
            multiplicacao(Denominador,Numeral);break}
        case "/" : {
            divisao(Denominador,Numeral);break}
        default:{console.log("insira um operador valido");break}
        }
}

function soma(Denominador,Numeral){
    resultado = Denominador+Numeral;
    alert(`resultado = ${Denominador} + ${Numeral} = ${resultado}`);
}

function divisao(Denominador,Numeral){

    resultado = Denominador/Numeral;
    alert(`resultado = ${Denominador} / ${Numeral} = ${resultado}`);
}

function multiplicacao(Denominador,Numeral){
    resultado = Denominador*Numeral;
    alert(`resultado = ${Denominador} * ${Numeral} = ${resultado}`);
}

function subtracao(Denominador,Numeral){
    resultado = Denominador-Numeral;
    alert(`resultado = ${Denominador} - ${Numeral} = ${resultado}`);
}