# AuraTech

AuraTech Electronics

Descrição
--------

AuraTech é um pequeno projeto de front-end que demonstra uma interface visual "Liquid Glass" inspirada na tecnologia apresentada pela Apple, combinada com ícones Font Awesome para navegação e elementos de interface. O objetivo é oferecer um layout moderno e elegante, fácil de adaptar para sites de produtos ou portfólios.

Recursos Principais
-------------------

- Visual Liquid Glass (efeitos de desfoque, transparência e brilho) aplicados via CSS.
- Navegação e ícones usando Font Awesome.
- Estrutura estática simples: HTML, CSS e JavaScript sem dependências de build.
- Exemplo de layout e conteúdo em `example/`.

Pré-visualização rápida
----------------------

Você pode abrir `index.html` diretamente no navegador, ou servir o projeto localmente usando um servidor HTTP simples. Por exemplo:

```bash
# Servir na porta 8000 (Python 3)
python3 -m http.server 8000

# Depois abra http://localhost:8000 no navegador
```

Estrutura do repositório
------------------------

- `index.html` — página principal com o visual Liquid Glass.
- `styles.css` — estilos principais e efeitos visuais.
- `scripts.js` — scripts de interação (se houver).
- `images/` — imagens e ativos do projeto.
- `example/` — conteúdo de exemplo e demos (inclui `page.html` e `liquid_glass.txt`).
- `README.md` — este arquivo.

Design e inspiração
--------------------

O visual Liquid Glass deste projeto foi inspirado por:
https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass

Os efeitos centrais usam camadas semitransparentes, sombras suaves, bordas arredondadas e filtros CSS (`backdrop-filter`) para criar a sensação de vidro líquido. Teste em navegadores modernos (Chrome, Edge, Safari) — o `backdrop-filter` pode não estar disponível em navegadores mais antigos.

Fontes e ícones
---------------

Este projeto integra ícones Font Awesome para facilitar a prototipagem de interfaces. Se preferir, troque por outro conjunto de ícones ou por SVGs inline para controlar o carregamento.

Como contribuir
---------------

Contribuições são bem-vindas. Sugestões típicas:

- Melhorar acessibilidade e semântica do HTML.
- Otimizar estilos e tornar os componentes reutilizáveis.
- Substituir ícones por SVGs otimizados.

Fluxo sugerido para contribuições locais:

```bash
# Fork -> clone -> criar branch
git checkout -b feat/melhorias-readme
# Fazer alterações
git add .
git commit -m "Atualiza README e melhorias visuais"
git push origin feat/melhorias-readme
# Abrir PR no GitHub
```

Licença
-------

Este projeto pode ser licenciado conforme sua preferência. Um bom ponto de partida é a licença MIT. Atualize esta seção com a licença escolhida.

Autor
-----

Criado por erikraft — mantenha os créditos e personalize conforme desejar.

Próximos passos sugeridos
-------------------------

- Verificar compatibilidade cross-browser para `backdrop-filter`.
- Adicionar um pequeno script de build (opcional) para minificação e empacotamento.
- Criar um arquivo `LICENSE` com a licença escolhida.

Contato
-------

Se precisar de ajuda, abra uma issue ou entre em contato pelo repositório no GitHub.

