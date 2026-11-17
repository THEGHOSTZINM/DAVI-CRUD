import { listarNoticias } from './api.js';

const container = document.querySelector('#noticiasContainer');
const mensagem = document.querySelector('#mensagem');

function criarCard(noticia) {
  const card = document.createElement('article');
  card.className = 'box box-card';
  card.innerHTML = `<h3></h3><p></p>`;
  card.querySelector('h3').textContent = noticia.titulo;
  card.querySelector('p').textContent = noticia.corpo;
  return card;
}

async function carregar() {
  try {
    const noticias = await listarNoticias();
    if (noticias.length === 0) {
      container.textContent = 'Nenhuma notícia encontrada.';
      return;
    }
    noticias.forEach(noticia => container.append(criarCard(noticia)));
  } catch (erro) {
    mensagem.textContent = 'Erro ao carregar os dados.';
  }
}

carregar();
