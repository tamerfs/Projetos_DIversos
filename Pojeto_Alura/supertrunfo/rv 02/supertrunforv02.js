// cartas do baralho
var cartaPaulo = {
    nome: "Shiryu de dragão",
    imagem: "https://ssperfil.files.wordpress.com/2010/11/pb021-shiryu.jpg",
    atributos: { ataque: 6, defesa: 9, magia: 10 }
  };
  var cartaRafa = {
    nome: "bulbasauro",
    imagem: "https://i.pinimg.com/originals/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg",
    atributos: { ataque: 7, defesa: 8, magia: 6 }
  };
  var cartaGui = {
    nome: "Darth Vader",
    imagem:
      "https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus-1024x576.jpg",
    atributos: { ataque: 9, defesa: 8, magia: 2 }
  };
  // juntando o deck numa unica variavel para o sorteio e separando uma para a maquina e uma para o jogador //
  var cartas = [cartaPaulo, cartaRafa, cartaGui];
  var cartaMaquina;
  var cartaJogador;
  
  // primeiro comando = atrelando botão sortear e habilitando botão jogar || sortenado um numero para escolher a carta || chama a função exibirCartaJogador() //
  function sortearCarta() {
    // sorteia um numero e escolhe esse numero no index da array
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    // sorteia um numero, compara se o do jogador não é igual escolhe esse numero no index da array
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 3);}
    cartaJogador = cartas[numeroCartaJogador];
  //console.log(cartas[numeroCartaJogador]);
    // desabilita o sorteio e habilita o jogar//
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
}
  
  // busca o atributo com o Botão tipo Radio e retorna o valor disponibilizando na propria função.
  function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) 
    {if (radioAtributos[i].checked == true)
      {return radioAtributos[i].value;}}
}
  
  // busca o resultado da funcão obtemAtributoSelecionado() e coloca numa var atributoSelecionado || Compara as cartas com base no atributo selecionado e insere o resultado no HTML //
    function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = "<p class='resultado-final'>Seu oponete possui " + cartaMaquina.atributos[atributoSelecionado] + " |  Voce Venceu!";} 
    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = "<p class='resultado-final'>Seu oponete possui " + cartaMaquina.atributos[atributoSelecionado] + " |  Voce Perdeu!";} 
    else { 
      htmlResultado = "<p class='resultado-final'>Seu oponete possui " + cartaMaquina.atributos[atributoSelecionado] + " |  Deu Empate!";}  
divResultado.innerHTML = htmlResultado; 
document.getElementById('btnJogar').disabled = true;
document.getElementById('btnRefresh').disabled = false;   
  exibirCartaMaquina() 
}
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
    
  var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";}
  
  var nome = `<p class= "carta-subtitle">${cartaJogador.nome}</p>`;
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage= "url(" + cartaMaquina.imagem + ")";
    
  var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo +"'>" + atributo +" " + cartaMaquina.atributos[atributo] + "</p>";}
  
  var nome = `<p class= "carta-subtitle">${cartaMaquina.nome}</p>`;
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }

  function relogar(){
  var recarregarPagina = document.getElementById("btnRefresh");    
      location.reload();
}
// outra forma de usar o botão recarregar | usar um document.querySelector e buscar o #refresh ID
 //     var btn = document.querySelector("#refresh");
 //     btn.addEventListener("click", function() {       
 //         location.reload();
 //     });
