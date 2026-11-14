/* ============================================
   iLoveLearnDocs - Breadcrumbs component
   Shows the path: Home / Node.js / Current page
   Language is detected in App.jsx, items come ready
   ============================================ */

function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  // Detect current language for the aria-label
  const isEnglish = window.location.pathname.startsWith('/en/');
  const ariaLabel = isEnglish ? 'Breadcrumbs' : 'Хлебные крошки';

  return (
    <nav className="breadcrumbs" aria-label={ariaLabel}>
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="breadcrumbs__item">
              {isLast ? (
                <span className="breadcrumbs__current">{item.label}</span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
              {!isLast && (
                <span className="breadcrumbs__sep" translate="no"> / </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}