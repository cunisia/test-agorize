# agorize-store

This is a technical test realized for agorize recruitment process. It consists in the implementation of a small e-commerce SPA with two screens:
- Products: it displays the products list populated from a restAPI. Each product has a name, a description, a picture and a "add to cart" button.
- Cart: it displays the cart's content in a table. Each line represents a product stored in the cart, featuring its picture, name and quantity. Each line has a remove button to remove all occurrences of this product from the cart. Cart content is persisted in the browser's local storage.

Additionnaly, a nav bar is displayed on each of those screens. It features a Products button (to get to the products page) and a Cart button (to get to the cart page). The cart button label also features the total amount of items in the cart.

## Implementation

### Frontend

This project was made using vue.js for the frontend part. The routing is done using vue-router. Because vuex seemed overkill for this project, the state management was realized using the [store pattern](https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch) in state.js. Style code follows BEM guideline.

Appart from that, the app is pretty standard, using two components : one for the products page, one for the cart page.

### Backend

The backend for the RestAPI queried by the products page to populate the products list is implemented in node.js. It is a single enpoint (/api/products) that returns a json array of product objects.

## Tests

### Unit tests

The state management service (state.js) is tested by karma unit tests in state.spec.js.

### e2e tests

The app is globally tested in agorize-store.test.js using nighwatch.js. It executes a complete scenario involving all app's features (adding products to the cart, checking that navbar's cart count is updated, going to cart screen, checking that its content matchs what was added, removing items).

### Going further

Ideally, each component (ProductsList and Cart) should be tested in specific unit tests. Yet, the whole "business" logic is hosted in state.js, which is broadly tested in state.spec.js and all components display are tested in agorize-store.test.js. So for this technical test, I considered that the test coverage is good enough.

## How to run the app

Install [node.js](https://nodejs.org/en/download/).

### Launching the backend

From the application directory:
- `cd back`
- `npm install`
- `npm run start`

The backend should be running on localhost:3000.

### Launching the frontend

From the application directory (`cd ../` if you've just launch the backend):
- `cd front`
- `npm install`
- `npm run start`

The backend should be running on localhost:8080.

## How to run the tests

*Make sure the backend is running*
*Kill the frontend process if it is running*

From the application directory
- `cd front`
- `npm run test`

### Launching only unit tests

From the application directory
- `cd front`
- `npm run unit`

### Launching only e2e tests

*Make sure the backend is running*
*Kill the frontend process if it is running*

From the application directory
- `cd front`
- `npm run e2e`
