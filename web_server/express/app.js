import express from 'express';
import { games } from './database/data.js';
import bodyParser from 'body-parser';
import { getCachedGame, client } from './caching/index.js'
const app = express();
app.use(bodyParser.json())
let counter = games.length;
app
    .get('/', (req, res) => {
        console.log("GET is called");
        res.status(200).json(games).send();
    })
    .get('/:id', async (req, res) => {
        console.log("GET by id is called");
        const { id } = req.params;
        const cachedGame = await getCachedGame(id);
        if (cachedGame) {
            console.log("Present in Cache")
            res.status(200).send(cachedGame)
        } else {
            console.log("Not present in Cache")
            let game = games.find(game => game.id === parseInt(id));
            if (game) {
                client.set(id, game, 60 * 60, (error, result) => {
                    if (error) {
                        console.error('Error setting cache:', error);
                    } else {
                        res.status(200).send(game)
                    }
                });
            } else {
                res.status(404).send({ "error": "Game with this id doesnt exist" })
            }
        }
    })
    .post('/', (req, res) => {
        console.log("Post is called");
        const { name } = req.body;
        let newGame = { name, id: ++counter };
        games.push(newGame)
        res.status(201).send(newGame)
    })
    .put('/:id', (req, res) => {
        const { id } = req.params;
        console.log("Put is called");
        const { name } = req.body;
        const gameIndex = games.findIndex((game) => game.id === parseInt(id))
        if (gameIndex != -1) {
            games[gameIndex].name = name;
            res.status(200).send(games[gameIndex])
        } else {
            let newGame = { name, id: ++counter };
            games.push(newGame)
            res.status(201).send(newGame)
        }
    })
    .patch('/:id', (req, res) => {
        console.log("Patch is called");
        const { id } = req.params;
        const { name } = req.body;
        const gameIndex = games.findIndex((game) => game.id === parseInt(id))
        if (gameIndex != -1) {
            games[gameIndex].name = name;
            res.status(200).send(games[gameIndex])
        } else {
            res.status(404).send({ "error": "Game with this id doesnt exist" })
        }
    })
    .delete('/:id', (req, res) => {
        console.log("Delete is called");
        const { id } = req.params;
        const gameIndex = games.findIndex((game) => game.id === parseInt(id))
        console.log(gameIndex)
        if (gameIndex !== -1) {
            games.splice(gameIndex, 1)
            res.json({ "message": "Deleted Successfully" })
        } else {
            res.status(404).send({ "error": "Game with this id doesnt exist" })
        }
    })

app.listen(4000, () => console.log(`Server started at http://localhost:4000`))