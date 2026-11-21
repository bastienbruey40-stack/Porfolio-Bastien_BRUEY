/* ===== Données détaillées des projets ===== */
const PROJECTS = [
    {
        title: "Outils Web & Automatisation Industrielle – EGGER Panneaux & Décors",
        tool: "HTML, CSS, JavaScript & Excel VBA",
        period: "Alternance · Sept. 2025 – Août 2026",
        category: ["egger", "web", "data"],
        img: "logo_egger.png",
        imgContain: true,
        short: "Développement d'une application web de suivi du parc d'instruments de mesure, suivi des bâtiments du site et automatisation VBA pour la consignation des moteurs.",
        highlights: [
            "Page Web de suivi du parc d'instruments de mesure (HTML, CSS, JS)",
            "Automatisation VBA pour les consignations des moteurs",
            "Suivi technique des différents bâtiments du site de Rion-des-Landes"
        ],
        context: "Dans le cadre de mon alternance de Data Analyst chez EGGER Panneaux & Décors (Rion-des-Landes), j'accompagne les équipes techniques et maintenance dans la digitalisation du suivi des équipements et la sécurisation des procédures industrielles.",
        desc: [
            "Conception et développement d'une page Web interactive (HTML, CSS, JavaScript) dédiée au suivi du parc d'instruments de mesure du site (recherche rapide, filtrage par zone/bâtiment, suivi de l'état et de la métrologie).",
            "Structuration et suivi des indicateurs liés aux différents bâtiments du site industriel pour faciliter la maintenance et le pilotage.",
            "Automatisation complète d'un fichier Excel sous VBA pour la gestion des consignations des moteurs électriques (génération automatisée, contrôles de saisie et traçabilité sécurité)."
        ],
        result: "Centralisation des données techniques, gain de temps quotidien pour les techniciens et fiabilisation du suivi des consignations moteurs et des instruments de mesure.",
        tags: ["EGGER Panneaux & Décors", "HTML / CSS", "JavaScript", "Excel VBA", "Data Industrielle"]
    },
    {
        title: "Rapport journalier & Suivi des interventions – EGGER Panneaux & Décors",
        tool: "Excel (VBA) & Base de données SQL",
        period: "Stage · Avril 2025 – Juin 2025",
        category: ["egger", "web", "data"],
        img: "RapportInterventions.png",
        short: "Création d'un outil automatisé relié en SQL reproduisant l'interface web de suivi des interventions du site et générant chaque jour les rapports PDF par secteur.",
        highlights: [
            "Connexion SQL bidirectionnelle (lecture, ajout et suppression d'interventions)",
            "Reproduction fidèle du visuel web & filtrage Élec / Méca / Prod",
            "Génération quotidienne automatisée de rapports PDF en VBA"
        ],
        context: "Réalisé lors de mon stage Data Analyst chez EGGER Panneaux & Décors à Rion-des-Landes. L'objectif était de concevoir un outil Excel/VBA directement connecté à la base de données SQL du site, capable à la fois d'assurer un mode dégradé fidèle à l'intranet et d'automatiser l'édition quotidienne des rapports d'interventions.",
        desc: [
            "Connexion directe à la base de données SQL pour récupérer et mettre à jour en temps réel les interventions (Électrique, Mécanique, Production) avec leurs postes (Matin, Après-midi, Nuit), machines et consignes.",
            "Formulaires VBA permettant d'ajouter, modifier ou supprimer une intervention directement en base de données avec contrôle des champs.",
            "Reproduction exacte de l'ergonomie de l'application web interne : codes couleurs selon le statut (consigne, commencée, terminée), pagination et filtres dynamiques multicritères.",
            "Automatisation VBA de la génération quotidienne des rapports d'interventions au format PDF, prêts à être diffusés ou imprimés par poste de production."
        ],
        result: "Outil déployé sur le site garantissant la continuité opérationnelle et supprimant les manipulations manuelles lors des points quotidiens de maintenance et production.",
        tags: ["EGGER Panneaux & Décors", "SQL", "Excel VBA", "Automatisation PDF", "Reporting"]
    },
    {
        title: "Application Web & Statistiques – FC Chalosse",
        tool: "HTML, CSS, JavaScript & Supabase (PWA)",
        period: "Projet Personnel · Club de Football",
        category: ["web", "data"],
        img: "chalosse.webp",
        imgContain: true,
        short: "Application web mobile (PWA) complète pour gérer l'effectif, le calendrier, les compositions d'équipe, les statistiques de saison et l'élection de l'Homme du match.",
        highlights: [
            "Suivi des matchs, scores & calendrier (Équipe Première et Réserve)",
            "Statistiques de saison, compositions d'équipe & notation des joueurs",
            "Base de données temps réel Supabase & PWA installable (accès privé club)"
        ],
        context: "Projet né de ma double passion pour le football (15 ans de pratique et bénévole au club) et le développement data/web : créer une application mobile sur-mesure pour le FC Chalosse afin de suivre toute la saison sportive. L'accès à l'application en ligne est réservé aux membres du club.",
        desc: [
            "Calendrier et suivi des rencontres des équipes Première et Réserve : affichage des scores, détails de chaque match et historique.",
            "Module de gestion d'effectif et outil de création des compositions d'équipe avant chaque rencontre.",
            "Tableaux de bord statistiques de la saison (buts, passes, temps de jeu, performances) et système interactif de notation des joueurs permettant d'élire l'Homme du match.",
            "Architecture Progressive Web App (PWA) installable sur iOS/Android avec authentification sécurisée et base de données cloud Supabase (gestion des rôles joueur / entraîneur / administrateur)."
        ],
        result: "Digitalisation du suivi sportif du club et valorisation des données de match à travers une interface mobile rapide et intuitive.",
        tags: ["JavaScript", "HTML / CSS", "Supabase (PostgreSQL)", "PWA", "Sports Analytics"]
    },
    {
        title: "Projet Belha Collection – Analyse de reporting automatisé",
        tool: "Architecture Data, BI & Automatisation",
        period: "Projet · Janvier 2025 – Avril 2025",
        category: ["data"],
        img: "logo_SD.png",
        imgContain: true,
        short: "Normalisation des flux de données, amélioration de l'interprétabilité des indicateurs et mise en place d'une architecture logicielle évolutive de reporting.",
        highlights: [
            "Normalisation et fiabilisation des flux de données",
            "Travail sur l'interprétabilité des données et des KPI",
            "Conception d'une architecture logicielle évolutive"
        ],
        context: "Projet mené de janvier à avril 2025 visant à refondre et automatiser la chaîne de traitement et d'analyse de reporting pour Belha Collection.",
        desc: [
            "Audit, nettoyage et normalisation des flux de données entrants afin de garantir la cohérence et la qualité des informations exploitées.",
            "Structuration d'indicateurs clés (KPI) et conception de restitutions visuelles axées sur l'interprétabilité des données pour faciliter la prise de décision.",
            "Mise en place d'une architecture logicielle modulaire et évolutive permettant d'intégrer de nouveaux flux sans retravailler l'ensemble du pipeline."
        ],
        result: "Un système de reporting automatisé, maintenable et directement exploitable par les décideurs.",
        tags: ["Reporting Automatisé", "Architecture Data", "Normalisation de flux", "Data Visualisation"]
    },
    {
        title: "Analyse de performance d'une chaîne Twitch",
        tool: "Excel & Data Visualisation",
        period: "Projet Data Visualisation",
        category: ["data"],
        img: "twitch.png",
        imgContain: true,
        short: "Étude statistique et tableau de bord Excel analysant la croissance, la rétention d'audience et les performances de diffusion d'une chaîne Twitch.",
        highlights: [
            "Nettoyage et structuration des séries temporelles d'audience",
            "Calcul de KPI : spectateurs moyens, pics, abonnés et durée de stream",
            "Tableau de bord graphique retraçant l'évolution de la chaîne"
        ],
        context: "Analyse approfondie des données d'audience d'une chaîne de streaming Twitch afin de comprendre la dynamique de croissance de la communauté et d'identifier les leviers d'optimisation.",
        desc: [
            "Importation, nettoyage et mise en forme des données historiques de diffusion (heures streamées, moyenne de spectateurs, pics d'audience, nouveaux followers).",
            "Création d'indicateurs de suivi (taux de croissance mensuel, ratio spectateurs/durée, comparatifs par période).",
            "Conception d'un tableau de bord visuel sous Excel permettant de visualiser en un coup d'œil les tendances et les créneaux les plus porteurs."
        ],
        result: "Mise en évidence des facteurs clés d'engagement et synthèse visuelle claire de la trajectoire de la chaîne.",
        tags: ["Excel", "Data Visualisation", "Séries temporelles", "KPI"]
    },
    {
        title: "Modélisation & Régression linéaire sur les Coraux",
        tool: "Statistiques descriptives & Modélisation",
        period: "Projet Statistique",
        category: ["data"],
        img: "regression.png",
        short: "Étude de corrélation, détection de valeurs atypiques et construction d'un modèle de régression linéaire expliquant plus de 80 % de la variance (R² = 0,8084).",
        highlights: [
            "Analyse bivariée et détection des valeurs aberrantes (outliers)",
            "Modèle de régression linéaire : y = 0,0046x + 0,196",
            "Qualité d'ajustement élevée avec un R² = 0,8084"
        ],
        context: "Étude statistique portant sur des mesures biologiques de coraux, avec pour objectif de quantifier la relation entre deux variables quantitatives et de bâtir un modèle prédictif fiable.",
        desc: [
            "Analyse statistique descriptive univariée et bivariée (moyennes, dispersion, covariance et représentation en nuage de points).",
            "Identification et traitement des observations atypiques (point aberrant isolé en rouge) pour éviter de biaiser l'estimation des paramètres.",
            "Ajustement par la méthode des moindres carrés ordinaires : obtention de l'équation y = 0,0046x + 0,196 et d'un coefficient de détermination R² = 0,8084.",
            "Validation de la pertinence du modèle et interprétation concrète de la pente et du pouvoir explicatif."
        ],
        result: "Validation d'une forte corrélation linéaire positive (R ≈ 0,90) permettant d'estimer efficacement la variable cible.",
        tags: ["Régression linéaire", "Corrélation", "Statistiques descriptives", "Modélisation"]
    },
    {
        title: "Application Python de gestion d'une flotte de drones",
        tool: "Python & Fichiers CSV",
        period: "Projet Programmation Python",
        category: ["web", "data"],
        img: "python.png",
        short: "Développement de scripts Python pour enregistrer, historiser et exploiter les coordonnées GPS et journaux de vol de drones dans des fichiers CSV.",
        highlights: [
            "Saisie et enregistrement automatisé (date, position GPS, identifiant)",
            "Génération et mise à jour dynamique de fichiers <identifiant>.csv",
            "Structuration modulaire en fonctions Python"
        ],
        context: "Conception d'un outil en Python destiné à gérer la traçabilité des vols d'une flotte de drones à partir de leurs identifiants et relevés de positions GPS.",
        desc: [
            "Développement de fonctions Python dédiées à l'acquisition des données de vol (date du relevé, coordonnées GPS, identifiant unique du drone).",
            "Gestion automatisée de la persistance en fichiers CSV : création ou ouverture en mode ajout ('a+') du fichier associé à chaque drone pour conserver l'historique complet des positions.",
            "Lecture, parcours et traitement des fichiers CSV pour restituer les trajectoires et faciliter l'exploitation ultérieure des données."
        ],
        result: "Automatisation fiable de l'archivage des données GPS par drone, directement exploitable par des outils d'analyse.",
        tags: ["Python", "CSV", "Automatisation", "Traitement de fichiers"]
    }
];

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ===== Rendu des cartes projet avec filtre ===== */
const grid = $("#projects");

