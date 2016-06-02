function Tradutor(){}

  var dicionario = {hello:'ola', world:'mundo', car:'carro'}

Tradutor.prototype.traduzir = function(frase){
  var palavras =  frase.split(' ');
  var fraseTraduzida = '';
  for (var i in palavras) {
    if (dicionario.hasOwnProperty(palavras[i])) {
       fraseTraduzida += dicionario[palavras[i]] + ' ';
    }else{
      fraseTraduzida += palavras[i] + ' ';
    }
  }

  return fraseTraduzida.trim();
}


module.exports  = Tradutor
