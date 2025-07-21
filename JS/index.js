// Seleciona todos os botões e imagens do carrossel
const botoes = document.querySelectorAll('.carousel-btn .botao');
const imagens = document.querySelectorAll('.carousel .imagem');

// Índice da imagem atual e tempo de troca
let imagemAtual = 0;
const tempo = 4000;

// Função para exibir a imagem e botão correspondente
function mostrarImagem(index) {
  // Remove classes anteriores
  imagens.forEach((img, i) => {
    img.classList.remove('ativa');
    botoes[i].classList.remove('selecionado');
  });

  // Adiciona classes à imagem e botão atuais
  imagens[index].classList.add('ativa');
  botoes[index].classList.add('selecionado');
}

// Função que avança para a próxima imagem
function proximaImagem() {
  imagemAtual = (imagemAtual + 1) % imagens.length;
  mostrarImagem(imagemAtual);
}

// Inicia a troca automática de imagens
setInterval(proximaImagem, tempo);

// Permite clicar nos botões para trocar manualmente
botoes.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    imagemAtual = index;
    mostrarImagem(index);
  });
});
