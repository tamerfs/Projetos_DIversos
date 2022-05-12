function Converter() {
    var valorElemento = document.getElementById("valor");
    
    var valor = valorElemento.value;

    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumerico * 5;
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    
    var valorConvertido = "sua Conversão de Dolares em Real é: R$ " + valorEmReal;
    
    elementoValorConvertido.innerHTML = valorConvertido;
  }


  // usar o radio button para fazer  onversor.
  // if radio button for bitcon chamar function () especifica dela

