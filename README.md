## Expense Manager - Guia de Instalação e Uso

Bem-vindo ao Expense Manager, um aplicativo simples para realizar operações CRUD em despesas. Siga as instruções abaixo para configurar e testar o projeto.
Pré-requisitos

    Certifique-se de ter o Node.js e o npm instalados em sua máquina.
    Tenha um servidor MySQL disponível.

## Passos de Instalação

    Clone o Repositório:

    bash

cd gerenciador-de-despesas

Instale as Dependências:

## Installation

```bash
$ npm install
```

Configure o Banco de Dados:

    Execute um servidor MySQL.
    Crie um banco de dados chamado expense_manager.

Execute as Migrações do Prisma:

```bash

    npx prisma generate --schema=src/infra/prisma/schema.prisma
    npx prisma migrate dev --name init
```

## Começando o Aplicativo

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Registro e Autenticação do Usuário

    Cadastre um Usuário:
        Utilize o endpoint POST /users/register com o seguinte JSON no corpo da requisição:

        json

        {
          "email": "seuemailaqui",
          "password": "suasenhaaqui"
        }

    Faça Login:
        Utilize o endpoint POST /users/login com o mesmo JSON utilizado para o cadastro.

    Obtenha o Token:
        Após o login bem-sucedido, copie o token Bearer gerado, pois será necessário para as operações CRUD.

## Operações CRUD de Despesas

    Listar Todas as Despesas:
        Endpoint: GET /expenses/

    Buscar Despesa Específica:
        Endpoint: GET /expenses/:id (substitua :id pelo ID da despesa desejada)
           Editar Despesa Específica:
        Endpoint: PATCH /expenses/:id (substitua :id pelo ID da despesa desejada)
           Deletar Despesa Específica:
        Endpoint: DELETE /expenses/:id (substitua :id pelo ID da despesa desejada)

    Criar uma Despesa:
        Endpoint: POST /expenses/create com o seguinte JSON no corpo da requisição:

        json

        {
          "desciption": "Descrição da Despesa",
          "value": 50.00,
          "date": "2024-01-28"
        }

## Observação:

    Certifique-se de incluir o token Bearer nas requisições para operações CRUD. O token expira em uma hora.

Agora você está pronto para explorar e testar o Expense Manager! Se tiver algum problema, verifique as configurações do banco de dados e certifique-se de seguir todos os passos corretamente.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
