# Desafio react-js

Decidi me reinventar e criar uma aplicação, com ajuda do desafio [devMozao](https://github.com/devMozao) criei um aplicativo que faz busca de usuários no git hub. Confira:


## Técnologias

- React JS : Framework muito utilizada em aplicações web, foi a definida pelo desafio.

- React Router DOM : Biblioteca utilizada nas rotas da aplicação.

- CSS : Linguagem para estilização, preferi não utilizar uma lib por ser um projeto simples e a maior liberdade.

- Axios : Biblioteca para facilitar a integração com a api, utilizei por ser simples e facilitar a comunicação.


## Estrutura

- PUBLIC
Arquivos públicos, o index.html que possui a definição padrão, além do icone e outros arquivos de configuração

- SRC
Todos os arquivos do código fonte, componentes, páginas e imagens.

- ASSETS
Arquivos de imagens, logos, icones.

- COMPONENTS
Componentes da aplicação que serão usados nas páginas para a renderização e facilitação na identificação no código.

- PAGES
Páginas da aplicação (home e profile).

- SERVICES
Arquivos de serviços, como o arquivo de configuração do Axios. 

- index.js
Arquivo de ínicio, acompanhado do global.css, com estilos globais.

Além disso todos os componentes e páginas são acompanhados de um arquivo de styles.css que define os estilos do determinado componente ou página.

## Design

O Design da aplicação foi desenvolvido no figma e está disponível por meio [deste link](https://www.figma.com/file/LBCPyFyLVhNKgaDxtIY65C/Desafio-React-js?node-id=0%3A1).

## Utilização

Obs: Para instalar as dependencias e utilizar o app você precisa do node versão 14 e npm versão 6. É recomendado o node v14.15.4 e npm v6.14.10.

### Instalando dependências

Para instalar as dependências do projeto que incluem o react, axios, react-router-dom e outras, basta digitar o seguinte comando na pasta app desse repositório:
`npm i`

### Iniciando o aplicativo

Após instalar as dependências você pode iniar o aplicativo com o seguinte comando:
`npm start`

Isso iniciará o app em modo desenvolvedor, no [http://localhost:3000](http://localhost:3000) ou em uma outra porta caso esta já esteja sendo usada.

### Deploy

Para colocar o app para produção basta executar o seguinte comando na pasta app, após instalar as depêndencias:
`npm run build`

Veja mais sobre no link: [deployment](https://facebook.github.io/create-react-app/docs/deployment).