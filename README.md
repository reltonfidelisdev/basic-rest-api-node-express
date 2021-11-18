# basic-rest-api-node-express
A sample json api with nodejs and express for  backend development study.
..
# Usage
Run the folowing commands to install the systemns dependecy and start the project
```shell
$ npm install
```
Next, you can start the express
```shell
npm start
```
the server is runnning on http://localhost:3000/games

# Endpoints
[Get all games]
get /games 

[Get game by id]
get /game/id (integer) 

[Save game]
post /games 

[Update game by id]
put /game/id (integer) 

[Remove game]
delete /game/id (integer) 

# All data is returned in json format with the http status code equivalent to the response type. 
