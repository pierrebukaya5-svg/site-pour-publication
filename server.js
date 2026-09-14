const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecole6', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connecté à la base"))
  .catch(err => console.error("Erreur connexion :", err));

// Schéma Admin
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const Admin = mongoose.model('Admin', adminSchema);

// --- PARTIE IMPORTANTE POUR CACHER server.js ---

// 1. Bloque l'accès direct à server.js, package.json, .env
app.get(['/server.js', '/package.json', '/.env', '/donnees.json'], (req, res) => {
  return res.status(404).send('Not Found');
});

// 2. Sers SEULEMENT le contenu public (crée un dossier public/)
app.use(express.static(path.join(__dirname, 'public')));

// 3. Tes routes API ici (exemple login)
app.post('/api/login', async (req,res) => {
  // ton code login
});

// 4. Tout le reste renvoie index.html, PAS la liste des fichiers
// C'est ça qui enlève le #server.js dans l'URL
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Serveur sur port ${PORT}`));