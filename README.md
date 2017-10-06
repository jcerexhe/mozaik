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

Clone the project locally
`$ git clone git@github.com:switch-maven/mozaik.git`

Install NPM dependencies
`$ npm install`

Run MongoDB locally with 
`$ mongod`

Add local seed data
`$ node seeds/seed.js`

## Run development environment

Run MongoDB locally with 
`$ mongod`

To start the development environment run 
`$ npm run dev`
