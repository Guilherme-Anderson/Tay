const linhas = [
  "Feliz 3 meses, amor.",
  "Eu queria fazer algo bem diferente dessa vez, de novo isso não é uma competição",
  "Mas eu sempre gostei de programar e parar pra fazer isso me fez até bem, parei de escrever meu TCC um pouco pra programar algo diferente pra alguém que amo",
  "Esse mês em partiular eu so posso te agradecer, você é uma mulher incrivel que me pergunto sempre se eu te mereço",
  "Obrigado pelo seu apoio em absolutamente tudo, mesmo em momentos que você poderia simplesmente desistir de mim vc me apoia",
  "Até o próximo mês, te amo"
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
