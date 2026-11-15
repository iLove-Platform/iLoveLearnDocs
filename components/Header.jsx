
window.Header = function Header({ logoSrc, homeUrl }) {
    return (
        <div className="header-content">
            <a
                className="header-logo"
                href={homeUrl}
                aria-label="iLoveLearnDocs — главная страница"
            >
                <img src={logoSrc} alt="iLoveLearnDocs" />
            </a>
        </div>
    );
};
