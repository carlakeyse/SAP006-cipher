
const cipher = {

  encode: function (deslocamento, texto) {

    const deslocamentoVazio = !deslocamento
    const deslocamentoLetra = typeof deslocamento !== "number"
    if (deslocamentoVazio || deslocamentoLetra) {
      throw new TypeError
    }

    let msgCripto = "";

    for (let i = 0; i < texto.length; i++) {

      let cripto = texto.charCodeAt(i);

      if (cripto >= 65 && cripto <= 90) {
        cripto = ((cripto - 65 + deslocamento) % 26) + 65

      } else if (cripto >= 97 && cripto <= 122) {
        cripto = ((cripto - 97 + deslocamento) % 26) + 97
      }

      msgCripto += String.fromCharCode(cripto)

    }

    return msgCripto;
  },

  decode: function (deslocamento, texto) {

    const deslocamentoVazio = !deslocamento
    const deslocamentoLetra = typeof deslocamento !== "number"
    if (deslocamentoVazio || deslocamentoLetra) {
      throw new TypeError
    }

    let msgDecripto = "";

    for (let i = 0; i < texto.length; i++) {

      let decripto = texto.charCodeAt(i);

      if (decripto >= 65 && decripto <= 90) {
        decripto = ((decripto - 90 - deslocamento) % 26) + 90

      } else if (decripto >= 97 && decripto <= 122) {
        decripto = ((decripto - 122 - deslocamento) % 26) + 122

      }

      msgDecripto += String.fromCharCode(decripto)

    }
    return msgDecripto;
  }

};

export default cipher;
