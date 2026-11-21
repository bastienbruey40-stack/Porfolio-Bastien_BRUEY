/* ===== Données des projets ===== */
const PROJECTS = [
    {
        title: "Automatisation d'un site web en fichier Excel",
        tool: "Excel (VBA) & SQL",
        img: "RapportInterventions.png",
        short: "Reproduire un site web de suivi d'interventions directement dans Excel, relié à une base de données.",
        desc: [
            "Connexion à une base de données",
            "Ajout / suppression des interventions dans la base",
            "Reproduction du même visuel que sur le web",
            "Filtrage des interventions selon certaines conditions"
        ],
        tags: ["Excel", "VBA", "SQL"]
    },
    {
        title: "Analyse d'une chaîne Twitch",
        tool: "Excel",
        img: "twitch.png",
        short: "Analyse complète de l'évolution d'une chaîne Twitch avec graphiques et indicateurs.",
        desc: ["Analyse de l'évolution de la chaîne", "Graphiques et indicateurs de suivi"],
        tags: ["Excel", "Data viz"]
    },
    {
        title: "Régression sur les coraux",
        tool: "Statistiques descriptives",
        img: "regression.png",
        short: "Modèle de régression et analyse de corrélation appliqués à des données sur les coraux.",
        desc: ["Construction d'un modèle de régression", "Analyse de corrélation entre les variables"],
        tags: ["Régression", "Statistiques"]
    },
    {
        title: "Gestion de drones",
        tool: "Python",
        img: "python.png",
        short: "Implémentation Python pour gérer une flotte de drones à partir de fichiers CSV.",
        desc: ["Implémentation du code Python", "Gestion des fichiers CSV"],
        tags: ["Python", "CSV"]
    }
];

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ===== Rendu des cartes projet ===== */
const grid = $("#projects");
PROJECTS.forEach((p, i) => {
    const el = document.createElement("article");
    el.className = "project glass tilt reveal";
    el.tabIndex = 0;
    el.innerHTML = `
        <div class="project-img"><img src="${p.img}" alt="${p.title}" loading="lazy"><span class="project-num">0${i + 1}</span></div>
        <div class="project-body">
            <span class="date">${p.tool}</span>
            <h3>${p.title}</h3>
            <p>${p.short}</p>
            <span class="more">Voir le projet →</span>
        </div>`;
    el.addEventListener("click", () => openModal(i));
    el.addEventListener("keydown", e => { if (e.key === "Enter") openModal(i); });
    grid.appendChild(el);
});

/* ===== Modale ===== */
const modal = $("#modal");
function openModal(i) {
    const p = PROJECTS[i];
    $("#m-img").src = p.img;
    $("#m-img").alt = p.title;
    $("#m-title").textContent = p.title;
    $("#m-tool").textContent = "Outil : " + p.tool;
    $("#m-desc").innerHTML = "<ul>" + p.desc.map(d => `<li>${d}</li>`).join("") + "</ul>";
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
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
$$(".reveal").forEach(el => io.observe(el));

/* ===== Compteurs ===== */
function countUp() {
    $$("[data-count]").forEach(n => {
        const target = +n.dataset.count; let v = 0;
        const t = setInterval(() => { v++; n.textContent = v; if (v >= target) clearInterval(t); }, 250);
    });
}

/* ===== Texte tapé ===== */
const words = ["Data Analyst en devenir", "Passionné de football", "Futur Master SIGLIS"];
let w = 0, c = 0, del = false;
(function type() {
    const word = words[w];
    $("#typed").textContent = word.slice(0, c);
    if (!del && c < word.length) c++;
    else if (!del) { del = true; return setTimeout(type, 1500); }
    else if (c > 0) c--;
    else { del = false; w = (w + 1) % words.length; }
    setTimeout(type, del ? 35 : 75);
})();

/* ===== Barre de progression, nav active, header ===== */
const sections = $$("main section[id]");
const links = $$("#nav-links a");
function onScroll() {
    const h = document.documentElement;
    $("#progress-bar").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
    $("#nav").classList.toggle("scrolled", h.scrollTop > 30);
    let current = "";
    sections.forEach(s => { if (h.scrollTop >= s.offsetTop - 200) current = s.id; });
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
        card.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
    });
}
