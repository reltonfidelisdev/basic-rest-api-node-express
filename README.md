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
the server is runnning on http://localhost:3000

# Endpoints

get /games [Get all games]
get /game/id (integer) get game by id

post /games save game
put /game/id (integer) update game by id

delete /game/id (integer) remove game

all datas is returned in json format with equivalent HTTP Status code
