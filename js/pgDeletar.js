import { listarNoticias, excluirNoticia } from './api.js';

const container = document.querySelector('#noticiasContainer');
const mensagem = document.querySelector('#mensagem');

function criarCard(noticia) {
  const card = document.createElement('article');
  card.className = 'box box-card';
  card.innerHTML = `<h3></h3><p></p><button type="button" class="btn-delete">Deletar</button>`;
  card.querySelector('h3').textContent = noticia.titulo;
  card.querySelector('p').textContent = noticia.corpo;
  card.querySelector('button').addEventListener('click', () => deletar(noticia.id));
  return card;
}

async function carregar() {
  try {
    const noticias = await listarNoticias();
    container.replaceChildren();
    if (noticias.length === 0) {
      container.textContent = 'Nenhuma notícia encontrada.';
      return;
    }
    noticias.forEach(noticia => container.append(criarCard(noticia)));
  } catch (erro) {
    mensagem.textContent = 'Erro ao carregar os dados.';
  }
}

async function deletar(id) {
  if (!confirm('Deseja realmente excluir esta notícia?')) return;
  try {
    await excluirNoticia(id);
    mensagem.innerHTML = `Notícia excluída com sucesso! <br>
                          Escolha outra notícia para excluir.`;
    carregar();
  } catch (erro) {
    mensagem.textContent = 'Erro ao excluir notícia.';
  }
}

carregar();
