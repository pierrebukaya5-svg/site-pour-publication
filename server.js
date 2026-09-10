const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

// Sécurité - corrige les 7 alertes ZAP
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log('Serveur lance sur port ' + PORT);
});