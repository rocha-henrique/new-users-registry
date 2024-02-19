# Boas vindas ao repositório do projeto *New Users Registry*

Aqui você vai encontrar os detalhes de como executar e rodar o projeto em sua maquina e mais alguns detalhes de dependencias e os beneficios que enconttrei para a criação deste projeto Full-Stack!

## Como iniciar o projeto

- Use o comando: `git clone git@github.com:rocha-henrique/new-users-registry.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd New-Users-Registry`

**(back-end)**

- Na pasta front-end instale as dependências utilizando o comando`npm install`. Para executar o projeto criado, utilize o comando `env $(cat .env) npm run dev`.

**(front-end)**
- Na pasta back-end instale as dependências utilizando o comando `npm install`. Para executar o projeto criado, utilize o comando `npm run dev`.

---

<details>
  <summary>
    <strong>Caso queira modificar o projeto :muscle:</strong>
  </summary><br>

1. Clone o repositório

- Use o comando: `git clone git@github.com:rocha-henrique/new-users-registry.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd full-stack-project`
- Crie uma branch especifica onde serão feitas as suas modificaçoes
  - exemplo `git checkout -b sua-branch`.

- Instale as dependências

  - Para isso, use o seguinte comando: `npm install` tanto na pasta `back-end` quanto na `front-end`

3. Faça alterações separadas por novas branchs, criadas a partir da branch `sua-branch`. Lembre-se de criar uma nova branch para cada demanda.

- Verifique se você está na branch `sua-branch`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `sua-branch`
  - Exemplo: `git checkout sua-branch && git pull`
