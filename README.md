## React-Chat-App

This is a splitscreen chat interface with real time chat functionality that uses the Chatkit API and database for user and post storage. The purpose of the splitscreen UI is to test out functionality in a single browser tab.

#### Tech Stack

React, Node, Express, Chatkit

#### To Run The App Locally

If you would like to run the app locally you will need to `npm install` separately in the `client` and `server` directories. You will also need to change the endpoints in `App.js` and `ChatScreen.js` in the `client` to match the `localhost:5000` server.

#### Chatkit

In addition, you will need to sign up with Chatkit (https://pusher.com/chatkit) and create your own credentials, including an `Instance Locator` and `Secret Key`, which will be required in `server.js`.

Lastly, you will need to create a new room under your Chatkit account and include the `Room ID` as well as your `Instance Locator` in `ChatScreen.js`.

#### App Features

- Choose your own username
- Online status for each user
- Who is typing indicator
- Timestamp on user posts
- Clickable URL links
- Auto scroll to current message

#### Additions To Come & More

This app can easily be converted to single screen UI by deleting the second instance of `<App />` in `client/index.js`. In the future, I plan to make the app more user friendly by adding features such as:

- Login system
- Login with Github, Facebook, etc.
- Edit and delete posts functionality
- Update username
- Include a profile photo
- Include image, gif, video and other attachments
- Emoji integration
- Direct Messaging
- Create new channels
- Post code snippets
