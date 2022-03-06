const portfolio = {};

portfolio.eventListenerSetUp = () => {
    // close slide out nav
    document.querySelector('.slideOutNav button').addEventListener('click', () => {
        document.querySelector('#openSidebarMenu').checked = false;
    });

    // display description of project
    document.querySelector
};

portfolio.init = () => {
    portfolio.eventListenerSetUp()
};

portfolio.init();