- Agora, crie uma branch para a demanda que você vai desenvolver do seu projeto
  - Você deve criar uma branch com uma breve descrição da demanda a ser desenvolvida
  - Exemplo: `git checkout -b sua-branch-cria-campo-de-input`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique se as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (devem aparecer listadas as novas alterações em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin sua-branch-cria-campo-de-input`

  6. Crie um novo `Pull Request` e me mande, ficarei muito agradecido com o feedback _(PR)_ :smile:
</details>

<details>
  <summary>
    <strong>Dependências utilizadas no front-end</strong>
  </summary><br>

    - Axios
    - Eslint
    - Vite
    - TypeScript
    - React-bootstrap 
    - React-router-dom
</details>

  <details>
  <summary>
    <strong>Dependências utilizadas no back-end</strong>
  </summary><br>

    - sql
    - Cors
    - Express
    - Nodemon
    - sequelize
  </details>

---

## Perguntas teoricas

1. A diferença entre back-end e front-end em uma aplicação web, o back-end é responsável pela lógica e processamento de dados do lado do servidor, enquanto o front-end lida com a interface do usuário e interações do lado do cliente.

2. Os principais componentes de um servidor web incluem o servidor em si (como o Node.js), o sistema de gerenciamento de banco de dados, a lógica de negócios, e a camada de apresentação. Eles se relacionam para processar as requisições do cliente, acessar os dados necessários e fornecer uma resposta.

3. A arquitetura MVC (Model-View-Controller) é importante no desenvolvimento de aplicações web, pois separa a lógica de negócios (Model), a apresentação (View) e o controle de interações (Controller), facilitando a manutenção e a escalabilidade da aplicação.

4. As linguagens de programação comumente usadas, no back-end temos Node.js, Python, Java, Ruby, entre outras, devido à sua capacidade de lidar com operações de servidor e banco de dados. No front-end, temos JavaScript, HTML, CSS, e frameworks como React, Angular, Vue, devido à sua capacidade de criar interfaces de usuário interativas.

5. Os principais desafios ao desenvolver aplicações web full-stack, temos a sincronização entre front-end e back-end, segurança, escalabilidade, e manutenção do código.

# Por que utilizei React + TypeScript + Vite 

Inicialmente, o JavaScript foi criado para que os navegadores da época conseguissem realizar tarefas simples. No entanto, com o passar do tempo, essa linguagem se tornou cada vez mais popular e, consequentemente, foi sendo otimizada, o que a transformou em uma ferramenta mais completa, utilizada para criar programas mais complexos.

Em razão dessas aplicações mais complexas, alguns problemas começaram a aparecer. Entre os erros mais comuns, estão os de tipagem. Um exemplo clássico de erro de tipo é achar que uma variável é um number quando, na verdade, é uma string. Nesse caso, ao tentar fazer uma soma, o JavaScript concatena os valores, o que poderia levar a uma série de comportamentos indesejados:

```
const a = '1'
const b = 2

function sum(x, y) {
  return x + y
}

console.log(sum(a, b))
// retorna "12" (string) ao invés de 3 (number)
```

Com TypeScript, o código acima causaria um erro, pois, afinal, a função sum deve receber números ou strings? Para evitar esse erro, você precisa definir o tipo do argumento que será recebido. Nesse caso, os parâmetros x e y são numbers e, portanto, se passar uma string (ou qualquer outro tipo) para a função, o TS indicará um erro.

A principal diferença entre utilizar arquivos JavaScript (.js) ou TypeScript (.ts) é que, em .ts, todas as variáveis e constantes apresentam tipos definidos.

Caso o código tenha algum erro nos tipos, o TypeScript não permitirá a ele que seja executado. Caso não encontre nenhum erro, o código será transpilado para JavaScript, ou seja, todo o código escrito será transformado em outro, somente com sintaxe JavaScript, e esse código transformado será executado.


# Criação do banco de dados

**(Models)**
  - O arquivo `index.js` dentro da pasta `models` possui um papel muito importante: estabelecer uma instância de conexão entre os arquivos presentes na pasta model e o `banco de dados relacional utilizado`.

  - Os `models` são a essência do `Sequelize`. Um model é uma abstração que representa uma linha na tabela em seu `banco de dados` e passa várias informações ao `Sequelize` sobre essa entidade, como o nome e quais atributos (colunas) ela possui (e seus tipos de dados).

**(Migrations)**
  - Uma `migration` é uma forma de versionar o schema do `banco de dados`. Ou seja, cada `migration` conterá um pedaço de código que representa o histórico das alterações feitas no nosso `banco de dados`.

  - Imagine o seguinte: você escreve um código definindo como um `banco de dados` deve ser criado e esse código fica salvo em um arquivo na pasta `migrations`. Após um tempo, uma atualização é feita e uma coluna é acrescentada em uma tabela. O que você faz?

  - Você vai escrever o código em outro arquivo para acrescentar essa coluna, certo? Pense que, cada arquivo será marcado com uma estampa datetime, então ao longo do tempo esse código vai empilhando dezenas, às vezes centenas, de arquivos. Cada um desses arquivos marca uma versão do `banco de dados` e o seu histórico de mudanças e evoluções.

  - Quem clona um projeto pela primeira vez, roda suas `migrations` para configurar o `banco de dados` no formato mais recente enviado para a main (ou branch principal), sem ter que fazer mais nada. Aí sim é possível trabalhar localmente no `banco de dados` da aplicação sem medo de ele ser diferente da versão mais nova que encontramos na main.

  - Usando `migrations`, o mapeador objeto-relacional sabe exatamente quais alterações executar no `banco de dados`, tanto para criar algo novo quanto para restaurar o banco para uma versão mais antiga. Além disso, uma `migration` tem dois códigos conhecidos como `Up` e `Down`. Ou seja: toda `migration`, além de saber o que fazer para executar as mudanças no `banco de dados (Up)`, também deve saber como reverter essas mudanças `(Down)`. Isso significa que as `migrations` têm o poder de avançar ou reverter o seu `banco de dados` para qualquer um dos estados que ele já teve.

  - Observando dentro das funções `up` e `down`. Repare que ambas as funções recebem dois parâmetros: um é o `queryInterface`, e o outro é o `Sequelize`. Ambos os parâmetros são objetos que armazenam dados e operações. O queryInterface é usado pela biblioteca para modificar o banco de dados, seguindo o “dialeto” do banco que estamos utilizando. O objeto `Sequelize` armazena os tipos de dados disponíveis no contexto do banco, por exemplo `varchar`, `string`, `integer`, `date` etc.


```
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      cellPhoneNumber: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  } 
};
```

`id`: Identificador do item.

É uma chave primária;
Valor não pode ser nulo;
Possui incremento automático;
É do tipo `Integer`.
`fullName`: Nome completo da pessoa usuária da aplicação.

É do tipo `String`.
`email`: E-mail da pessoa usuária da aplicação.

É do tipo `String`.
`createdAt`: Data da criação do item.

`allowNull`: Define se o campo pode ou não receber um valor null;

`autoIncrement`: Define se o campo vai ter incremento automático;

`primaryKey`: Define se o campo é uma chave primária;

`type`: Define o tipo do campo, por exemplo `STRING`, `INTEGER`, `DATE`, etc.

**(Seeders)**
  - As bibliotecas de mapeamento objeto-relacional permitem que controlemos informações que devem ser criadas assim que nosso `banco de dados`/tabelas forem criados. Ou seja, podemos configurar nosso banco para ser automaticamente criado e povoado!

  - Isso é especialmente útil quando, num contexto de testes automatizados, precisamos criar um banco e povoar com dados para testá-los!


# express e nodemon

Usar o `Sequelize`, `Express` e `Nodemon` é uma abordagem muito comum e eficaz para lidar com o ` banco de dados` , a criação de `APIs` e o desenvolvimento em tempo real. O `Sequelize` é um `ORM` *(Object-Relational Mapping)* para `Node.js` que facilita a interação com o banco de dados, enquanto o Express é um framework web popular para `Node.js` que simplifica a criação de `APIs RESTful`. O `Nodemon` é uma ferramenta que reinicia automaticamente o servidor `Node.js` sempre que detecta alterações no código.

Com o `Sequelize`, eu pude definir modelos, criar migrações e realizar operações no banco de dados de forma mais simplificada, enquanto o `Express` permite que eu crasse rotas e controle as requisições `HTTP` de forma  mais organizada.

# Sequelizerc

  - `path`: é um módulo interno do Node que nos fornece alguns utilitários para trabalharmos com caminhos de arquivos e diretórios;

  - `config`: é um caminho para o arquivo de configuração;

  - `models-path`: é um caminho para o diretório de models;

  - `seeders-path`: é um caminho para o diretório de seeders;

  - `migrations-path`: é um caminho para o diretório de migrations.

---

### Agradecimento Especial
Gostaria de agradecer ao [Bruno mancini] por fornecer a oportunidade de trabalhar neste projeto desafiador.Os requisitos foram fundamentais para o meu crescimento profissional. Agradeço pela confiança e pela oportunidade de construir este projeto.
