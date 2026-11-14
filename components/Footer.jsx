/* ============================================
   iLoveLearnDocs - Footer component
   Auto-updated year, no copyright symbol
   Language-aware links
   ============================================ */

function Footer() {
  const year = new Date().getFullYear();

  // Detect current language from the URL
  const path = window.location.pathname;
  const isEnglish = path.startsWith('/en/');

  // Link prefixes for the current language
  const prefix = isEnglish ? '/en' : '';

  const freeUseHref = `${prefix}/license/free-use/`;
  const mitHref = `${prefix}/license/mit/`;

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Site name - not translated, blocks translation */}
        <span className="footer__brand" translate="no">
          iLoveLearnDocs
        </span>

        <span className="footer__year">{year}</span>

        <nav className="footer__links">
          <a href={freeUseHref}>
            {isEnglish ? 'Free use' : 'Свободное использование'}
          </a>
          <a href={mitHref}>
            {isEnglish ? 'MIT License' : 'Лицензия MIT'}
          </a>
        </nav>
      </div>
    </footer>
  );
}