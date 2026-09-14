const express = require('express');
const path = require('path');
const app = express();

// On ne sert QUE le dossier PUBLIC
app.use(express.static(path.join(__dirname, 'PUBLIC')));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'PUBLIC', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT);