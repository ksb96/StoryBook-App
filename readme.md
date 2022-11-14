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
URL - https://storybook-app.up.railway.app/

# Screenshots

<h2> Desktop view</h2>

![image](https://user-images.githubusercontent.com/52975077/201636798-93f657ad-7ce1-405a-879e-f056145021ab.png)

![image](https://user-images.githubusercontent.com/52975077/201636928-268f7a23-7a64-49c5-98a0-b5c109de5cc4.png)

<h3>add a story</h3>

![image](https://user-images.githubusercontent.com/52975077/201637142-aefb5661-a0b1-43a4-aebe-1aea86f98fc3.png)

<h2> Mobile view</h2>

![image](https://user-images.githubusercontent.com/52975077/201637703-ad8c678c-435b-4e72-b491-f859a3c07381.png)

![image](https://user-images.githubusercontent.com/52975077/201637374-3057420c-d3ae-496d-b08e-779516038418.png)

<h3>add a story</h3>

![image](https://user-images.githubusercontent.com/52975077/201637500-3e41a48d-f08a-4a83-8c38-2ad7e2d6ba7d.png)