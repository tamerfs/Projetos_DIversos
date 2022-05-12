function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
  
    var numeroSecreto = parseInt(Math.random() * 11);
  
    var elementoResultado = document.getElementById("resultado");
  
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML =
        "FOII | o numero secreto era " + numeroSecreto;
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML =
        "HEY voce deve escolher entre 0-10 | o numero secreto era " +
        numeroSecreto;
    } else {
      elementoResultado.innerHTML =
        "Nao foi dessa vez | o numero secreto era " + numeroSecreto;
    }
  }
  