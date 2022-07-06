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

const alunos = [
    {
        nome:'Alan',
        nota: 9,
        turma:'11B'
    },{
        nome:'Joao',
        nota: 3,
        turma: '7C'
    },{
        nome:'Pedro',
        nota: 7,
        turma: '5A'
    }
];

function alunosAprovados(arr){
    //entrada dados
    let input = document.getElementById("entrada").value
    let media = document.getElementById("media").value
    //tratando dados
    var tratado = input.split(" ");

    // criado objeto para inserir dados tratados
    var objAlunos = 
        {
        nome:"",
        nota:"",
        turma:""
        }
    // trocando propriedades de um objeto pelos dados da array tratada
    let i=0

    for (prop in objAlunos){

    objAlunos[prop] = objAlunos[prop].replace("",tratado[i]);
;
    console.log(objAlunos[prop])
        i++      
    }   
    arr.push(objAlunos)
    console.log(arr)
    // logica para separar os alunos da nota de corte
    let aprovados =[];   
    for(let i=0; i < arr.length;i++){
        const  {nome,nota} = arr[i];
        if (nota >= media){
            aprovados.push(nome);
        }
    }
    let volta = document.getElementById("volta")
    volta.innerHTML = `os alunos que passaram foram ${aprovados}`
}

