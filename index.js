import express from "express";
import bodyParser from 'body-parser'

import routerUser from "./routes/user.js"


const app = express();
const PORT = 5555

app.use(bodyParser.json())

app.use('/users', routerUser);


app.get('/', (req, res) => {
    console.log('Bonjour');
    res.send('Bonjour tout le monde')
})


app.listen(PORT, () => {
    console.log(`Mon serveur démarre sur le port ${PORT}`);
})