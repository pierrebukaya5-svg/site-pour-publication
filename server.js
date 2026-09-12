const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connexion à la base de données (ex: MongoDB Atlas)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecoledlrdc', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connecté à la base de données"))
  .catch(err => console.error("Erreur de connexion :", err));

// Exemple de schéma Admin
const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Admin = mongoose.model('Admin', adminSchema);