// versão do codigo para rodar no vs code com node puro
/*
const Prompt = require("prompt-sync")();
const erroLetras  = new Error ('numero nao bateu com quantidade de letras')
const erroTipoObj   = new Error ('voce nao inseriu uma palavra')
const erroTipoNum  = new Error (' voce não inseriu um numero')

function verifyArray (){
    try {
// entrada de dados em uma variavel e um numero
    inputData = Prompt("insira uma palavra e o numero de letras que ela tem: "); 

//tratando os inputs por espaço e armazenar em duas outras variaveis
    let [inputWord, inputNumber] = inputData.split(" ");
       
// valipar se for typeof = 'number'       
    let numeros = parseInt(inputNumber);
    if ( isNaN(numeros) ){ throw erroTipoNum;}

// validar se for tipo typeof = 'object'
//    let palavra = inputWord.toLowerCase();
    if (typeof palavra !== 'string'){ throw erroTipoObj;}
    console.log("separado são: "+palavra+" e "+ numeros);

 // validação se word.leight for diferente dos numeros pop o  rangeError
    if ( palavra.length !== numeros){
        throw erroLetras;
    }else{ 
        console.log("o teste passou");
    }    
    } catch (error) {
        throw error;
    }
}
*/