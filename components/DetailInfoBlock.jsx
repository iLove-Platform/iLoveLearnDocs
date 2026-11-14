/* ============================================
   iLoveLearnDocs - DetailInfoBlock component
   Detailed info block with icon and optional title
   Sharp edges, card background
   ============================================ */

function DetailInfoBlock({ title, children }) {
  if (!children) return null;

  return (
    <div className="detail-info-block">
      <img
        src="../icons/detail-info-icon.svg"
        alt=""
        className="detail-info-block__icon"
        aria-hidden="true"
      />
      <div className="detail-info-block__body">
        {title && (
          <h3 className="detail-info-block__title">{title}</h3>
        )}
        <div className="detail-info-block__text">
          {children}
        </div>
      </div>
    </div>
  );
}