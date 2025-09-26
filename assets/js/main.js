// main.js - Interaktionen für Navigation und aktive Links

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace(/\\/g, '/');
  const isEmbedded = window.top !== window.self;
  if (isEmbedded) {
    document.documentElement.classList.add('embedded');
  }

  function resolvePrefix() {
    const p = path.toLowerCase();
    const marker = '/lern-portal/';
    const idx = p.lastIndexOf(marker);
    let after = '';
    if (idx >= 0) {
      after = path.slice(idx + marker.length);
    } else {
      // Fallback: alles nach letztem Ordner als Datei annehmen
      after = path.split('/').slice(-2).join('/');
    }
    const segs = after.split('/').filter(Boolean);
    const depth = Math.max(0, segs.length - 1);
    return depth === 0 ? '' : '../'.repeat(depth);
  }

  function buildNavbar(prefix) {
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" aria-label="Hauptnavigation">
      <div class="container">
        <a class="navbar-brand" href="${prefix}index.html" data-section="home">Lern-Portal</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Menü ein-/ausblenden">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="${prefix}index.html" data-section="home">Start</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="${prefix}1_OOP/index.html" id="navOOP" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-section="1_oop">OOP</a>
              <ul class="dropdown-menu" aria-labelledby="navOOP">
                <li><a class="dropdown-item" href="${prefix}1_OOP/index.html" data-section="1_oop" data-page="1_oop/index.html">Überblick</a></li>
                <li><a class="dropdown-item" href="${prefix}1_OOP/1_uml_modellierung.html" data-section="1_oop" data-page="1_oop/1_uml_modellierung.html">UML-Modellierung</a></li>
                <li><a class="dropdown-item" href="${prefix}1_OOP/2_prinzipien_oop.html" data-section="1_oop" data-page="1_oop/2_prinzipien_oop.html">Prinzipien</a></li>
                <li><a class="dropdown-item" href="${prefix}1_OOP/ruby_grundlagen.html" data-section="1_oop" data-page="1_oop/ruby_grundlagen.html">Ruby-Grundlagen</a></li>
                <li><a class="dropdown-item" href="${prefix}1_OOP/3_implementierung.html" data-section="1_oop" data-page="1_oop/3_implementierung.html">Implementierung</a></li>
                <li><a class="dropdown-item" href="${prefix}1_OOP/4_entwurfsmuster.html" data-section="1_oop" data-page="1_oop/4_entwurfsmuster.html">Entwurfsmuster</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="${prefix}2_Datenbanken/index.html" id="navDB" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-section="2_datenbanken">Datenbanken</a>
              <ul class="dropdown-menu" aria-labelledby="navDB">
                <li><a class="dropdown-item" href="${prefix}2_Datenbanken/index.html" data-section="2_datenbanken" data-page="2_datenbanken/index.html">Überblick</a></li>
                <li><a class="dropdown-item" href="${prefix}2_Datenbanken/1_modellierung_normalisierung.html" data-section="2_datenbanken" data-page="2_datenbanken/1_modellierung_normalisierung.html">Modellierung &amp; Normalisierung</a></li>
                <li><a class="dropdown-item" href="${prefix}2_Datenbanken/2_sql.html" data-section="2_datenbanken" data-page="2_datenbanken/2_sql.html">SQL</a></li>
                <li><a class="dropdown-item" href="${prefix}2_Datenbanken/3_datenbankkonzepte.html" data-section="2_datenbanken" data-page="2_datenbanken/3_datenbankkonzepte.html">Datenbankkonzepte</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="${prefix}3_Webentwicklung/index.html" id="navWeb" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-section="3_webentwicklung">Webentwicklung</a>
              <ul class="dropdown-menu" aria-labelledby="navWeb">
                <li><a class="dropdown-item" href="${prefix}3_Webentwicklung/index.html" data-section="3_webentwicklung" data-page="3_webentwicklung/index.html">Überblick</a></li>
                <li><a class="dropdown-item" href="${prefix}3_Webentwicklung/1_html.html" data-section="3_webentwicklung" data-page="3_webentwicklung/1_html.html">HTML</a></li>
                <li><a class="dropdown-item" href="${prefix}3_Webentwicklung/2_css.html" data-section="3_webentwicklung" data-page="3_webentwicklung/2_css.html">CSS</a></li>
                <li><a class="dropdown-item" href="${prefix}3_Webentwicklung/3_web_konzepte_sicherheit.html" data-section="3_webentwicklung" data-page="3_webentwicklung/3_web_konzepte_sicherheit.html">Konzepte &amp; Sicherheit</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="${prefix}4_Netzwerke/index.html" id="navNet" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-section="4_netzwerke">Netzwerke</a>
              <ul class="dropdown-menu" aria-labelledby="navNet">
                <li><a class="dropdown-item" href="${prefix}4_Netzwerke/index.html" data-section="4_netzwerke" data-page="4_netzwerke/index.html">Überblick</a></li>
                <li><a class="dropdown-item" href="${prefix}4_Netzwerke/1_netzwerk_grundlagen.html" data-section="4_netzwerke" data-page="4_netzwerke/1_netzwerk_grundlagen.html">Netzwerk-Grundlagen</a></li>
                <li><a class="dropdown-item" href="${prefix}4_Netzwerke/2_sicherheit_protokolle.html" data-section="4_netzwerke" data-page="4_netzwerke/2_sicherheit_protokolle.html">Sicherheit &amp; Protokolle</a></li>
                <li><a class="dropdown-item" href="${prefix}4_Netzwerke/3_datenschutz_datensicherheit.html" data-section="4_netzwerke" data-page="4_netzwerke/3_datenschutz_datensicherheit.html">Datenschutz &amp; -sicherheit</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="${prefix}5_BWL_Projektmanagement/index.html" id="navBWL" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-section="5_bwl_projektmanagement">BWL &amp; PM</a>
              <ul class="dropdown-menu" aria-labelledby="navBWL">
                <li><a class="dropdown-item" href="${prefix}5_BWL_Projektmanagement/index.html" data-section="5_bwl_projektmanagement" data-page="5_bwl_projektmanagement/index.html">Überblick</a></li>
                <li><a class="dropdown-item" href="${prefix}5_BWL_Projektmanagement/1_kosten_leistungsrechnung.html" data-section="5_bwl_projektmanagement" data-page="5_bwl_projektmanagement/1_kosten_leistungsrechnung.html">Kosten &amp; Leistung</a></li>
                <li><a class="dropdown-item" href="${prefix}5_BWL_Projektmanagement/2_projektmanagement.html" data-section="5_bwl_projektmanagement" data-page="5_bwl_projektmanagement/2_projektmanagement.html">Projektmanagement</a></li>
                <li><a class="dropdown-item" href="${prefix}5_BWL_Projektmanagement/3_angebotsvergleich_beschaffung.html" data-section="5_bwl_projektmanagement" data-page="5_bwl_projektmanagement/3_angebotsvergleich_beschaffung.html">Angebotsvergleich</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
  }

  function buildFooter(prefix) {
    return `
    <footer aria-label="Footer">
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
        <span>© Lern-Portal Prüfungsvorbereitung</span>
        <div>
          <a href="#">Impressum</a>
          <span class="mx-2">|</span>
          <a href="#">Kontakt</a>
        </div>
      </div>
    </footer>`;
  }

  // Inject Navbar/Footer wenn sie fehlen (keine Installation nötig)
  const hasNavbar = !!document.querySelector('nav.navbar');
  const hasFooter = !!document.querySelector('footer');
  const prefix = resolvePrefix();
  // Nur dann injizieren, wenn die Seite nicht eingebettet ist
  if (!isEmbedded) {
    if (!hasNavbar) {
      document.body.insertAdjacentHTML('afterbegin', buildNavbar(prefix));
    }
    if (!hasFooter) {
      document.body.insertAdjacentHTML('beforeend', buildFooter(prefix));
    }
  }

  // Danach DOM erneut selektieren
  const dropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
  const sectionLinks = document.querySelectorAll('.navbar a[data-section]');
  const pageLinks = document.querySelectorAll('.navbar a[data-page]');
  const pathLower = path.toLowerCase();
  const sections = ['1_oop', '2_datenbanken', '3_webentwicklung', '4_netzwerke', '5_bwl_projektmanagement'];

  function clearActive() {
    document.querySelectorAll('.navbar .nav-link.active, .navbar .dropdown-item.active').forEach(el => {
      el.classList.remove('active');
      el.removeAttribute('aria-current');
    });
  }

  function sectionFromPath(p) {
    const pl = p.toLowerCase();
    if (pl.includes('/1_oop/')) return '1_oop';
    if (pl.includes('/2_datenbanken/')) return '2_datenbanken';
    if (pl.includes('/3_webentwicklung/')) return '3_webentwicklung';
    if (pl.includes('/4_netzwerke/')) return '4_netzwerke';
    if (pl.includes('/5_bwl_projektmanagement/')) return '5_bwl_projektmanagement';
    return 'home';
  }

  function setActiveFromPath(p) {
    clearActive();
    const sec = sectionFromPath(p);
    const secLink = document.querySelector(`.navbar a.nav-link[data-section="${sec}"]`);
    if (sec === 'home') {
      const home = document.querySelector('.navbar a.nav-link[data-section="home"]');
      if (home) { home.classList.add('active'); home.setAttribute('aria-current', 'page'); }
    } else if (secLink) {
      secLink.classList.add('active');
      secLink.setAttribute('aria-current', 'page');
    }
    // Mark specific page if data-page matches filename
    const parts = p.split('/');
    const file = parts[parts.length - 1] || 'index.html';
    const item = document.querySelector(`.navbar .dropdown-item[data-page$="${file}"]`);
    if (item) {
      item.classList.add('active');
      item.setAttribute('aria-current', 'page');
    }
  }

  const currentSection = sections.find((sec) => pathLower.includes(`/${sec}/`)) || (pathLower.endsWith('/1_oop/index.html') ? '1_oop' :
    pathLower.endsWith('/2_datenbanken/index.html') ? '2_datenbanken' :
    pathLower.endsWith('/3_webentwicklung/index.html') ? '3_webentwicklung' :
    pathLower.endsWith('/4_netzwerke/index.html') ? '4_netzwerke' :
    pathLower.endsWith('/5_bwl_projektmanagement/index.html') ? '5_bwl_projektmanagement' :
    (pathLower.endsWith('/index.html') || pathLower.endsWith('/lern-portal/') || pathLower.endsWith('/lern-portal')) ? 'home' : null);

  if (currentSection) {
    sectionLinks.forEach((link) => {
      const linkSection = link.dataset.section;
      if (!linkSection) return;
      if (currentSection === 'home' && linkSection === 'home') {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
      if (currentSection !== 'home' && linkSection === currentSection) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
        const parent = link.closest('.dropdown');
        if (parent) {
          const toggle = parent.querySelector('.dropdown-toggle');
          if (toggle && toggle !== link) {
            toggle.classList.add('active');
          }
        }
      }
    });
  }

  const normalizedPath = pathLower.endsWith('/') ? `${pathLower}index.html` : pathLower;
  pageLinks.forEach((link) => {
    const target = link.dataset.page;
    if (!target) return;
    const normalizedTarget = target.toLowerCase();
    if (normalizedPath.endsWith(`/${normalizedTarget}`)) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // SHELL-Modus: Wenn eine Seite ein #pageFrame iframe enthält, alle Nav-Links dort laden
  const frame = document.getElementById('pageFrame');
  if (frame) {
    document.querySelectorAll('.navbar a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      a.setAttribute('target', 'pageFrame');
      a.addEventListener('click', (e) => {
        // Auf Desktop soll Hauptlink direkt Overview im Frame laden
        e.preventDefault();
        frame.src = href;
        setActiveFromPath(href);
      });
    });

    frame.addEventListener('load', () => {
      try {
        const framePath = frame.contentWindow.location.pathname || '';
        setActiveFromPath(framePath);
      } catch (_) {
        // ignorieren (file:// Einschränkungen in manchen Browsern)
      }
    });
  }

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      const href = toggle.getAttribute('href');
      const width = window.innerWidth;
      const dropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);

      if (width >= 992) {
        if (href && href !== '#') {
          event.preventDefault();
          if (frame) {
            frame.src = href;
            setActiveFromPath(href);
          } else {
            window.location.href = href;
          }
        }
        return;
      }

      const isOpen = toggle.dataset.open === 'true';
      if (!isOpen) {
        event.preventDefault();
        toggle.dataset.open = 'true';
        dropdown.show();
      } else {
        toggle.dataset.open = 'false';
      }
    });

    toggle.addEventListener('hidden.bs.dropdown', () => {
      toggle.dataset.open = 'false';
    });
  });
});
