const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Permet de servir tous les fichiers statiques du dossier
app.use(express.static(__dirname));

const FILE_PATH = './donnees.json';

// Route racine : redirige ou affiche index.html peu importe la casse
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour récupérer les données
app.get('/api/resultats', (req, res) => {
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, '[]');
  }
  const data = JSON.parse(fs.readFileSync(FILE_PATH));
  res.json(data);
});

// Route pour enregistrer les données sur le PC
app.post('/api/resultats', (req, res) => {
  let data = [];
  if (fs.existsSync(FILE_PATH)) {
    data = JSON.parse(fs.readFileSync(FILE_PATH));
  }
  data.push(req.body);
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  res.json({ message: "Succès ! Enregistré sur le PC." });
});

app.listen(3000, () => {
  console.log("✅ Serveur actif sur http://localhost:3000");
});