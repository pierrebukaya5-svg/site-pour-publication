const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;
const DATA_FILE = path.join(__dirname, 'donnees.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

function lireDonnees() {
  try {
    if (!fs.existsSync(DATA_FILE)) return { eleves: [], profs: [] };
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch (e) { return { eleves: [], profs: [] }; }
}
function sauverDonnees(d) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(d, null, 2));
}
function genererMatricule() {
  return 'RDC-' + Math.floor(1000 + Math.random() * 9000);
}

// 1. Admin ajoute eleve -> correspond à adminAjouterEleve()
app.post('/api/admin/eleve', (req, res) => {
  try {
    const { nom, classe } = req.body;
    if (!nom || !classe) return res.status(400).json({ error: "Champs manquants" });
    const db = lireDonnees();
    const matricule = genererMatricule();
    db.eleves.push({ nom, classe, matricule, cotes: [] });
    sauverDonnees(db);
    res.json({ success: true, matricule });
  } catch (e) { res.status(500).json({ error: "Erreur serveur" }); }
});

// 2. Admin ajoute prof -> correspond à adminAjouterProf()
app.post('/api/admin/prof', (req, res) => {
  try {
    const { nom, code } = req.body;
    if (!nom || !code || String(code).length !== 4) return res.status(400).json({ error: "Code 4 chiffres" });
    const db = lireDonnees();
    db.profs = db.profs || [];
    if (db.profs.find(p => p.code === String(code))) return res.status(400).json({ error: "Code existe deja" });
    db.profs.push({ nom, code: String(code) });
    sauverDonnees(db);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: "Erreur serveur" }); }
});

// 3. Eleve cherche resultats
app.get('/api/eleve/resultats/:matricule', (req, res) => {
  const db = lireDonnees();
  const eleve = db.eleves.find(e => e.matricule === req.params.matricule);
  if (!eleve) return res.status(404).json({ error: "Non trouve" });
  res.json(eleve);
});

// 4. Prof login
app.post('/api/prof/login', (req, res) => {
  const { code } = req.body;
  const db = lireDonnees();
  const prof = db.profs.find(p => p.code === String(code));
  if (!prof) return res.status(401).json({ error: "Code invalide" });
  res.json(prof);
});

// 5. Prof ajoute cote
app.post('/api/prof/cote', (req, res) => {
  try {
    const { matricule, cours, note } = req.body;
    const db = lireDonnees();
    const eleve = db.eleves.find(e => e.matricule === matricule);
    if (!eleve) return res.status(404).json({ error: "Eleve non trouve" });
    eleve.cotes = eleve.cotes || [];
    eleve.cotes.push({ cours, note });
    sauverDonnees(db);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: "Erreur" }); }
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.listen(PORT, () => console.log('Serveur sur ' + PORT));