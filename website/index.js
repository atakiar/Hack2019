const express = require('express');
const app = express();
const t = "you stone ages, carbon dioxide breathing, primordial gloop, brick munching troglodyte."
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/get-text', (req, res) => {
    res.render('index', {
        gotText: t
    });
});

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});