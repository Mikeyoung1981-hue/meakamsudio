/* Builds the header, footer, card lists and game pages.
   You should not need to edit this file — edit js/projects.js instead. */

(function () {
  const P = window.PROJECTS || [];
  const S = window.STUDIO || {};
  const page = document.body.dataset.page || "";

  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Header ---------- */
  const links = [
    ["index.html", "Home", "home"],
    ["games.html", "Games", "games"],
    ["apps.html", "Apps", "apps"],
    ["upcoming.html", "Coming Soon", "upcoming"],
    ["about.html", "About", "about"],
    ["support.html", "Support", "support"],
  ];
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="wrap">
        <a class="logo" href="index.html"><span class="dot"></span>${esc(S.name)}</a>
        <button class="menu-btn" aria-label="Menu">☰</button>
        <nav class="nav">
          ${links.map(([href, label, key]) =>
            `<a href="${href}" class="${key === page ? "active" : ""}">${label}</a>`).join("")}
        </nav>
      </div>`;
    header.querySelector(".menu-btn").onclick = () =>
      header.querySelector(".nav").classList.toggle("open");
  }

  /* ---------- Footer ---------- */
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="wrap">
        <div>© ${new Date().getFullYear()} ${esc(S.name)} · Made by ${esc(S.developerName)}</div>
        <nav>
          <a href="games.html">Games</a>
          <a href="apps.html">Apps</a>
          <a href="support.html">Support</a>
          <a href="privacy.html">Privacy</a>
          <a href="mailto:${esc(S.email)}">Contact</a>
          ${S.facebook ? `<a href="${esc(S.facebook)}" target="_blank" rel="noopener">Facebook</a>` : ""}
        </nav>
      </div>`;
  }

  /* ---------- Cards ---------- */
  function card(p) {
    const shot = p.screenshots && p.screenshots[0];
    const soon = p.status === "coming-soon";
    return `
      <a class="card" href="project.html?id=${encodeURIComponent(p.id)}">
        <div class="card-art" style="background:${esc(p.color || "#333")}">
          ${shot ? `<img class="shot" src="${esc(shot)}" alt="" loading="lazy">` : ""}
          <img class="icon" src="${esc(p.icon)}" alt="${esc(p.name)} icon"
               onerror="this.style.display='none'">
          <span class="badge ${soon ? "soon" : ""}">${soon ? "Coming soon" : "Out now"}</span>
        </div>
        <div class="card-body">
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.tagline)}</p>
        </div>
      </a>`;
  }

  // Any element like <div data-list="game" data-status="released"></div>
  document.querySelectorAll("[data-list]").forEach((el) => {
    const kind = el.dataset.list;          // "game", "app" or "all"
    const status = el.dataset.status;      // optional
    const items = P.filter((p) =>
      (kind === "all" || p.kind === kind) && (!status || p.status === status));
    el.innerHTML = items.length
      ? `<div class="grid">${items.map(card).join("")}</div>`
      : `<div class="empty">${esc(el.dataset.empty || "Nothing here yet — check back soon.")}</div>`;
  });

  /* ---------- Single game / app page ---------- */
  const holder = document.getElementById("project");
  if (holder) {
    const id = new URLSearchParams(location.search).get("id");
    const p = P.find((x) => x.id === id);
    if (!p) {
      holder.innerHTML = `<section class="wrap"><div class="empty">Sorry, that page can't be found.
        <br><br><a class="btn" href="games.html">See all games</a></div></section>`;
      return;
    }
    document.title = `${p.name} — ${S.name}`;

    const ytId = (url) => {
      const m = String(url || "").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
      return m ? m[1] : "";
    };
    const vid = ytId(p.video);
    const store = p.links && p.links.appStore;

    holder.innerHTML = `
      <section class="project-hero">
        <div class="wrap project-top">
          <img class="icon" src="${esc(p.icon)}" alt="" onerror="this.style.display='none'">
          <div>
            <h1>${esc(p.name)}</h1>
            <div class="tagline">${esc(p.tagline)}</div>
            <div class="chips">
              <span class="chip">${p.kind === "app" ? "App" : "Game"}</span>
              ${(p.platforms || []).map((x) => `<span class="chip">${esc(x)}</span>`).join("")}
              <span class="chip">${esc(p.when)}</span>
            </div>
            ${store
              ? `<a class="app-store-badge" href="${esc(store)}" target="_blank" rel="noopener">
                   <span><small>Download on the</small><strong>App Store</strong></span></a>`
              : `<span class="chip" style="background:var(--accent-2);color:#1a1a1a;font-weight:700">Coming soon</span>`}
            ${p.links && p.links.facebook
              ? ` <a class="btn ghost" href="${esc(p.links.facebook)}" target="_blank" rel="noopener">Follow on Facebook</a>` : ""}
          </div>
        </div>
      </section>

      ${p.screenshots && p.screenshots.length ? `
      <section style="padding-top:8px">
        <div class="wrap shots">
          ${p.screenshots.map((s) => `<img src="${esc(s)}" alt="${esc(p.name)} screenshot" loading="lazy">`).join("")}
        </div>
      </section>` : ""}

      ${vid ? `
      <section style="padding-top:8px">
        <div class="wrap"><div class="video">
          <iframe src="https://www.youtube-nocookie.com/embed/${vid}" title="${esc(p.name)} trailer"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div></div>
      </section>` : ""}

      <section>
        <div class="wrap two-col">
          <div class="prose">
            <h2 style="margin-top:0">About</h2>
            ${(p.about || []).map((t) => `<p>${esc(t)}</p>`).join("")}
          </div>
          <div>
            <h2 style="margin-top:0">Features</h2>
            <ul class="features">${(p.features || []).map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
          </div>
        </div>
      </section>

      <div class="lightbox"><img alt=""></div>`;

    const lb = holder.querySelector(".lightbox");
    holder.querySelectorAll(".shots img").forEach((img) => {
      img.onclick = () => { lb.querySelector("img").src = img.src; lb.classList.add("open"); };
    });
    lb.onclick = () => lb.classList.remove("open");
  }
})();
