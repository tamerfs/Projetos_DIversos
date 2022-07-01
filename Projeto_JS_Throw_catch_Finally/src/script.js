function verifyArray(){
    let retornoALteravel
    try {
        // entrada de dados em uma variavel e um numero antes era com var prompt()
        var inputData =  document.getElementById("in").value;
        
        //tratando os inputs por espaço e armazenar em duas outras variaveis
        let [inputWord, inputNumber] = inputData.split(" ");
            
        // valipar se for typeof = 'number'       
        let numeros = parseInt(inputNumber);
        if ( isNaN(numeros) ){
            retornoALteravel = "erro! veja mais sobre no console";
            throw erroTipoNum; 
        }

        // validar se for tipo typeof = 'object'  
        let palavra = inputWord.toLowerCase();
        if (typeof palavra !== 'string'){ 
            retornoALteravel = "erro! veja mais sobre no console";
            throw erroTipoObj;
        }
            
        // validação se word.leight for diferente dos numeros pop o  rangeError
        if ( palavra.length !== numeros){
            retornoALteravel = "erro! veja mais sobre no console";
            throw erroLetras; 
        }else{ 
        retornoALteravel = `o teste passou ${palavra} tem ${numeros} de letras`// alert(`o teste passou ${palavra} tem ${numeros} de letras`);   
        }    
    } catch (error) {
        throw error;
    }finally{
        var returnHTML = document.getElementById("tabelaJogadores");
        returnHTML.innerHTML = retornoALteravel
    }

}

const erroLetras  = new Error ('numero nao bateu com quantidade de letras');
const erroTipoObj   = new Error ('voce nao inseriu uma palavra');
const erroTipoNum  = new Error (' voce não inseriu um numero');
