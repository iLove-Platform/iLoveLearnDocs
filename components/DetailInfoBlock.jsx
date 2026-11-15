
window.DetailInfoBlock = function DetailInfoBlock({ iconSrc, content }) {
    return (
        <>
            <img
                className="detail-info-block-icon"
                src={iconSrc}
                alt=""
                aria-hidden="true"
            />

            <div
                className="detail-info-block-content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </>
    );
};

// Находим все подробные информационные блоки
document.querySelectorAll(
    '[data-component="DetailInfoBlock"]'
).forEach((element) => {
    const content = element.innerHTML;
    const iconSrc = element.dataset.icon;

    const root = ReactDOM.createRoot(element);

    root.render(
        React.createElement(window.DetailInfoBlock, {
            iconSrc: iconSrc,
            content: content
        })
    );
});
