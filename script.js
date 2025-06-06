const linhas = [
  "Feliz 4 meses, amor.",
  "Eu queria fazer algo bem diferente dessa vez. Era pra isso ter sido parte da carta do tercerio mês, mas acabou virando do quarto",
  "Sempre gostei de programar e parar pra fazer isso me fez muito bem,a final parei de apenas programar pensando no TCC um pouco e foquei em um projetinho pro meu amor ....",
  "Passou mais um mes e vivemos muitas coisas, coisas essas que ficarão para nossa historia e so me anima saber que muitas outras virão",
  "Obrigado pelo seu apoio em absolutamente tudo, realmente você tem feito diferença na minha vida em varias áreas",
  "A cada mês que passa eu so me apaixono mais por você e mais tenho certeza de que você é a mulher da minha vida",
  "Que possamos ter mais incontaveis meses juntos e que a nossa relação venha a crescer e amadurecer cada vez mais",
  "Parabens para nós, te amo muito, do seu namorado Guizo.js"
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
