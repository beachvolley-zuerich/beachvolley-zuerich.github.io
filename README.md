# Beachvolley Zurich 

## Development

Clone the repository, run `npm install` to make sure you have all necessary modules to operate the site. 
Run `npm run dev` to start a local development server. 

## Deployment to Production 

###  Appwrite Requirement

Make sure appwrite is up and running and your secrets are in place. 


### Starting the Server

The idea is to run Node/Express via Docker Compose. 
This repository contains a simple `docker-compose.yml` file that uses a light weight alpine node image as well 
as a `run-server.mjs` scripts and the corresponding `package.json` entries. 
To run the production version, run  

1. `npm run build` to build the site to the dist/ folder
2. docker-compose up -d --remove-orphans to pull the node images if necessary and start the process. 

This will expose the website at `localhost:1234`. 

