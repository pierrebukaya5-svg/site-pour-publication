const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let listeEleves = [];
let listeProfesseurs = [];

app.post('/api/admin/eleve', (req, res) => {
    const { nom, classe } = req.body;
    if (!nom || !classe) {
        return res.status(400).json({ error: "Le nom et la classe de l'élève sont obligatoires." });
    }
    const matricule = "MAT" + Date.now().toString().slice(-6);
    const nouvelEleve = { matricule, nom, classe, cotes: [] };
    listeEleves.push(nouvelEleve);
    res.status(201).json(nouvelEleve);
});

app.post('/api/admin/prof', (req, res) => {
    const { nom, postnom, prenom, cours } = req.body;
    if (!nom || !postnom || !prenom || !cours) {
        return res.status(400).json({ error: "Tous les champs du professeur (nom, post-nom, prénom, cours) sont obligatoires." });
    }
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    const nouveauProf = { code, nom, postnom, prenom, cours };
    listeProfesseurs.push(nouveauProf);
    res.status(201).json(nouveauProf);
});

app.get('/api/admin/donnees', (req, res) => {
    res.json({
        eleves: listeEleves,
        professeurs: listeProfesseurs
    });
});

app.post('/api/prof/login', (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({ error: "Veuillez entrer le code d'accès à 4 chiffres." });
    }
    const prof = listeProfesseurs.find(p => p.code === code);
    if (!prof) {
        return res.status(401).json({ error: "Code professeur invalide ou inexistant." });
    }
    res.json(prof);
});

app.post('/api/prof/cote', (req, res) => {
    const { matricule, cours, note } = req.body;
    if (!matricule || !cours || note === undefined || note === '') {
        return res.status(400).json({ error: "Le matricule, le cours et la note sont requis pour la cotation." });
    }
    const eleve = listeEleves.find(e => e.matricule.toLowerCase() === matricule.toLowerCase());
    if (!eleve) {
        return res.status(404).json({ error: "Aucun élève trouvé avec le matricule spécifié : " + matricule });
    }
    const noteNum = parseFloat(note);
    if (isNaN(noteNum) || noteNum < 0 || noteNum > 20) {
        return res.status(400).json({ error: "La note doit être un nombre compris entre 0 et 20." });
    }
    eleve.cotes.push({ cours, note: noteNum });
    res.json({ success: true });
});

