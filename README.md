<p align="center" > 
    <a href="" target="_blank"> <img height="169px"src="https://media.discordapp.net/attachments/818827898345095168/923270000549183549/0J1eaw97k-oedLnp-.png"/> </a>
<p/>



<h1 align="center">Exercise Tracker REST API</h1>
<h3 align="center">Simple rest api to set goal or track your exercise using express js and mongodb</h3>

## __Getting started:__
You can use postman to test this api.
Run command : `nodemon server.js` or `node server.js`

## __Requirements:__ 
Express js , cors , body-parser , cors , mongoose

##  __GET Requests:__
+ localhost:5000/users/ : gets all the users and their emails.
+ localhost:5000/users/<id> : gets user info from specific id.
+ localhost:5000/users/<name> : gets specific user.
+ localhost:5000/exercises/ : gets all the exercise with respect to users.
+ localhost:5000/exercises/<id> : gets exercise of specific id
+ localhost:5000/exercises/<name> : gets exercise of specific user.

## __POST Requests:__
+ localhost:5000/users/add : adds users to the database.
+ localhost:5000/users/update/: updates user info.
+ localhost:5000/exercises/add : add exercise w.r.t users.
+ localhost:5000/exercises/update/: updates user exercise.

## __DELETE Requests:__
+ localhost:5000/users/<id> : deletes users from the database.
+ localhost:5000/users/<name> : deletes users from the database with name ref.
+ localhost:5000/exercises/<id> : deletes exercise from the database.
+ localhost:5000/exercises/<name> : deletes exercise from the database with name ref.



<a href=https://github.com/blurryface92><img src="https://img.shields.io/badge/-Follow%20me-blue" alt="github.com/blurryface92">
