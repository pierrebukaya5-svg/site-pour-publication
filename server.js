const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();

app.use(helmet());

// BLOQUE l'accès à donnees.json
app.use((req, res, next) => {
  if (req.url.includes('donnees.json')) {
    return res.status(403).send('Acces interdit');
  }
  next();
});

app.use(express.static(__dirname));

app.get('*', (req,res) => res.sendFile(path.join(__dirname, 'index.html')));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('Serveur lance sur port ' + PORT));