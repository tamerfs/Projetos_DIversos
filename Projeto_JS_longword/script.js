const errorInput  = new Error("Não foi inserido nenhuma palavra")

function reversoString(){
  try {
            
    var arrayIda = prompt("Insira uma palavra para validar se ela é palindrome");  
    
    if (!arrayIda){ alert("ERRO! veja o console"); throw errorInput }

    var arrayVolta =  arrayIda.split("").reverse().join("");

    (arrayIda === arrayVolta) ? alert("A palavra inserida é palindrome"):alert("a palavra inserida não é palindrome");

  } catch (error) {
    throw error
  }
}

function LongestWord() { 
  try {
      
    let sen = prompt("Insira uma frase ou varias palavras");

    // dividir os dados de entrada
    if (!sen){
      alert("Erro! Veja o console");
      throw errorInput}
  // dividi a entrada em array
    var inputText =  sen.split(" ");
  // inicializa a array que vai receber os dados depois de tratados
    var newString = [''];
  // trocando caracteres
    for (let i=0 ; i < inputText.length ; i++){
      newString[i] = inputText[i].replace(/[^a-zA-Zs]/g, "")
    }  
    //comparar os dados com uma função ou um sort() 
    newString.sort(function comparadorInput(a,b){
      if (a.length < b.length){
        return -1
      }else if (a.length > b.length){
        return 1
      }
        else return 0
      }).reverse(); 

    // logica para se duas palavras tiverem a mesma .length escolher a primiera inserida
    var [um,dois,tres,quatro,cinco] = newString
    
    var end = (function(){ 
      
      if(cinco !== undefined && um.length == cinco.length){
            return  cinco
      }else if (quatro !== undefined && um.length == quatro.length){
            return quatro
      }else if(tres !== undefined && um.length == tres.length){
            return tres
      }else if(dois !== undefined && um.length == dois.length){
            return dois
      } else {
          return um;
      } 
    })()

    alert(end) 

  } catch (error) {
    throw error;
  }
}


function LongestWordOld() { 
  // codigo onde crio a logica a ser chamada na execução
  let textInput = prompt("Insira uma frase ou varias palavras");
  // split string 
  let  myArray = textInput.split(" ");
  console.log(myArray);

 var resultComp =  myArray.sort(function verificaArray(a,b){
    if (a.length < b.length){
      console.log(`${a} < ${b}`)
      return -1
    } else if(a.length > b.length){
      console.log(`${a} > ${b}`)
      return 1
    } else {return 0}

    })
  resultComp.reverse();
  let primeiro = resultComp[0];
  let segundo = resultComp[1];
  (primeiro.length == segundo.length)? alert(`a maior palavra é ${segundo}, que foi primeiro inserida no API a outra é ${primeiro}`): alert(`a maior palavra é ${primeiro}`);
}