function renderProjects(filter = "all") {
    grid.innerHTML = "";
    PROJECTS.forEach((p, i) => {
        if (filter !== "all" && !p.category.includes(filter)) return;
        const el = document.createElement("article");
        el.className = "project glass tilt reveal in";
        el.tabIndex = 0;
        const bullets = (p.highlights || []).map(h => `<li>${h}</li>`).join("");
        el.innerHTML = `
            <div class="project-img ${p.imgContain ? 'contain' : ''}">
                <img src="${p.img}" alt="${p.title}" loading="lazy">
                <span class="project-num">0${i + 1}</span>
                <span class="project-period">${p.period}</span>
            </div>
            <div class="project-body">
                <span class="date">${p.tool}</span>
                <h3>${p.title}</h3>
                <p>${p.short}</p>
                <ul class="project-highlights">${bullets}</ul>
                <div class="chips project-chips">${p.tags.slice(0, 4).map(t => `<span>${t}</span>`).join("")}</div>
                <span class="more">Voir la fiche détaillée →</span>
            </div>`;
        el.addEventListener("click", () => openModal(i));
        el.addEventListener("keydown", e => { if (e.key === "Enter") openModal(i); });
        grid.appendChild(el);
    });
}
renderProjects();

$$("#project-filters .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        $$("#project-filters .filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(btn.dataset.filter);
    });
});

