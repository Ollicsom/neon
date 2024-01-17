const { Pole, Membre, Defi } = require('./sequelize/models');
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/public', express.static(`${__dirname}/public`));

app.listen(8000, async () => {
    console.log('App is listening on port localhost:8000');
});


app.get('/api/getPoles', async (req, res) => {
    try {
        const pole = await Pole.findAll({
            include: {
                model: Membre
            }
        });
        return res.json(pole);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

app.get('/api/getDefis', async (req, res) => {
    try {
        const defis = await Defi.findAll({});
        return res.json(defis);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

app.post('/api/createDefi', async (req, res) => {
    try {
        console.log(req.body.defi);
        const defis = await Defi.create(req.body.defi);
        return res.json(defis);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});