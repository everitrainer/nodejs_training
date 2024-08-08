import express from 'express';
import { games } from './database/data.js';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json())
let counter = games.length;
app
    .get('/', (req, res) => {
        console.log("GET is called");
        res.status(200).json(games).send();
    })
    .get('/:id', (req, res) => {
        console.log("GET by id is called");
        const { id } = req.params;
        const game = games.find(game => game.id === parseInt(id))
        if (game) {
            res.status(200).send(game)
        } else {
            res.status(404).send({ "error": "Game with this id doesnt exist" })
        }
    })
    .post('/', (req, res) => {
        console.log("Post is called");
        const { name } = req.body;
        const newGame = { name, id: ++counter }
        games.push(newGame)
        res.status(201).send(newGame)
    })
    .put('/:id', (req, res) => {
        console.log(req.params)
        const { id } = req.params;
        console.log("Put is called");
        const { name } = req.body;
        const gameIndex = games.findIndex((game) => game.id === parseInt(id))
        if (gameIndex != -1) {
            games[gameIndex].name = name;
            res.status(200).send(games[gameIndex])
        } else {
            res.status(404).send({ "error": "Game with this id doesnt exist" })
        }
    })
    .patch('/', (req, res) => {
        console.log("Patch is called");
        res.send("Patch called")
    })
    .delete('/', (req, res) => {
        console.log("Delete is called");
        res.send("Delete called")
    })

app.listen(4000, () => console.log(`Server started at http://localhost:4000`))