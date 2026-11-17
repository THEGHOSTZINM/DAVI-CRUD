import { listarNoticias, alterarNoticia } from './api.js';

const form = document.querySelector('#noticiaForm');
const idInput = document.querySelector('#noticiaId');
const titulo = document.querySelector('#noticiaTitle');
const corpo = document.querySelector('#noticiaBody');
const container = document.querySelector('#noticiasContainer');
const mensagem = document.querySelector('#mensagem');

function criarCard(noticia) {
  const card = document.createElement('article');
  card.className = 'box box-card';
  card.innerHTML = `<h3></h3><p></p><button type="button" class="btn-edit">Editar</button>`;
  card.querySelector('h3').textContent = noticia.titulo;
  card.querySelector('p').textContent = noticia.corpo;
  card.querySelector('button').addEventListener('click', () => prepararEdit(noticia));
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

// Preenche o formulário com os dados da notícia selecionada
function prepararEdit(noticia) {
  form.hidden = false;
  container.hidden = true;
  mensagem.textContent = 'Informe os dados que serão alterados';
  idInput.value = noticia.id;
  titulo.value = noticia.titulo;
  corpo.value = noticia.corpo;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    await alterarNoticia(idInput.value, { titulo: titulo.value, corpo: corpo.value });
    form.hidden = true;
    container.hidden = false;
    mensagem.innerHTML = `Notícia alterada com sucesso!<br>
                          Escolha outra notícia para editar.`;
    carregar();
  } catch (erro) {
    mensagem.textContent = 'Erro ao alterar notícia.';
  }
});

carregar();
