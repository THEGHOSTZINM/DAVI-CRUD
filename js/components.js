class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="box box-header">
        <a href="index.html">
          <img src="img/logo.png" alt="Logo do Clarim Diário" class="logo">
        </a>
        <h1>Clarim Diário</h1>
        <button type="button" id="menu-btn">☰</button>
      </header>
    `;

    this.querySelector('#menu-btn').addEventListener('click', () => {
      document.querySelector('.box-nav').classList.toggle('ativo');
    });
  }
}
customElements.define('my-header', MyHeader);

class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="box box-nav">
        <a href="index.html" class="box box-nav-item">Início</a>
        <a href="consultar.html" class="box box-nav-item">Consultar</a>
        <a href="criar.html" class="box box-nav-item">Criar</a>
        <a href="alterar.html" class="box box-nav-item">Alterar</a>
        <a href="deletar.html" class="box box-nav-item">Deletar</a>
      </nav>
    `;
  }
}
customElements.define('my-nav', MyNav);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="box box-footer">
        <p>&copy; 2026 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    `;
  }
}
customElements.define('my-footer', MyFooter);
