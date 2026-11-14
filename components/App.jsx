/* ============================================
   iLoveLearnDocs - App component
   Collects the page and renders blocks into anchors
   Uses portals to render blocks into placeholders
   Language-aware breadcrumbs
   ============================================ */

function App({ pageContent }) {
  const mainRef = React.useRef(null);
  const [anchors, setAnchors] = React.useState([]);
  const [contentReady, setContentReady] = React.useState(false);

  // Detect current language from the URL
  const path = window.location.pathname;
  const isEnglish = path.startsWith('/en/');

  // Breadcrumbs for the current language
  const breadcrumbItems = isEnglish
    ? [
        { label: 'Home', href: '/en/' },
        { label: 'Node.js', href: '/en/nodejs/' },
        { label: 'What is Node.js' },
      ]
    : [
        { label: 'Главная', href: '/' },
        { label: 'Node.js', href: '/nodejs/' },
        { label: 'Что такое Node.js' },
      ];

  /**
   * Insert the page content from the <template> into <main>.
   * After insertion, find block anchors and store them in state.
   */
  React.useEffect(() => {
    if (!mainRef.current || !pageContent) return;

    // Clear previous content (safe on re-render)
    mainRef.current.innerHTML = '';
    mainRef.current.appendChild(pageContent.cloneNode(true));

    const main = mainRef.current;
    const found = [];

    main.querySelectorAll('[data-block="info"]').forEach((el) => {
      found.push({
        type: 'info',
        el,
        text: el.getAttribute('data-text') || '',
      });
    });

    main.querySelectorAll('[data-block="detail"]').forEach((el) => {
      found.push({
        type: 'detail',
        el,
        title: el.getAttribute('data-title') || '',
        text: el.getAttribute('data-text') || '',
      });
    });

    main.querySelectorAll('[data-block="code"]').forEach((el) => {
      found.push({
        type: 'code',
        el,
        language: el.getAttribute('data-language') || 'js',
        code: el.getAttribute('data-code') || '',
      });
    });

    setAnchors(found);
    setContentReady(true);
  }, [pageContent]);

  /**
   * Render a block into its anchor using a portal.
   */
  function renderBlock(anchor, index) {
    if (!anchor.el) return null;

    if (anchor.type === 'info') {
      return ReactDOM.createPortal(
        <InfoBlock>{anchor.text}</InfoBlock>,
        anchor.el,
        `info-${index}`
      );
    }

    if (anchor.type === 'detail') {
      return ReactDOM.createPortal(
        <DetailInfoBlock title={anchor.title}>{anchor.text}</DetailInfoBlock>,
        anchor.el,
        `detail-${index}`
      );
    }

    if (anchor.type === 'code') {
      return ReactDOM.createPortal(
        <CodeBlock language={anchor.language} code={anchor.code} />,
        anchor.el,
        `code-${index}`
      );
    }

    return null;
  }

  return (
    <div className="page">
      <Header />

      <Breadcrumbs items={breadcrumbItems} />

      <main className="doc" ref={mainRef}>
        {/* Content from <template id="page-content"> is inserted here */}
      </main>

      {/* Blocks are rendered into anchors via portals */}
      {contentReady && anchors.map((anchor, index) => renderBlock(anchor, index))}

      <Footer />
    </div>
  );
}