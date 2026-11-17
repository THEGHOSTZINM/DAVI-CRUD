// Comunicação com a API REST do Supabase (somente fetch, sem SDK).
const PUBLISHABLE_KEY = 'sb_publishable_3jVm-e1DMKtfKJ2oIdAQ1A_hSItaK1U';
const API_URL = 'https://euldhsbseuyhdolnnkag.supabase.co/rest/v1/noticia';

const headers = {
  apikey: PUBLISHABLE_KEY,
  'Content-Type': 'application/json'
};

// READ
export async function listarNoticias() {
  const resposta = await fetch(API_URL, { headers });
  if (!resposta.ok) throw new Error(`Erro ${resposta.status}`);
  return resposta.json();
}

// CREATE
export async function criarNoticia(dados) {
  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(dados)
  });
  if (!resposta.ok) throw new Error(`Erro ${resposta.status}`);
}

// UPDATE
export async function alterarNoticia(id, dados) {
  const resposta = await fetch(`${API_URL}?id=eq.${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(dados)
  });
  if (!resposta.ok) throw new Error(`Erro ${resposta.status}`);
}

// DELETE
export async function excluirNoticia(id) {
  const resposta = await fetch(`${API_URL}?id=eq.${id}`, {
    method: 'DELETE',
    headers
  });
  if (!resposta.ok) throw new Error(`Erro ${resposta.status}`);
}
