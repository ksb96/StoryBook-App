# StoryBook_Social 
Short Stories Social app with Google OAuth

# Story Books 
Create public and private stories from your life

# Tech Stack - 
1) Node.js - Backend 
2) Express - Backend 
3) Database - MongoDB with Google OAuth for authentication 

** NOTE - For the frontend, EJS.handlebars are used.

Need to remember Add your mongoDB URI and Google OAuth credentials to the config.env file.

# For Local - 
Install dependencies --> npm install

Run in development --> npm run dev

Run in production --> npm start

# For Deploy - 
STEP - 1 -> In "package.json file", remove the "start" & "dev" content and update with the new script -

"scripts": { 
"start": "node app.js" 
}, 

&

STEP - 2 -> In "config.env file", update the "GOOGLE_CLIENT_ID" variable value with the "Client ID" value (console.cloud.google.com/apis/credentials/oauthclient/)

# To access the app - 
URL - https://storybooksocial-app.herokuapp.com/