app.get('/api/eleve/resultats/:matricule', (req, res) => {
    const matricule = req.params.matricule;
    if (!matricule) {
        return res.status(400).json({ error: "Le matricule de consultation est requis." });
    }
    const eleve = listeEleves.find(e => e.matricule.toLowerCase() === matricule.toLowerCase());
    if (!eleve) {
        return res.status(404).json({ error: "Aucun résultat trouvé pour le matricule : " + matricule });
    }
    res.json(eleve);
});

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portail Scolaire RDC</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-slate-900 text-slate-100 min-h-screen flex flex-col justify-between">
    <header class="bg-slate-800 border-b border-slate-700 p-4 shadow-md">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div class="flex items-center space-x-3">
                <div class="bg-indigo-600 p-2 rounded-lg text-white font-bold text-xl">RDC</div>
                <div>
                    <h1 class="text-lg font-bold tracking-tight">Portail Scolaire RDC</h1>
                    <p class="text-xs text-slate-400">Plateforme officielle de consultation et de cotation</p>
                </div>
            </div>
            <button onclick="basculerFormAdmin()" class="bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium px-4 py-2 rounded-lg transition border border-slate-600 shadow-sm">
                Accès Administration
            </button>
        </div>
    </header>

    <div id="admin-login-box" class="hidden bg-slate-800 border-b border-slate-700 py-4 px-4 shadow-inner">
        <div class="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-2">
            <input type="password" id="input-admin-pwd" placeholder="Mot de passe admin" class="bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 w-full sm:w-auto flex-1">
            <div class="flex gap-2 w-full sm:w-auto">
                <button onclick="connexionAdmin()" class="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex-1 sm:flex-none">Entrer</button>
                <button onclick="basculerFormAdmin()" class="bg-slate-700 hover:bg-slate-600 text-slate-300 px-4 py-2 rounded-lg text-sm transition">Annuler</button>
            </div>
        </div>
    </div>

    <nav id="navigation-principale" class="max-w-6xl mx-auto px-4 mt-6">
        <div class="flex justify-center border-b border-slate-800">
            <button id="btn-onglet-eleves" onclick="changerOngletPrincipal('eleves')" class="px-6 py-3 font-semibold text-sm border-b-2 border-indigo-500 text-indigo-400 transition">Espace Élèves</button>
            <button id="btn-onglet-profs" onclick="changerOngletPrincipal('profs')" class="px-6 py-3 font-semibold text-sm border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition">Espace Professeurs</button>
        </div>
    </nav>

    <main class="max-w-4xl mx-auto px-4 py-8 flex-1 w-full">
        <div id="notification-flottante" class="hidden mb-6 p-4 rounded-xl text-sm border shadow-lg"></div>

        <section id="section-eleves-accueil" class="space-y-6">
            <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg text-center max-w-lg mx-auto">
                <div class="bg-indigo-900/40 text-indigo-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">🎓</div>
                <h2 class="text-xl font-bold mb-2">Consulter vos résultats scolaires</h2>
                <p class="text-slate-400 text-sm mb-6">Entrez votre matricule officiel pour afficher votre bulletin et vos notes de l'année.</p>
                <div class="flex flex-col sm:flex-row gap-3">
                    <input type="text" id="input-matricule-recherche" placeholder="Ex: MAT2026001" class="bg-slate-900 border border-slate-700 px-4 py-2.5 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 flex-1 uppercase">
                    <button onclick="chercherResultatsEleve()" class="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition shadow">Rechercher</button>
                </div>
            </div>
            <div id="conteneur-resultats-eleve" class="hidden mt-6"></div>
        </section>

        <section id="section-profs-accueil" class="hidden space-y-6">
            <div id="prof-login-box" class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg text-center max-w-md mx-auto">
                <div class="bg-slate-700 text-slate-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">🔐</div>
                <h2 class="text-lg font-bold mb-1">Connexion Espace Professeurs</h2>
                <p class="text-xs text-slate-400 mb-6">Entrez votre code d'accès personnel à 4 chiffres.</p>
                <div class="space-y-4">
                    <input type="password" id="input-prof-code" maxlength="4" placeholder="Code à 4 chiffres" class="bg-slate-900 border border-slate-700 px-4 py-3 rounded-lg text-center text-lg tracking-widest text-white focus:outline-none focus:border-indigo-500 w-full">
                    <button onclick="connexionProfesseur()" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg text-sm font-semibold transition shadow">Se connecter</button>
                </div>
            </div>

            <div id="prof-dashboard" class="hidden space-y-6">
                <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg flex justify-between items-center">
                    <div>
                        <h2 class="text-lg font-bold text-indigo-400" id="prof-nom-affiche">Professeur</h2>
                        <p class="text-xs text-slate-400" id="prof-cours-affiche">Interface de cotation</p>
                    </div>
                    <button onclick="deconnexionProf()" class="bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs px-3 py-1.5 rounded-lg transition">Déconnexion</button>
                </div>

                <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg space-y-4">
                    <h3 class="text-sm font-bold uppercase tracking-wider text-slate-300">Attribuer une cote</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Matricule Élève</label>
                            <input type="text" id="cotation-matricule" placeholder="Ex: MAT001" class="bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg text-sm w-full uppercase focus:outline-none focus:border-indigo-500">
                        </div>
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Cours / Discipline</label>
                            <input type="text" id="cotation-cours" placeholder="Ex: Mathématiques" class="bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-indigo-500">
                        </div>
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Note (/20)</label>
                            <input type="number" id="cotation-note" min="0" max="20" step="0.5" placeholder="14" class="bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-indigo-500">
                        </div>
                    </div>
                    <button onclick="soumettreCote()" class="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition shadow">Enregistrer la cote</button>
                </div>
            </div>
        </section>

        <section id="section-admin-dashboard" class="hidden space-y-6">
            <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg flex justify-between items-center">
                <div>
                    <h2 class="text-lg font-bold text-red-400">Panneau d'Administration</h2>
                    <p class="text-xs text-slate-400">Gestion globale de l'établissement scolaire</p>
                </div>
                <button onclick="deconnexionAdmin()" class="bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs px-3 py-1.5 rounded-lg transition">Fermer la session</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg space-y-4">
                    <h3 class="text-sm font-bold uppercase tracking-wider text-slate-300">Inscrire un nouvel élève</h3>
                    <div>
                        <label class="block text-xs text-slate-400 mb-1">Nom complet</label>
                        <input type="text" id="admin-eleve-nom" placeholder="Nom et Prénom" class="bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-indigo-500">
                    </div>
                    <div>
                        <label class="block text-xs text-slate-400 mb-1">Classe</label>
                        <input type="text" id="admin-eleve-classe" placeholder="Ex: 4ème Scientifique" class="bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-indigo-500">
                    </div>
                    <button onclick="adminAjouterEleve()" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg text-sm font-semibold transition shadow">Inscrire l'élève</button>
                </div>

                <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg space-y-4">
                    <h3 class="text-sm font-bold uppercase tracking-wider text-slate-300">Ajouter un professeur</h3>
                    <div class="space-y-3">
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Nom</label>
                            <input type="text" id="admin-prof-nom" placeholder="Nom" class="bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-indigo-500">
                        </div>
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Post-nom</label>
                            <input type="text" id="admin-prof-postnom" placeholder="Post-nom" class="bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-indigo-500">
                        </div>
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Prénom</label>
                            <input type="text" id="admin-prof-prenom" placeholder="Prénom" class="bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-indigo-500">
                        </div>
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Cours dispensé</label>
                            <input type="text" id="admin-prof-cours" placeholder="Ex: Mathématiques" class="bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-indigo-500">
                        </div>
                    </div>
                    <button onclick="adminAjouterProf()" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded-lg text-sm font-semibold transition shadow">Créer le compte prof</button>
                </div>
            </div>

            <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg space-y-6">
                <div class="flex justify-between items-center border-b border-slate-700 pb-3">
                    <h3 class="text-sm font-bold uppercase tracking-wider text-slate-300">Listes des enregistrements</h3>
                    <button onclick="chargerDonneesAdmin()" class="bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs px-3 py-1.5 rounded-lg transition">Actualiser</button>
                </div>

                <div class="space-y-4">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400">Liste des Professeurs</h4>
                    <div id="admin-liste-profs" class="overflow-x-auto">
                        <p class="text-xs text-slate-400 italic">Chargement...</p>
                    </div>
                </div>

                <div class="space-y-4 pt-4 border-t border-slate-700">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Liste des Élèves</h4>
                    <div id="admin-liste-eleves" class="overflow-x-auto">
                        <p class="text-xs text-slate-400 italic">Chargement...</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="bg-slate-800 border-t border-slate-700 p-4 text-center text-xs text-slate-500">
        Portail Scolaire RDC &copy; 2026 - République Démocratique du Congo
    </footer>

    <script>
        function afficherNotification(message, type = 'erreur') {
            const notif = document.getElementById('notification-flottante');
            notif.innerText = message;
            notif.classList.remove('hidden');
            if (type === 'erreur') {
                notif.className = "mb-6 p-4 rounded-xl text-sm border shadow-lg bg-red-900/40 border-red-700 text-red-200";
            } else {
                notif.className = "mb-6 p-4 rounded-xl text-sm border shadow-lg bg-emerald-900/40 border-emerald-700 text-emerald-200";
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function changerOngletPrincipal(onglet) {
            const btnEleves = document.getElementById('btn-onglet-eleves');
            const btnProfs = document.getElementById('btn-onglet-profs');
            const secEleves = document.getElementById('section-eleves-accueil');
            const secProfs = document.getElementById('section-profs-accueil');

            if (onglet === 'eleves') {
                btnEleves.className = "px-6 py-3 font-semibold text-sm border-b-2 border-indigo-500 text-indigo-400 transition";
                btnProfs.className = "px-6 py-3 font-semibold text-sm border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition";
                secEleves.classList.remove('hidden');
                secProfs.classList.add('hidden');
            } else {
                btnProfs.className = "px-6 py-3 font-semibold text-sm border-b-2 border-indigo-500 text-indigo-400 transition";
                btnEleves.className = "px-6 py-3 font-semibold text-sm border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition";
                secProfs.classList.remove('hidden');
                secEleves.classList.add('hidden');
            }
        }

        function basculerFormAdmin() {
            const box = document.getElementById('admin-login-box');
            box.classList.toggle('hidden');
            document.getElementById('input-admin-pwd').value = '';

            if (!box.classList.contains('hidden')) {
                document.getElementById('section-eleves-accueil').classList.add('hidden');
                document.getElementById('section-profs-accueil').classList.add('hidden');
                document.getElementById('navigation-principale').classList.add('hidden');
                document.getElementById('section-admin-dashboard').classList.add('hidden');
                document.getElementById('notification-flottante').classList.add('hidden');
            } else {
                document.getElementById('navigation-principale').classList.remove('hidden');
                changerOngletPrincipal('eleves');
            }
        }

        function connexionAdmin() {
            const pwd = document.getElementById('input-admin-pwd').value;
            if (pwd === "admin2026") {
                document.getElementById('admin-login-box').classList.add('hidden');
                document.getElementById('navigation-principale').classList.add('hidden');
                document.getElementById('section-eleves-accueil').classList.add('hidden');
                document.getElementById('section-profs-accueil').classList.add('hidden');
                document.getElementById('section-admin-dashboard').classList.remove('hidden');
                document.getElementById('notification-flottante').classList.add('hidden');
                chargerDonneesAdmin();
            } else {
                afficherNotification("Mot de passe administrateur incorrect.");
            }
        }

        function deconnexionAdmin() {
            document.getElementById('section-admin-dashboard').classList.add('hidden');
            document.getElementById('navigation-principale').classList.remove('hidden');
            document.getElementById('notification-flottante').classList.add('hidden');
            changerOngletPrincipal('eleves');
        }

        async function chargerDonneesAdmin() {
            try {
                const res = await fetch('/api/admin/donnees');
                if (!res.ok) throw new Error("Impossible de récupérer les données.");
                const data = await res.json();

                const conteneurProfs = document.getElementById('admin-liste-profs');
                if (data.professeurs && data.professeurs.length > 0) {
                    let htmlP = '<table class="w-full text-left text-xs text-slate-300"><thead class="border-b border-slate-700 text-slate-400"><tr><th class="py-2 px-2">Code</th><th class="py-2 px-2">Nom</th><th class="py-2 px-2">Post-nom</th><th class="py-2 px-2">Prénom</th><th class="py-2 px-2">Cours</th></tr></thead><tbody>';
                    data.professeurs.forEach(p => {
                        htmlP += '<tr class="border-b border-slate-700/50"><td class="py-2 px-2 font-mono text-indigo-400 font-bold">' + p.code + '</td><td class="py-2 px-2">' + p.nom + '</td><td class="py-2 px-2">' + p.postnom + '</td><td class="py-2 px-2">' + p.prenom + '</td><td class="py-2 px-2">' + p.cours + '</td></tr>';
                    });
                    htmlP += '</tbody></table>';
                    conteneurProfs.innerHTML = htmlP;
                } else {
                    conteneurProfs.innerHTML = '<p class="text-xs text-slate-400 italic">Aucun professeur enregistré.</p>';
                }

                const conteneurEleves = document.getElementById('admin-liste-eleves');
                if (data.eleves && data.eleves.length > 0) {
                    let htmlE = '<table class="w-full text-left text-xs text-slate-300"><thead class="border-b border-slate-700 text-slate-400"><tr><th class="py-2 px-2">Matricule</th><th class="py-2 px-2">Nom complet</th><th class="py-2 px-2">Classe</th><th class="py-2 px-2">Cotes</th></tr></thead><tbody>';
                    data.eleves.forEach(e => {
                        let cotesResume = e.cotes && e.cotes.length > 0 ? e.cotes.map(c => c.cours + ': ' + c.note + '/20').join(', ') : 'Aucune cote';
                        htmlE += '<tr class="border-b border-slate-700/50"><td class="py-2 px-2 font-mono text-emerald-400 font-bold">' + e.matricule + '</td><td class="py-2 px-2">' + e.nom + '</td><td class="py-2 px-2">' + e.classe + '</td><td class="py-2 px-2 text-slate-400">' + cotesResume + '</td></tr>';
                    });
                    htmlE += '</tbody></table>';
                    conteneurEleves.innerHTML = htmlE;
                } else {
                    conteneurEleves.innerHTML = '<p class="text-xs text-slate-400 italic">Aucun élève enregistré.</p>';
                }
            } catch (e) {
                console.error(e);
            }
        }

        async function chercherResultatsEleve() {
            const matricule = document.getElementById('input-matricule-recherche').value.trim();
            const conteneur = document.getElementById('conteneur-resultats-eleve');
            document.getElementById('notification-flottante').classList.add('hidden');
            if (!matricule) {
                afficherNotification("Veuillez entrer un matricule valide pour effectuer la recherche.");
                return;
            }

            try {
                const res = await fetch('/api/eleve/resultats/' + matricule);
                if (!res.ok) {
                    const errData = await res.json().catch(() => ({}));
                    afficherNotification(errData.error || "Aucun élève trouvé avec le matricule " + matricule + ".");
                    conteneur.classList.add('hidden');
                    return;
                }
                const data = await res.json();
                let cotesHtml = '';
                if (data.cotes && data.cotes.length > 0) {
                    cotesHtml = data.cotes.map(c => '<div class="flex justify-between border-b border-slate-700 py-2 text-sm"><span>' + c.cours + '</span><span class="font-semibold text-indigo-400">' + c.note + '/20</span></div>').join('');
                } else {
                    cotesHtml = '<p class="text-sm text-slate-400 italic">Aucune cote enregistrée pour le moment.</p>';
                }

                conteneur.innerHTML = 
                    '<div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg space-y-4">' +
                        '<div class="flex justify-between items-center border-b border-slate-700 pb-3">' +
                            '<div>' +
                                '<h3 class="font-bold text-lg">' + data.nom + '</h3>' +
                                '<p class="text-xs text-slate-400">Classe : ' + data.classe + '</p>' +
                            '</div>' +
                            '<span class="text-xs bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full font-mono">' + data.matricule + '</span>' +
                        '</div>' +
                        '<div class="space-y-2">' +
                            '<h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Bulletin des cotes</h4>' +
                            cotesHtml +
                        '</div>' +
                    '</div>';
                conteneur.classList.remove('hidden');
            } catch (e) {
                console.error(e);
            }
        }

        async function connexionProfesseur() {
            const code = document.getElementById('input-prof-code').value.trim();
            document.getElementById('notification-flottante').classList.add('hidden');
            if (code.length !== 4) {
                afficherNotification("Veuillez entrer un code professeur valide à 4 chiffres.");
                return;
            }

            try {
                const res = await fetch('/api/prof/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ code })
                });
                if (!res.ok) {
                    const errData = await res.json().catch(() => ({}));
                    afficherNotification(errData.error || "Code professeur invalide.");
                    return;
                }
                const data = await res.json();
                document.getElementById('prof-nom-affiche').innerText = "Prof. " + data.prenom + " " + data.nom;
                document.getElementById('prof-cours-affiche').innerText = "Cours dispensé : " + data.cours;
                document.getElementById('cotation-cours').value = data.cours;
                document.getElementById('prof-login-box').classList.add('hidden');
                document.getElementById('prof-dashboard').classList.remove('hidden');
            } catch (e) {
                console.error(e);
            }
        }

        function deconnexionProf() {
            document.getElementById('input-prof-code').value = '';
            document.getElementById('prof-dashboard').classList.add('hidden');
            document.getElementById('prof-login-box').classList.remove('hidden');
        }

        async function soumettreCote() {
            const matricule = document.getElementById('cotation-matricule').value.trim();
            const cours = document.getElementById('cotation-cours').value.trim();
            const note = document.getElementById('cotation-note').value;
            document.getElementById('notification-flottante').classList.add('hidden');

            if (!matricule || !cours || note === '') {
                afficherNotification("Veuillez remplir tous les champs de cotation.");
                return;
            }

            try {
                const res = await fetch('/api/prof/cote', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ matricule, cours, note: parseFloat(note) })
                });
                if (res.ok) {
                    afficherNotification("Cote enregistrée avec succès !", 'succes');
                    document.getElementById('cotation-matricule').value = '';
                    document.getElementById('cotation-note').value = '';
                } else {
                    const errData = await res.json().catch(() => ({}));
                    afficherNotification(errData.error || "Erreur lors de l'enregistrement de la cote.");
                }
            } catch (e) {
                console.error(e);
            }
        }

        async function adminAjouterEleve() {
            const nom = document.getElementById('admin-eleve-nom').value.trim();
            const classe = document.getElementById('admin-eleve-classe').value.trim();
            document.getElementById('notification-flottante').classList.add('hidden');

            if (!nom || !classe) {
                afficherNotification("Veuillez renseigner le nom complet et la classe de l'élève.");
                return;
            }

            try {
                const res = await fetch('/api/admin/eleve', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nom, classe })
                });
                if (res.ok) {
                    const data = await res.json();
                    afficherNotification("Élève inscrit avec succès ! Matricule attribué : " + data.matricule, 'succes');
                    document.getElementById('admin-eleve-nom').value = '';
                    document.getElementById('admin-eleve-classe').value = '';
                    chargerDonneesAdmin();
                } else {
                    const errData = await res.json().catch(() => ({}));
                    afficherNotification(errData.error || "Erreur lors de l'inscription de l'élève.");
                }
            } catch (e) {
                console.error(e);
            }
        }

        async function adminAjouterProf() {
            const nom = document.getElementById('admin-prof-nom').value.trim();
            const postnom = document.getElementById('admin-prof-postnom').value.trim();
            const prenom = document.getElementById('admin-prof-prenom').value.trim();
            const cours = document.getElementById('admin-prof-cours').value.trim();
            document.getElementById('notification-flottante').classList.add('hidden');

            if (!nom || !postnom || !prenom || !cours) {
                afficherNotification("Veuillez remplir tous les champs du professeur (nom, post-nom, prénom, cours).");
                return;
            }

            try {
                const res = await fetch('/api/admin/prof', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nom, postnom, prenom, cours })
                });
                if (res.ok) {
                    const data = await res.json();
                    afficherNotification("Professeur ajouté avec succès ! Code d'accès généré : " + data.code, 'succes');
                    document.getElementById('admin-prof-nom').value = '';
                    document.getElementById('admin-prof-postnom').value = '';
                    document.getElementById('admin-prof-prenom').value = '';
                    document.getElementById('admin-prof-cours').value = '';
                    chargerDonneesAdmin();
                } else {
                    const errData = await res.json().catch(() => ({}));
                    afficherNotification(errData.error || "Erreur lors de l'ajout du professeur.");
                }
            } catch (e) {
                console.error(e);
            }
        }
    </script>
</body>
</html>`);
});

app.listen(PORT, () => {
    console.log("Serveur démarré sur le port " + PORT);
});