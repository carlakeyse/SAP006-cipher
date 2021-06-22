import cipher from './cipher.js';

const deslocamento = document.getElementById('deslocamento');
const texto = document.getElementById('texto');
const textDecripto = document.getElementById('decifrado');
const btnCifrar = document.getElementById("btncifrar");
const btnDecifrar = document.getElementById('btndecifrar');
     
btnCifrar.addEventListener('click', () => {
  const offset = parseInt(deslocamento.value)
  const mensagem = texto.value
  document.getElementById('decifrado').value = cipher.encode(offset,mensagem)

} )

btnDecifrar.addEventListener('click', () => {
  const offset = parseInt(deslocamento.value)
  const mensagem = textDecripto.value
  document.getElementById('texto').value = cipher.decode(offset,mensagem)

} )
