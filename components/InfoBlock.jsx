/* ============================================
   iLoveLearnDocs - InfoBlock component
   Short info note with an icon
   Sharp edges, accent left border
   ============================================ */

function InfoBlock({ children }) {
  if (!children) return null;

  return (
    <div className="info-block">
      <img
        src="../icons/info-icon.svg"
        alt=""
        className="info-block__icon"
        aria-hidden="true"
      />
      <div className="info-block__text">
        {children}
      </div>
    </div>
  );
}