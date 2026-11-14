/* ============================================
   iLoveLearnDocs - Header component
   Logo image, navigation, language switcher
   Shows the link to the other language version
   ============================================ */

function Header() {
  // Detect current language from the URL
  // /en/... -> English (US), otherwise Russian
  const path = window.location.pathname;
  const isEnglish = path.startsWith('/en/');

  const otherLangHref = isEnglish ? '/' : '/en/';
  const otherLangLabel = isEnglish ? 'RU' : 'EN';
  const otherLangTitle = isEnglish ? 'Русская версия' : 'English (US) version';

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo image - not translated, blocks translation */}
        <a href="/" className="header__logo" translate="no">
          <img
            src="../../icons/logo.png"
            alt="iLoveLearnDocs"
            className="header__logo-img"
          />
        </a>

        <nav className="header__nav">
          <a href="/nodejs/" translate="no">Node.js</a>

          {/* Language switcher - leads to the other version */}
          <a
            href={otherLangHref}
            className="header__lang"
            title={otherLangTitle}
            translate="no"
          >
            {otherLangLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}