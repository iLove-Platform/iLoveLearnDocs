/* ============================================
   iLoveLearnDocs - CodeBlock component
   Code block with language label and copy button
   Slightly rounded edges, Fira Code, Prism highlight
   ============================================ */

function CodeBlock({ code, language = 'js' }) {
  const [copied, setCopied] = React.useState(false);
  const codeRef = React.useRef(null);

  // Highlight the code with Prism after mount and on code change
  React.useEffect(() => {
    if (window.Prism && codeRef.current) {
      window.Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  // Copy code to clipboard
  function handleCopy() {
    if (!navigator.clipboard) {
      console.warn('[iLoveLearnDocs] Clipboard API is not available.');
      return;
    }

    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    }).catch((error) => {
      console.error('[iLoveLearnDocs] Failed to copy code:', error);
    });
  }

  if (!code) return null;

  return (
    <div className="code-block">
      <div className="code-block__top">
        <span className="code-block__lang">{language}</span>
        <button
          type="button"
          className="code-block__copy"
          onClick={handleCopy}
        >
          {copied ? 'Скопировано' : 'Копировать'}
        </button>
      </div>
      <pre className="code-block__pre">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}