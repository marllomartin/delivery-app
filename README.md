# Project Delivery App

<div align="center">
<img src=https://i.imgur.com/ugaWpIs.png width="200px">
</div>

## Summary
- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Team](#team)
- [Running project](#running-project)
- [API Documentation](#documentação-da-api)

## About
Full stack web application of a beverage ecommerce platform developed in a team during my time studying at [Trybe](https://www.betrybe.com/).

<div align="center">
<img src=https://github.com/marllomartin/delivery-app/blob/main/public/GIF_1.gif width="400px">
</div>

<br>

## Features
In this project, the user is capable of:

  * Register on the platform;

  * Log in, if already registered;
  
    * The user is authenticated when logging in;
    
    * Each user sensible credentials are hashed when read and saved in the database;
  
  * Visualize every product available to purchase;
  
  * Add the desired product to the cart and checkout;
  
  * Follow their purchase status (Pending, In Transit, Delivered);
   
    * Update their purchase status according to their permissions;

  * If the user is an admin, they can register new sellers, visualize and delete existing users;

<br>
<div align="center">
<img src=https://github.com/marllomartin/delivery-app/blob/main/public/GIF_2.gif width="400px">
</div>

## Technologies Used

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
  
## Team

During the development of this project, we had an agile approach using the Kanban method and divided the group into two teams, one for the front-end and the other for the back-end, the [Trello](https://trello.com/) platform was used to organize the tasks as well. In addition, a fixed time was defined for holding daily meetings to discuss the progress of the project.

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

## Running project

#### Attention!
The Back-End of this project has environment variables. Rename the `.env.example` file to `.env` and set its values accordingly to your own settings.

### Cloning repository:
```
git clone git@github.com:marllomartin/delivery-app.git

cd delivery-app

cd app
```
### Installing Front-End dependencies:
```
cd frontend

npm install
```
### Installing Back-End dependencies:
```
cd ..

cd backend

npm install
```
### Creating database with Sequelize:
```
npm run db:reset
```
### Running Back-End:
In the backend directory:
```
npm run dev
```
### Running Front-End:
In the frontend directory:
```
npm start
```

## API Documentation

### User Registering
```http
  POST /register
```

| Name   | Description                                   |
| :---------- | :------------------------------------------ |
| `name`      |  The name of the user to be registered |
| `email`      | The email of the user to be registered |
| `password`      |  The password of the user to be registered |

<details><summary>Body Example</summary>
<br>

body:
```
{
  "name": "Cool User",
  "email": "user@user.com",
  "password": "us3R321"
}
```

</details>

### Login
```http
  POST /login
```

| Name   | Description                                   |
| :---------- | :---------------------------------- |
| `email` |  The email of an already registered user |
| `password` |  The password of an already registered user |

<details><summary>Body Example</summary>
<br>

body:
```
{
  "email": "user@user.com",
  "password": "us3R321"
}
```

</details>

### Products
#### Get every available product
```http
  GET /products
```

#### Get a specific product by id
```http
  GET /products/${id}
```

| Parameter   | Description                                   |
| :---------- | :------------------------------------------ |
| `id`      |  The id of the product to be returned |


### Orders
#### Get every order by a specific user
```http
  GET /orders/user/${id}
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      | The id of the user to have their orders returned |

#### Get every order by a specific seller
```http
  GET /orders/seller/${id}
```

| Parameter   | Description                                   |
| :---------- | :------------------------------------------ |
| `id`      |  The id of the seller to have their orders returned |

#### Get a specific order by id
```http
  GET /orders/${id}
```

| Parameter   | Description                                   |
| :---------- | :------------------------------------------ |
| `id`      |  The id of the order to be returned |

#### Register a new order
```http
  POST /orders
```

| Name   | Description                                   |
| :---------- | :------------------------------------------ |
| `sellerId`      |  The seller id |
| `totalPrice`      |  The total price of the order |
| `deliveryAddress`      | The address which the order will be sent to |
| `deliveryNumber`      | The address number which the order will be sent to |
| `products`      |  An array containing all the purchased products |

<details><summary>Body Example</summary>
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

#### Update an order status
```http
  PATCH /orders/${id}
```

| Parameter   | Description                                   |
| :---------- | :------------------------------------------ |
| `id`      |  The id of the order to have its status updated |

| Name   | Description                                   |
| :---------- | :------------------------------------------ |
| `status`      |  The new order status |

<details><summary>Body Example</summary>
<br>

body:
```
{
  "status": "Entregue"
}
```

</details>

### Admin
#### Register a new user
```http
  POST /admin/register
```

| Name   | Description                                   |
| :---------- | :------------------------------------------ |
| `name`      |  The name of the user to be registered |
| `email`      |  The email of the user to be registered |
| `password`      |  The password of the user to be registered |
| `role`      |  The role of the user to be registered |

<details><summary>Body Example</summary>
<br>

body:
```
{
  "name": "Cool Seller",
  "email": "cool_seller@email.net",
  "password": "ilovesellingstuff123",
  "role": "seller"
}
```

</details>

#### Get every non-admin users
```http
  GET /admin/users
```

#### Delete an user
```http
  DELETE /admin/users/${id}
```

| Parameter   | Description                                   |
| :---------- | :------------------------------------------ |
| `id`      |  The id of the user to be deleted |
