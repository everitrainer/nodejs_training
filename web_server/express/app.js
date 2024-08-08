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
    .post('/', (req, res) => {
        console.log("Post is called");
        console.log(req.body)
        const { name } = req.body;
        const newGame = { name, id: ++counter }
        games.push(newGame)
        res.status(201).send(newGame)
    })
    .put('/', (req, res) => {
        console.log("Put is called");
        res.send("Put called")
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