
window.InfoBlock = function InfoBlock({ iconSrc, content }) {
    return (
        <>
            <img
                className="info-block-icon"
                src={iconSrc}
                alt=""
                aria-hidden="true"
            />

            <div
                className="info-block-content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </>
    );
};

// Находим все информационные блоки на странице
document.querySelectorAll(
    '[data-component="InfoBlock"]'
).forEach((element) => {
    const content = element.innerHTML;
    const iconSrc = element.dataset.icon;

    const root = ReactDOM.createRoot(element);

    root.render(
        React.createElement(window.InfoBlock, {
            iconSrc: iconSrc,
            content: content
        })
    );
});
