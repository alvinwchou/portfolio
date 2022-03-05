const portfolio = {};

portfolio.eventListenerSetUp = () => {
    // close slide out nav
    document.querySelector('.slideOutNav button').addEventListener('click', () => {
        document.querySelector('#openSidebarMenu').checked = false;
    });
};

portfolio.init = () => {
    portfolio.eventListenerSetUp()
};

portfolio.init();