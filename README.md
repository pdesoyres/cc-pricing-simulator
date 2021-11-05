# Pricing simulator 

This project tries to implement a pricing simulator as shown in this video: https://www.youtube.com/watch?v=P-E0gJHZG7k

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application is deployed on Clever Cloud: https://cc-pricing-simulator.cleverapps.io

## Available Scripts

You can run:

### `npm start:dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`

Runs the app in production mode.

## Clever Cloud compliant

This app can be deployed with a Static [Clever Cloud](https://www.clever-cloud.com/) application.\
You'll need to add the following environment variables to let Clever Cloud build the application properly:
```
CC_PRE_BUILD_HOOK="npm install && npm run build"
CC_WEBROOT="/build"
```
