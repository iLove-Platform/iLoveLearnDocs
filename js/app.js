/* ============================================
   iLoveLearnDocs - app entry point
   ============================================ */

(function () {
  'use strict';

  /**
   * Site constants
   */
  const SITE_NAME = 'iLoveLearnDocs';
  const CONTENT_TEMPLATE_ID = 'page-content';
  const ROOT_ID = 'root';

  /**
   * Read page content from the <template> tag.
   * Content lives in plain HTML, so it stays separate from components.
   */
  function getPageContent() {
    const template = document.getElementById(CONTENT_TEMPLATE_ID);
    if (!template) {
      console.warn(
        `[${SITE_NAME}] Template #${CONTENT_TEMPLATE_ID} not found. ` +
        'Page content will be empty.'
      );
      return null;
    }
    return template.content.cloneNode(true);
  }

  /**
   * Highlight all code blocks with Prism.
   * Called after React renders the page and after CodeBlock mounts.
   */
  function highlightCode() {
    if (!window.Prism) {
      console.warn(`[${SITE_NAME}] Prism.js is not loaded. Code highlighting is skipped.`);
      return;
    }
    window.Prism.highlightAll();
  }

  /**
   * Render the app into #root.
   */
  function renderApp() {
    const rootElement = document.getElementById(ROOT_ID);
    if (!rootElement) {
      console.error(`[${SITE_NAME}] Root element #${ROOT_ID} not found.`);
      return;
    }

    if (typeof App !== 'function') {
      console.error(`[${SITE_NAME}] Component <App /> is not defined. Check components/App.jsx.`);
      return;
    }

    const content = getPageContent();
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App pageContent={content} />);
  }

  /**
   * Boot the app.
   */
  function init() {
    console.log(`[${SITE_NAME}] Starting...`);
    renderApp();

    // Prism needs the DOM to be ready. Wait a tick so React can mount.
    // CodeBlock also highlights itself, but this catches any static code.
    window.setTimeout(highlightCode, 0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();