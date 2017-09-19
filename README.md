# Mozaik Website

## Set up environment

You will first need to setup your local environment with the following variables:

* NODE_ENV=development
* MONGODB_URI=` set to your own local db `
* SECRET=mozaik
* KEY=` set to random 6 digit string `
* CLOUDINARY_CLOUD_NAME=mozaik
* CLOUDINARY_API_KEY=` cloudinary api key `
* CLOUDINARY_API_SECRET=` cloudinary secret key `

If using Facebook OAuth for users you will also need:

* FBCLIENT=` set to project client id `
* FBSECRET=` set to project secret id `
* FBCALLBACK='http://localhost:7777/users/auth/facebook/callback'

## Run development environment

To start the development environment simply run ` 'npm start' `
