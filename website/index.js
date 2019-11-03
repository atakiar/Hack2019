const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/get-text', (req, res) => {
    const t = "you stone ages, carbon dioxide breathing, primordial gloop, brick munching troglodyte.";
    const t2 = "I like potatoes. Potatoes are rich in starch.";
    const blah = [t, t2];
    res.render('index', {
        gotText: blah
    });
});

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});