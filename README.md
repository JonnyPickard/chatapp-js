Chatapp
=======

The front end for a web chat app. Made with JS, NodeJS, ExpressJS, AngularJS and tested with protractor.

Screenshots
-----------

<img src="https://github.com/JonnyPickard/chatapp-js/blob/master/screen-shot-mobile.png">

<img src="https://github.com/JonnyPickard/chatapp-js/blob/master/screen-shot-desktop.png">

To install
----------

- Clone this repository.
- Run `$ npm install` - to install dependencies.
- Run `$ npm start` - to start the app on `http://localhost:3000`.  

To test
-------

- First make sure the node server is running on `http://localhost:3000`.
- Then run `$ webdriver-manager start` to run selenium webdriver for protractor to use.  

note: you may need to run `$ webdriver-manager update` to update to the latest version.
- Then finally with both servers running run `$ npm test` to run the testing suite.

Still to do
-----------

1. Persist the chats with mongodb.
2. Add user authentication with mongodb.
3. Add user avatars.
4. Add password protected private chats
