const linhas = [
  "Feliz 3 meses, amor.",
  "Eu queria fazer algo bem diferente dessa vez. De novo, isso não é uma competição!!!",
  "Sempre gostei de programar e parar pra fazer isso me fez até bem, parei de apenas programar pro TCC um pouco e foquei em um projetinho pro meu amor ....",
  "Esse mês em partiular eu so posso te agradecer, você é uma mulher incrivel de verdade. Isso faz eu me questionar se realmente te mereço",
  "Obrigado pelo seu apoio em absolutamente tudo, realmente você tem feito diferença na minha vida em varias áreas",
  "Que venham os próximos 4°, 5° ... mêses e que se tornem uma vida",
  "Com amor e todo carinho, seu namorado: Guilherme Anderson"
];

let index = 0;
const mensagemDiv = document.getElementById('mensagem');
const botao = document.getElementById('botao');

function escreverTextoGradualmente(texto, callback) {
  mensagemDiv.innerHTML = ""; // Limpa qualquer conteúdo anterior
  const p = document.createElement('p');
  mensagemDiv.appendChild(p);

  let i = 0;
  const intervalo = setInterval(() => {
    p.textContent += texto.charAt(i);
    i++;
    if (i >= texto.length) {
      clearInterval(intervalo);
      if (callback) callback();
    }
  }, 40);
}

botao.addEventListener('click', () => {
  if (index < linhas.length) {
    botao.disabled = true;
    escreverTextoGradualmente(linhas[index], () => {
      index++;
      if (index === linhas.length) {
        botao.textContent = "Fim 💌";
        botao.disabled = true;
      } else {
        botao.disabled = false;
      }
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  botao.click();
});