/* ===== Modale détaillée ===== */
const modal = $("#modal");
function openModal(i) {
    const p = PROJECTS[i];
    const img = $("#m-img");
    img.src = p.img;
    img.alt = p.title;
    img.className = p.imgContain ? "contain" : "";
    $("#m-title").textContent = p.title;
    $("#m-tool").textContent = "🛠️ " + p.tool;
    $("#m-period").textContent = "📅 " + p.period;
    $("#m-context").textContent = p.context;
    $("#m-desc").innerHTML = "<ul>" + p.desc.map(d => `<li>${d}</li>`).join("") + "</ul>";
    $("#m-result").textContent = p.result;
    $("#m-tags").innerHTML = p.tags.map(t => `<span>${t}</span>`).join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}
function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}
$$("[data-close]").forEach(b => b.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ===== Apparition au scroll (chargement progressif) ===== */
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const siblings = [...e.target.parentElement.children].filter(c => c.classList.contains("reveal"));
            e.target.style.transitionDelay = Math.min(siblings.indexOf(e.target), 5) * 90 + "ms";
            e.target.classList.add("in");
            io.unobserve(e.target);
            if (e.target.classList.contains("stats")) countUp();
        }
    });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
$$(".reveal").forEach(el => io.observe(el));

/* ===== Compteurs ===== */
function countUp() {
    $$("[data-count]").forEach(n => {
        const target = +n.dataset.count; let v = 0;
        const t = setInterval(() => { v++; n.textContent = v; if (v >= target) clearInterval(t); }, 180);
    });
}

