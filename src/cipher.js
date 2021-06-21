
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

  // A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

  // (códigoDaletra + desloc) % tamDoAlfabeto
  // (CodigoDaLetra + 7) % 26

  // ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra

  // exemplo (70 - 65 + 7) % 26 + 65

  //                 -65         +desloc     %tam    +65
  // codigoASC => codigo0a25 => desloco => giro => codigoASC

};

export default cipher;
