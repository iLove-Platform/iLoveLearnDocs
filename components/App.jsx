
(function () {
    const headerElement = document.getElementById("header");

    if (!headerElement) {
        console.error("Не найден элемент #header");
        return;
    }

    if (!window.Header) {
        console.error("Компонент Header.jsx не загрузился");
        return;
    }

    const root = ReactDOM.createRoot(headerElement);

    root.render(
        React.createElement(window.Header, {
            logoSrc: headerElement.dataset.logo,
            homeUrl: headerElement.dataset.home
        })
    );
})();
