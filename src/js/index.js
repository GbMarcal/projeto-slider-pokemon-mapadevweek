/*
    1° objetivo: passar para próximo cartão.
        passo 1- identificar as setas no javascript
        passo 2- identificar o clique do usuário
        passo 3- fazer o cartão seguinte aparecer
        passo 4- esconder o cartão selecionado anteriormente
        passo 5- fazer o mesmo processo com a seta voltar para o cartão anterior
*/

const avancar = document.getElementById("avancar");

const voltar = document.getElementById("voltar");

const cartoes = document.querySelectorAll(".card");

let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

avancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

voltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
