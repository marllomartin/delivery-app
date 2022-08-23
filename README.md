# Project Delivery App

<div align="center">
<img src=https://i.imgur.com/ugaWpIs.png width="200px">
</div>

## Sobre
Aplicação full stack de uma plataforma de delivery de bebidas desenvolvida em grupo durante meus estudos na [Trybe](https://www.betrybe.com/). 

No desenvolvimento do projeto, utilizamos uma abordagem ágil e nos dividimos em duas equipes, uma para o front-end e outra para o back-end além de utilizamos a plataforma do [Trello](https://trello.com/) para organizarmos nossas tarefas. Também foi definido um horário para a realização de reuniões diárias a fim de discutir sobre o andamento do projeto.

<br>
<div align="center">
<img src=https://i.imgur.com/xbxSKwv.png>
</div>

## Funcionalidades
Neste projeto, o usuário é capaz de:

  * Cadastro de novos usuários;

  * Fazer o login na aplicação;
  
    * É feita a autenticação local do usuário ao logar na aplicação;
    
    * As credenciais sensíveis de cada usuário são criptografadas em [MD5](https://www.npmjs.com/package/md5) ao serem lidas e salvas no banco;

  * Visualizar todas as bebidas disponíveis;
  
  * Adicionar as bebidas desejadas no carrinho e finalizar uma compra;
  
  * Acompanhar o progresso da compra (Pendente, Em Trânsito, Entregue);
   
    * Atualizar o status do progresso da compra de acordo com as permissões do usuário;

  * Caso o usuário seja um administrador, cadastras novos usuários vendedores, visualizar e excluir usuários existentes;

## Tecnologias Utilizadas

### Front-End
* [React](https://reactjs.org/)
  * [React Hook Form](https://react-hook-form.com/)
  * [React Icons](https://react-icons.github.io/react-icons/)
  * [react-use-cart](https://www.npmjs.com/package/react-use-cart)

### Back-End
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [JWT](https://jwt.io/introduction)
* [MD5 Hash](https://www.npmjs.com/package/md5)
* [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/pt-br/)
  * [HTTP-Status-Codes](https://www.npmjs.com/package/http-status-codes)
  
## Equipe

<table align="center">
 <tr>
  <th align="center" colspan="2">Front-End</th>
  <th align="center" colspan="3">Back-End</th>
 </tr>
 <tr>
  <td align="center" width="180">
   <a href="https://github.com/MiguelNS101">
   <img align="center" alt="Miguel Santana" height="100" width="100" src="https://avatars.githubusercontent.com/u/20672916?v=4"/>
   <br>Miguel Santana
   </a>
  </td> 
  <td align="center" width="180"> 
   <a href="https://github.com/yangwom">
   <img align="center" alt="Yang Vieira" height="100" width="100" src="https://avatars.githubusercontent.com/u/90363090?v=4"/>
   <br>Yang Vieira
   </a>
  </td>
  <td align="center" width="180">   
   <a href="https://github.com/marllomartin">
   <img align="center" alt="Marllon Martins" height="100" width="100" src="https://avatars.githubusercontent.com/u/89039470?v=4"/>
   <br>Marllon Martins
   </a>
  </td>
  <td align="center" width="180">   
   <a href="https://github.com/giovannaeliz">
   <img align="center" alt="Giovanna Eliz" height="100" width="100" src="https://avatars.githubusercontent.com/u/78395214?v=4"/>
   <br>Giovanna Eliz
   </a>
  </td>
  <td align="center" width="180">   
   <a href="https://github.com/RonnyMV">
   <img align="center" alt="Ronny Velárdez" height="100" width="100" src="https://avatars.githubusercontent.com/u/88902323?v=4"/>
   <br>Ronny Velárdez
   </a>
  </td>
 </tr>
</table>

## Rodando o projeto localmente

### Atenção!
Esse projeto utiliza variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e altere os valores de acordo com suas próprias configurações.

### Clonando o projeto:
```
git clone git@github.com:marllomartin/delivery-app.git

cd delivery-app

cd app
```
### Instalando as dependências do Front-End:
```
cd frontend

npm install
```
### Instalando as dependências do Back-End:
```
cd ..

cd backend

npm install
```
### Inicializando o Banco de Dados com Sequelize:
```
npm run db:reset
```
### Inicializando o Back-End do projeto:
Na pasta backend:
```
npm run dev
```
### Inicializando o Front-End do projeto:
Na pasta frontend:
```
npm start
```
