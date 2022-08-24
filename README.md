# Project Delivery App

<div align="center">
<img src=https://i.imgur.com/ugaWpIs.png width="200px">
</div>

## Sumário
- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Equipe](#equipe)
- [Rodando o projeto](#rodando-o-projeto-localmente)
- [Documentação da API](#documentação-da-api)

## Sobre
Aplicação full stack de uma plataforma de delivery de bebidas desenvolvida em grupo durante meus estudos na [Trybe](https://www.betrybe.com/).

<div align="center">
<img src=https://github.com/marllomartin/delivery-app/blob/main/public/GIF_1.gif width="400px">
</div>

<br>

## Funcionalidades
Neste projeto, o usuário é capaz de:

  * Se cadastrar na plataforma;

  * Fazer o login na aplicação, caso já esteja cadastrado;
  
    * É feita a autenticação local do usuário ao logar na aplicação;
    
    * As credenciais sensíveis de cada usuário são criptografadas em [MD5](https://www.npmjs.com/package/md5) ao serem lidas e salvas no banco;

  * Visualizar todas as bebidas disponíveis;
  
  * Adicionar as bebidas desejadas no carrinho e finalizar uma compra;
  
  * Acompanhar o status da compra (Pendente, Em Trânsito, Entregue);
   
    * Atualizar o status da compra de acordo com as permissões do usuário;

  * Caso o usuário seja um administrador, cadastrar novos usuários vendedores, visualizar e excluir usuários existentes;

<br>
<div align="center">
<img src=https://github.com/marllomartin/delivery-app/blob/main/public/GIF_2.gif width="400px">
</div>

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

No desenvolvimento do projeto, tivemos uma abordagem ágil e realizamos a divisão do grupo em duas equipes, uma para o front-end e outra para o back-end, a plataforma do [Trello](https://trello.com/) também foi utilizada a fim de organizar as tarefas. Além disso, foi definido um horário fixo para a realização de reuniões diárias a fim de discutir sobre o andamento do projeto.

<br>

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

<br>

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

## Documentação da API

### Cadastro
```http
  POST /register
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `name`      |  O nome do usuário a ser registrado |
| `email`      |  O email do usuário a ser registrado |
| `password`      |  A senha do usuário a ser registrado |

<details><summary>Exemplo</summary>
<br>

body:
```
{
  "name": "Usuário Legal",
  "email": "user@user.com",
  "password": "us3R321"
}
```

</details>

### Login
```http
  POST /login
```

| Parâmetro   | Descrição                                   |
| :---------- | :---------------------------------- |
| `email` |  O email do usuário registrado |
| `password` |  A senha do usuário registrado |

<details><summary>Exemplo</summary>
<br>

body:
```
{
  "email": "user@user.com",
  "password": "us3R321"
}
```

</details>

### Produtos
#### Retornar todos os produtos disponíveis
```http
  GET /products
```

#### Retornar um produto de id específico
```http
  GET /products/${id}
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      |  O id do produto a ser retornado|


### Pedidos
#### Retornar todos os pedidos de um cliente específico
```http
  GET /orders/user/${id}
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      |  O id do cliente a ter os pedidos retornados|

#### Retornar todos os pedidos de um vendedor específico
```http
  GET /orders/${id}
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      |  O id do vendedor a ter os pedidos retornados|

#### Retornar um pedido de id específico
```http
  GET /orders/user/${id}
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      |  O id do pedido a ser retornado|

#### Registrar um novo pedido
```http
  POST /orders
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `sellerId`      |  O id do vendedor |
| `totalPrice`      |  O valor total da compra|
| `deliveryAddress`      |  O endereço a ser enviado|
| `deliveryNumber`      |  O número do endereço a ser enviado|
| `products`      |  Um array com os produtos comprados |

<details><summary>Exemplo</summary>
<br>

body:
```
{
  "sellerId": 3,
  "totalPrice": "20.50",
  "deliveryAddress": "Rua Teste",
  "deliveryNumber": "20",
  "products": [
    {
      "id": 2,
      "itemTotal": 7.5,
      "name": "Heineken 600ml",
      "price": "7.50",
      "quantity": 1,
      "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
    }
  ]
}
```

</details>

#### Atualizar o status de pedido
```http
  PATCH /orders/${id}
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      |  O id do pedido a ter seu status atualizado |
| `status`      |  O novo status do pedido |

<details><summary>Exemplo</summary>
<br>

body:
```
{
  "status": "Entregue"
}
```

</details>

### Administrador
#### Cadastrar um novo usuário
```http
  POST /admin/register
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `name`      |  O nome do usuário a ser registrado |
| `email`      |  O email do usuário a ser registrado |
| `password`      |  A senha do usuário a ser registrado |
| `role`      |  A função do usuário a ser registrado |

<details><summary>Exemplo</summary>
<br>

body:
```
{
  "name": "Vendedor Bacana",
  "email": "vendedor_bacana@email.net",
  "password": "amovender123",
  "role": "seller"
}
```

</details>

#### Retornar todos os usuários não-administradores
```http
  GET /admin/users
```

#### Excluir o cadastro de um usuário
```http
  DELETE /admin/users/${id}
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      |  O id do usuário a ser excluído |
