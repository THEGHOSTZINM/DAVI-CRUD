import { criarNoticia } from './api.js';

const form = document.querySelector('#noticiaForm');
const titulo = document.querySelector('#noticiaTitle');
const corpo = document.querySelector('#noticiaBody');
const mensagem = document.querySelector('#mensagem');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    await criarNoticia({ titulo: titulo.value, corpo: corpo.value });
    mensagem.innerHTML = `Notícia criada com sucesso! <br>
                          Preencha o formulário novamente para criar outra notícia.`;
    form.reset();
  } catch (erro) {
    mensagem.textContent = 'Erro ao criar notícia.';
  }
});
