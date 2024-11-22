# #01 - Node

## Fundamentos de Node.js

- Esse projeto e os exercícios foram desenvolvidos com o objetivo de aprendizado sobre os conceitos iniciais sobre API Rest e Node.js, com o uso do módulo http nativo do Node, ferramentas como Insomnia, além de conceitos de rotas, métodos HTTP, parâmetros, middlewares, entre outros.

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
</div>

<div align="center">
        <h2>
          <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
          <a href="#interrobang-funcionalidades">Funcionalidades</a>&nbsp;|&nbsp;
          <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
          <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
          <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
        </h2>
</div>

---

<div align="center" >

**[Vídeo no Youtube](https://www.youtube.com/watch?v=kZ6NV106AOM)**

</div>

---

## :information_source: Sobre

- Esse é o 1º projeto do curso Formação Node.js da Rocketseat.
- A ideia dele é introduzir os conceitos iniciais de Node.js, API Rest, métodos HTTP, Rotas, Middlewares, entre outros.
- Assim, começamos a ver conceitos sobre como podemos manipular dados, receber, enviar e escrever dados no Node que seriam com Streams, e no fim criamos um projeto que simula uma API Rest de forma pura no Node sem o uso de frameworks, usando o módulo http, streams e operações assíncronas.
  
---

## :interrobang: Funcionalidades

  1. Criamos um servidor HTTP com o módulo http do Node;
  2. Criamos um arquivo dedicado para definição de rotas, que chamará os métodos de manipulação do "banco de dados" e retornará as respostas;
  3. Criamos um arquivo dedicado para manipulação do "banco de dados", que é uma classe que simula um banco de dados com um array de objetos;
     1. Além disso, nela criamos, os métodos que modificam os dados, como adicionar, atualizar, deletar e listar;
     2. Essas manipulações são feitas de forma assíncrona, simulamos o banco de dados, em um arquivo json, e assim, persistimos essas mudanças nele.
  4. Criamos funções utilitárias que auxiliam na identificação dos Route e Query Params, em conjunto com regex conseguimos extrair esses dados das rotas para realizar as requisições.
  5. Criamos uma função que funciona como um middleware, onde é executada sobre toda requisição e tem o papel de formatar os dados recebidos de Stream para JSON.

---

## :seedling: Requisitos Mínimos

  1. NodeJS

---

## :rocket: Tecnologias Utilizadas

- O projeto foi desenvolvido utilizando as seguintes tecnologias:

  1. **[node](https://nodejs.org/pt)**

---

## :package: Como baixar e executar o projeto

### Baixar

- Clonar o projeto:

  ```bash
   git clone https://github.com/Aszurar/node-api-fundamentals
  ```

- É necessário ter o Node.js instalado na máquina.
  - [Instalação do NodeJS](https://nodejs.org/en/)

### Execução

- Caso tudo tenha sido instalado com sucesso, basta executar na raiz do projeto:

  ```bash
    node src/server.js
  ```

<div align="center">

Desenvolvido por :star2: Lucas de Lima Martins de Souza.

</div>
