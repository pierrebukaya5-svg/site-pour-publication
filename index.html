<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portail Scolaire RDC</title>
    <style>
        :root {
            --primary: #4f46e5;
            --primary-hover: #4338ca;
            --bg-dark: #0f172a;
            --bg-card: #1e293b;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --border: #334155;
            --danger: #ef4444;
            --success: #22c55e;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-dark);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        header {
            background-color: var(--bg-card);
            border-bottom: 1px solid var(--border);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        h1 {
            font-size: 1.5rem;
            color: var(--primary);
        }

        .nav-btns button {
            background: transparent;
            border: 1px solid var(--border);
            color: var(--text-main);
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            cursor: pointer;
            margin-left: 0.5rem;
            transition: 0.2s;
        }

        .nav-btns button:hover, .nav-btns button.active {
            background-color: var(--primary);
            border-color: var(--primary);
        }

        main {
            flex: 1;
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
        }

        .view {
            display: none;
        }

        .view.active {
            display: block;
        }

        .card {
            background-color: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }

        h2, h3 {
            margin-bottom: 1rem;
            color: var(--text-main);
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        label {
            font-size: 0.875rem;
            color: var(--text-muted);
            margin-bottom: 0.375rem;
        }

        input, select, textarea {
            background-color: var(--bg-dark);
            border: 1px solid var(--border);
            border-radius: 0.375rem;
            padding: 0.75rem;
            color: var(--text-main);
            font-size: 1rem;
        }

        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: var(--primary);
        }

        button.btn-submit {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: background 0.2s;
        }

        button.btn-submit:hover {
            background-color: var(--primary-hover);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
            background-color: var(--bg-dark);
            border-radius: 0.5rem;
            overflow: hidden;
        }

        th, td {
            padding: 0.75rem 1rem;
            text-align: left;
            border-bottom: 1px solid var(--border);
            font-size: 0.9rem;
        }

        th {
            background-color: var(--border);
            color: var(--text-main);
        }

        .badge {
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            font-weight: bold;
        }
        .badge.success { background-color: rgba(34, 197, 94, 0.2); color: var(--success); }
        .badge.danger { background-color: rgba(239, 68, 68, 0.2); color: var(--danger); }

        .communique-item {
            background: var(--bg-dark);
            border-left: 4px solid var(--primary);
            padding: 1rem;
            margin-bottom: 0.75rem;
            border-radius: 0 0.375rem 0.375rem 0;
        }

        .communique-date {
            font-size: 0.75rem;
            color: var(--text-muted);
            margin-bottom: 0.25rem;
        }

        footer {
            text-align: center;
            padding: 1rem;
            border-top: 1px solid var(--border);
            font-size: 0.875rem;
            color: var(--text-muted);
            background-color: var(--bg-card);
        }
    </style>
</head>
<body>

    <header>
        <h1>Portail Scolaire RDC</h1>
        <div class="nav-btns">
            <button onclick="switchView('home')" id="btn-home" class="active">Accueil</button>
            <button onclick="switchView('parent')" id="btn-parent">Espace Parent</button>
            <button onclick="switchView('admin')" id="btn-admin">Administration</button>
        </div>
    </header>

    <main>
        <!-- VUE ACCUEIL -->
        <section id="home" class="view active">
            <div class="card">
                <h2>Bienvenue sur le Portail Scolaire</h2>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Consultez les dernières actualités et communiqués officiels de l'établissement.</p>
                
                <h3>📢 Communiqués Récents</h3>
                <div id="public-communiques">
                    <p style="color: var(--text-muted);">Aucun communiqué pour le moment.</p>
                </div>
            </div>
        </section>

        <!-- VUE ESPACE PARENT -->
        <section id="parent" class="view">
            <div class="card" id="parent-login-card">
                <h2>Espace Parent - Connexion</h2>
                <p style="color: var(--text-muted); margin-bottom: 1rem;">Entrez le matricule à 4 chiffres de votre enfant pour accéder à son dossier, voir les messages et répondre à l'administration.</p>
                <div class="form-group" style="max-width: 300px; margin-bottom: 1rem;">
                    <label>Matricule de l'enfant (4 chiffres)</label>
                    <input type="text" id="parent-matricule-input" maxlength="4" placeholder="Ex: 4812">
                </div>
                <button class="btn-submit" style="max-width: 300px;" onclick="parentLogin()">Se connecter</button>
            </div>

            <div class="card" id="parent-dashboard-card" style="display: none;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h2>Dossier de l'élève : <span id="p-nom-eleve" style="color: var(--primary);"></span></h2>
                    <button onclick="parentLogout()" style="background: transparent; border: 1px solid var(--danger); color: var(--danger); padding: 0.25rem 0.75rem; border-radius: 4px; cursor: pointer;">Déconnexion</button>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                    <div>
                        <p><strong>Matricule :</strong> <span id="p-mat"></span></p>
                        <p><strong>Classe :</strong> <span id="p-classe"></span></p>
                        <p><strong>Sexe :</strong> <span id="p-sexe"></span></p>
                        <p><strong>Statut Frais :</strong> <span id="p-statut-frais" class="badge"></span></p>
                    </div>
                    <div>
                        <p><strong>Tuteur Principal :</strong> <span id="p-tuteur1"></span></p>
                        <p><strong>Second Tuteur :</strong> <span id="p-tuteur2">Aucun</span></p>
                    </div>
                </div>

                <hr style="border-color: var(--border); margin: 1.5rem 0;">

                <h3>✉️ Messages & Convocations de l'Administration</h3>
                <div id="parent-convocations-list">
                    <p style="color: var(--text-muted);">Aucun message ou convocation pour le moment.</p>
                </div>
            </div>
        </section>

        <!-- VUE ADMINISTRATION -->
        <section id="admin" class="view">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <!-- Inscription Élève -->
                <div class="card">
                    <h2>Inscrire un Élève</h2>
                    <div class="form-grid">
                        <div class="form-group"><label>Nom</label><input type="text" id="el-nom"></div>
                        <div class="form-group"><label>Post-nom</label><input type="text" id="el-postnom"></div>
                        <div class="form-group"><label>Prénom</label><input type="text" id="el-prenom"></div>
                        <div class="form-group">
                            <label>Sexe</label>
                            <select id="el-sexe"><option value="M">Masculin</option><option value="F">Féminin</option></select>
                        </div>
                        <div class="form-group" style="grid-column: span 2;"><label>Classe</label><input type="text" id="el-classe" placeholder="Ex: 4ème Scientifique"></div>
                    </div>

                    <h4 style="margin: 1rem 0 0.5rem 0; color: var(--primary);">Identité du Tuteur Principal (Obligatoire)</h4>
                    <div class="form-grid">
                        <div class="form-group"><label>Nom Tuteur</label><input type="text" id="tut1-nom"></div>
                        <div class="form-group"><label>Post-nom Tuteur</label><input type="text" id="tut1-postnom"></div>
                        <div class="form-group"><label>Prénom Tuteur</label><input type="text" id="tut1-prenom"></div>
                        <div class="form-group">
                            <label>Sexe Tuteur</label>
                            <select id="tut1-sexe"><option value="M">Masculin</option><option value="F">Féminin</option></select>
                        </div>
                    </div>

                    <h4 style="margin: 1rem 0 0.5rem 0; color: var(--text-muted);">Second Tuteur (Optionnel)</h4>
                    <div class="form-grid">
                        <div class="form-group"><label>Nom Tuteur 2</label><input type="text" id="tut2-nom"></div>
                        <div class="form-group"><label>Post-nom Tuteur 2</label><input type="text" id="tut2-postnom"></div>
                        <div class="form-group"><label>Prénom Tuteur 2</label><input type="text" id="tut2-prenom"></div>
                        <div class="form-group">
                            <label>Sexe Tuteur 2</label>
                            <select id="tut2-sexe"><option value="M">Masculin</option><option value="F">Féminin</option></select>
                        </div>
                    </div>

                    <button class="btn-submit" onclick="inscrireEleve()" style="margin-top: 1rem;">Inscrire l'élève</button>
                </div>

                <!-- Création Prof & Publication Communiqué -->
                <div>
                    <div class="card">
                        <h2>Créer un Compte Professeur</h2>
                        <div class="form-grid">
                            <div class="form-group"><label>Nom</label><input type="text" id="prof-nom"></div>
                            <div class="form-group"><label>Post-nom</label><input type="text" id="prof-postnom"></div>
                            <div class="form-group"><label>Prénom</label><input type="text" id="prof-prenom"></div>
                            <div class="form-group">
                                <label>Sexe</label>
                                <select id="prof-sexe"><option value="M">Masculin</option><option value="F">Féminin</option></select>
                            </div>
                            <div class="form-group" style="grid-column: span 2;"><label>Cours dispensé</label><input type="text" id="prof-cours" placeholder="Ex: Mathématiques"></div>
                        </div>
                        <button class="btn-submit" onclick="creerProf()">Créer le compte prof</button>
                    </div>

                    <div class="card">
                        <h2>Publier un Communiqué</h2>
                        <div class="form-group" style="margin-bottom: 1rem;">
                            <label>Message (Visible à l'accueil)</label>
                            <textarea id="com-texte" rows="3" placeholder="Écrivez votre communiqué ici..."></textarea>
                        </div>
                        <button class="btn-submit" onclick="publierCommunique()">Publier</button>
                    </div>
                </div>
            </div>

            <!-- Listes Admin -->
            <div class="card">
                <h2>LISTE DES PROFESSEURS</h2>
                <table>
                    <thead><tr><th>Code</th><th>Nom</th><th>Post-nom</th><th>Prénom</th><th>Sexe</th><th>Cours</th></tr></thead>
                    <tbody id="table-profs"><tr><td colspan="6" style="text-align: center; color: var(--text-muted);">Aucun professeur enregistré.</td></tr></tbody>
                </table>
            </div>

            <div class="card">
                <h2>LISTE DES ÉLÈVES & GESTION</h2>
                <table>
                    <thead><tr><th>Matricule</th><th>Élève</th><th>Sexe</th><th>Classe</th><th>Tuteur Principal</th><th>Frais</th><th>Actions</th></tr></thead>
                    <tbody id="table-eleves"><tr><td colspan="7" style="text-align: center; color: var(--text-muted);">Aucun élève enregistré.</td></tr></tbody>
                </table>
            </div>
        </section>
    </main>

    <footer>
        Portail Scolaire RDC &copy; 2026 - République Démocratique du Congo
    </footer>

    <script>
        let db = JSON.parse(localStorage.getItem('portail_scolaire_rdc')) || {
            eleves: [],
            profs: [],
            communiques: [],
            convocations: []
        };

        function saveData() {
            localStorage.setItem('portail_scolaire_rdc', JSON.stringify(db));
            renderAll();
        }

        // --- GESTION BOUTON RETOUR TÉLÉPHONE ---
        function switchView(viewId, pushHistory = true) {
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.querySelectorAll('.nav-btns button').forEach(b => b.classList.remove('active'));

            document.getElementById(viewId).classList.add('active');
            const btn = document.getElementById('btn-' + viewId);
            if(btn) btn.classList.add('active');

            if (pushHistory) {
                history.pushState({ view: viewId }, "", "#" + viewId);
            }
            window.scrollTo(0, 0);
        }

        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.view) {
                switchView(event.state.view, false);
            } else {
                switchView('home', false);
            }
        });

        window.history.replaceState({ view: 'home' }, "", "#home");

        // --- MATRICULE 4 CHIFFRES ---
        function genererMatricule() {
            let matricule;
            do {
                matricule = Math.floor(1000 + Math.random() * 9000).toString();
            } while (db.eleves.some(e => e.matricule === matricule));
            return matricule;
        }

        // --- INSCRIPTION ÉLÈVE ---
        function inscrireEleve() {
            const nom = document.getElementById('el-nom').value.trim();
            const postnom = document.getElementById('el-postnom').value.trim();
            const prenom = document.getElementById('el-prenom').value.trim();
            const sexe = document.getElementById('el-sexe').value;
            const classe = document.getElementById('el-classe').value.trim();

            const t1_nom = document.getElementById('tut1-nom').value.trim();
            const t1_postnom = document.getElementById('tut1-postnom').value.trim();
            const t1_prenom = document.getElementById('tut1-prenom').value.trim();
            const t1_sexe = document.getElementById('tut1-sexe').value;

            const t2_nom = document.getElementById('tut2-nom').value.trim();
            const t2_postnom = document.getElementById('tut2-postnom').value.trim();
            const t2_prenom = document.getElementById('tut2-prenom').value.trim();
            const t2_sexe = document.getElementById('tut2-sexe').value;

            if(!nom || !postnom || !prenom || !classe || !t1_nom || !t1_postnom || !t1_prenom) {
                alert("Veuillez remplir tous les champs obligatoires (Nom, Post-nom, Prénom élève et Tuteur Principal).");
                return;
            }

            const nouvelEleve = {
                matricule: genererMatricule(),
                nom, postnom, prenom, sexe, classe,
                tuteur1: { nom: t1_nom, postnom: t1_postnom, prenom: t1_prenom, sexe: t1_sexe },
                tuteur2: t2_nom ? { nom: t2_nom, postnom: t2_postnom, prenom: t2_prenom, sexe: t2_sexe } : null,
                enOrdreFrais: true
            };

            db.eleves.push(nouvelEleve);
            saveData();
            alert(`Élève inscrit ! Son matricule (code parent) est : ${nouvelEleve.matricule}`);
            
            document.querySelectorAll('#admin input').forEach(i => i.value = '');
        }

        // --- CRÉATION PROF ---
        function creerProf() {
            const nom = document.getElementById('prof-nom').value.trim();
            const postnom = document.getElementById('prof-postnom').value.trim();
            const prenom = document.getElementById('prof-prenom').value.trim();
            const sexe = document.getElementById('prof-sexe').value;
            const cours = document.getElementById('prof-cours').value.trim();

            if(!nom || !postnom || !prenom || !cours) {
                alert("Veuillez remplir tous les champs du professeur.");
                return;
            }

            const nouveauProf = {
                code: 'P' + Math.floor(100 + Math.random() * 900),
                nom, postnom, prenom, sexe, cours
            };

            db.profs.push(nouveauProf);
            saveData();
            alert("Compte professeur créé !");
            document.getElementById('prof-nom').value = '';
            document.getElementById('prof-postnom').value = '';
            document.getElementById('prof-prenom').value = '';
            document.getElementById('prof-cours').value = '';
        }

        // --- COMMUNQUÉS ---
        function publierCommunique() {
            const texte = document.getElementById('com-texte').value.trim();
            if(!texte) return;

            db.communiques.unshift({
                texte,
                date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
            });

            saveData();
            document.getElementById('com-texte').value = '';
            alert("Communiqué publié !");
        }

        // --- FRAIS & CONVOCATIONS ADMIN ---
        function toggleFrais(matricule) {
            const eleve = db.eleves.find(e => e.matricule === matricule);
            if(eleve) {
                eleve.enOrdreFrais = !eleve.enOrdreFrais;
                saveData();
            }
        }

        function convoquerParent(matricule) {
            const message = prompt("Entrez le message de convocation pour le parent :");
            if(message) {
                db.convocations.push({
                    matricule,
                    message,
                    reponse: "",
                    date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
                });
                saveData();
                alert("Convocation envoyée.");
            }
        }

        // --- ESPACE PARENT ---
        let currentParentMatricule = null;

        function parentLogin() {
            const mat = document.getElementById('parent-matricule-input').value.trim();
            const eleve = db.eleves.find(e => e.matricule === mat);

            if(!eleve) {
                alert("Matricule introuvable.");
                return;
            }

            currentParentMatricule = mat;
            document.getElementById('parent-login-card').style.display = 'none';
            document.getElementById('parent-dashboard-card').style.display = 'block';

            document.getElementById('p-nom-eleve').innerText = `${eleve.nom} ${eleve.postnom} ${eleve.prenom}`;
            document.getElementById('p-mat').innerText = eleve.matricule;
            document.getElementById('p-classe').innerText = eleve.classe;
            document.getElementById('p-sexe').innerText = eleve.sexe === 'M' ? 'Masculin' : 'Féminin';
            
            const badgeFrais = document.getElementById('p-statut-frais');
            if(eleve.enOrdreFrais) {
                badgeFrais.className = "badge success";
                badgeFrais.innerText = "En ordre (Accès autorisé)";
            } else {
                badgeFrais.className = "badge danger";
                badgeFrais.innerText = "Non en ordre (Accès restreint)";
            }

            document.getElementById('p-tuteur1').innerText = `${eleve.tuteur1.nom} ${eleve.tuteur1.postnom} ${eleve.tuteur1.prenom} (${eleve.tuteur1.sexe})`;
            if(eleve.tuteur2) {
                document.getElementById('p-tuteur2').innerText = `${eleve.tuteur2.nom} ${eleve.tuteur2.postnom} ${eleve.tuteur2.prenom} (${eleve.tuteur2.sexe})`;
            } else {
                document.getElementById('p-tuteur2').innerText = "Aucun";
            }

            renderParentConvocations();
        }

        function parentLogout() {
            currentParentMatricule = null;
            document.getElementById('parent-login-card').style.display = 'block';
            document.getElementById('parent-dashboard-card').style.display = 'none';
            document.getElementById('parent-matricule-input').value = '';
        }

        function renderParentConvocations() {
            const container = document.getElementById('parent-convocations-list');
            const convs = db.convocations.filter(c => c.matricule === currentParentMatricule);

            if(convs.length === 0) {
                container.innerHTML = `<p style="color: var(--text-muted);">Aucun message ou convocation pour le moment.</p>`;
                return;
            }

            container.innerHTML = convs.map((c, index) => `
                <div class="communique-item">
                    <div class="communique-date">${c.date}</div>
                    <p><strong>Admin :</strong> ${c.message}</p>
                    <div style="margin-top: 0.5rem;">
                        ${c.reponse ? `<p style="color: var(--success); margin-top: 0.5rem;"><strong>Votre réponse :</strong> ${c.reponse}</p>` : `
                            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                                <input type="text" id="rep-${index}" placeholder="Répondre à l'administration..." style="flex: 1; padding: 0.5rem;">
                                <button onclick="repondreConvocation(${index})" class="btn-submit" style="width: auto; padding: 0.5rem 1rem;">Envoyer</button>
                            </div>
                        `}
                    </div>
                </div>
            `).join('');
        }

        function repondreConvocation(index) {
            const input = document.getElementById(`rep-${index}`);
            const texteReponse = input.value.trim();
            if(!texteReponse) return;

            const convs = db.convocations.filter(c => c.matricule === currentParentMatricule);
            const targetConv = convs[index];
            const globalIndex = db.convocations.indexOf(targetConv);

            if(globalIndex !== -1) {
                db.convocations[globalIndex].reponse = texteReponse;
                saveData();
                renderParentConvocations();
            }
        }

        // --- RENDU GLOBAL ---
        function renderAll() {
            const comContainer = document.getElementById('public-communiques');
            if(db.communiques.length === 0) {
                comContainer.innerHTML = `<p style="color: var(--text-muted);">Aucun communiqué pour le moment.</p>`;
            } else {
                comContainer.innerHTML = db.communiques.map(c => `
                    <div class="communique-item">
                        <div class="communique-date">${c.date}</div>
                        <p>${c.texte}</p>
                    </div>
                `).join('');
            }

            const profsTbody = document.getElementById('table-profs');
            if(db.profs.length === 0) {
                profsTbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">Aucun professeur enregistré.</td></tr>`;
            } else {
                profsTbody.innerHTML = db.profs.map(p => `
                    <tr>
                        <td><code>${p.code}</code></td>
                        <td>${p.nom}</td>
                        <td>${p.postnom}</td>
                        <td>${p.prenom}</td>
                        <td>${p.sexe}</td>
                        <td>${p.cours}</td>
                    </tr>
                `).join('');
            }

            const elevesTbody = document.getElementById('table-eleves');
            if(db.eleves.length === 0) {
                elevesTbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted);">Aucun élève enregistré.</td></tr>`;
            } else {
                elevesTbody.innerHTML = db.eleves.map(e => `
                    <tr>
                        <td><code>${e.matricule}</code></td>
                        <td>${e.nom} ${e.postnom} ${e.prenom}</td>
                        <td>${e.sexe}</td>
                        <td>${e.classe}</td>
                        <td>${e.tuteur1.nom} ${e.tuteur1.prenom}</td>
                        <td><span class="badge ${e.enOrdreFrais ? 'success' : 'danger'}">${e.enOrdreFrais ? 'En ordre' : 'Bloqué'}</span></td>
                        <td>
                            <button onclick="toggleFrais('${e.matricule}')" style="background: ${e.enOrdreFrais ? 'var(--danger)' : 'var(--success)'}; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer; font-size: 0.75rem;">${e.enOrdreFrais ? 'Bloquer' : 'Débloquer'}</button>
                            <button onclick="convoquerParent('${e.matricule}')" style="background: var(--primary); color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer; font-size: 0.75rem; margin-left: 4px;">Convoquer</button>
                        </td>
                    </tr>
                `).join('');
            }
        }

        renderAll();
    </script>
</body>
</html>