const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const statusCode = require("statuscode")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60.85
        },
        {
            id: 65,
            title: "Sea of thieves",
            year: 2018,
            price: 40.25
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20.25
        },
        {
            id: 12,
            title: "Super Mario Bros",
            year: 2020,
            price: 85.10
        }
    ]
}

app.get('/games', (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
})

app.get('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400); // requisição inválida
    }else{
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if (game != undefined){
            res.statusCode = 200;
            res.json(game);
        }else{
            res.sendStatus(404);
        }
        res.send("isso é um numero")
    }
})


app.post('/game', (req, res) => {
    var {title, price, year} = req.body;

    DB.games.push({
        id: 1234,
        title,
        year,
        price
    })

    res.sendStatus(201);
});

// Deletendo um game
app.delete('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400); // requisição inválida
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);
        
        if ( index == -1 ) {
            res.sendStatus(404)
        }else{
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

// Atualize um game
app.put('/game/:id', (req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
    
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);

        if( game != undefined ) {

        var { title, price, year } = req.body;
        
        if( title != undefined ){
            if (game.title != String ){
                res.sendStatus(400)
            } 
            game.title = title;
        }

        if( price != undefined ){
            if (game.price != Number ){
                res.sendStatus(400)
            } 
            game.price = price;
        }

        if( year != undefined ){
            if (game.year != Number ){
                res.sendStatus(400)
            } 
            game.year = year;
        }

        res.sendStatus(200);

        }else{
            res.sendStatus(404)
        }
    }
})

app.listen(3000, (err) => {
    if(err) {
        console.error(err);
    }else{
        console.log("Servidor rodando na porta 3000")
    }
})