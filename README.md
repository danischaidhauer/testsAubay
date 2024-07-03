# Technical Exercise for Klx/ CACIB

This project aims to run automated tests on the Swag Labs website.

## Settings

- Install node: npm install node
- Install cypress: npm install cypress
- Install the xpath package: npm install -D cypress-xpath
- Install the mochawesome package (to generate reports): npm install --save-dev mochawesome

## How to Run the Tests

- To run the tests, you must type in the terminal for the first time: npx cypress run
- The rest, you can run as follows: npm run cypress-open 

## Tests Executed

- Perform a valid login;
- Add item to shopping cart;
- Carry out the checkout process.

## Test Reports

To run the reports, you must type in the terminal:
- npx cypress run --reporter mochawesome

## Authors

- Danielle Schaidhauer