/* ===== Texte tapé ===== */
const words = [
    "Alternant chez EGGER Panneaux & Décors",
    "Étudiant en Master 1 SIGLIS",
    "BUT Science des Données (VCOD)",
    "Passionné de Football & Data"
];
let w = 0, c = 0, del = false;
(function type() {
    const word = words[w];
    $("#typed").textContent = word.slice(0, c);
    if (!del && c < word.length) c++;
    else if (!del) { del = true; return setTimeout(type, 1600); }
    else if (c > 0) c--;
    else { del = false; w = (w + 1) % words.length; }
    setTimeout(type, del ? 30 : 65);
})();

/* ===== Barre de progression, nav active, header ===== */
const sections = $$("main section[id]");
const links = $$("#nav-links a");
function onScroll() {
    const h = document.documentElement;
    $("#progress-bar").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
    $("#nav").classList.toggle("scrolled", h.scrollTop > 30);
    let current = "";
    sections.forEach(s => { if (h.scrollTop >= s.offsetTop - 220) current = s.id; });
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ===== Menu mobile ===== */
$("#burger").addEventListener("click", () => $("#nav").classList.toggle("open"));
links.forEach(l => l.addEventListener("click", () => $("#nav").classList.remove("open")));

/* ===== Lueur qui suit la souris + effet tilt ===== */
const glow = $("#glow");
addEventListener("mousemove", e => { glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; });

if (matchMedia("(hover: hover)").matches) {
    document.addEventListener("mousemove", e => {
        const card = e.target.closest && e.target.closest(".tilt");
        $$(".tilt.hovering").forEach(t => { if (t !== card) { t.classList.remove("hovering"); t.style.transform = ""; } });
        if (!card) return;
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.classList.add("hovering");
        card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-4px)`;
    });
}
