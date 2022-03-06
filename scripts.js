const portfolio = {};

portfolio.porjectBackgroundImage = {
    project1: `url('../assets/pokemonxwordle-background2dull.png')`,
    project2: `url('../assets/sanctuary-helpers-homedull.jpg')`,
    project3: `url('../assets/project-bg2.jpg')`,
    project4: `url('../assets/project-bg.jpg')`,
}

portfolio.eventListenerSetUp = () => {
    // close slide out nav
    document.querySelector('.slideOutNav button').addEventListener('click', () => {
        document.querySelector('#openSidebarMenu').checked = false;
    });

    // display description of project
    const projects = document.querySelectorAll('.projectBox');
    projects.forEach( (project) => {
        console.log(project);
        project.querySelector('a').addEventListener('mouseover', (e) => {
            // console.log("mouse");
            console.log(e.target);

            if (e.target.localName == 'a') {
                document.querySelector('.projectDisplay').innerHTML = e.target.parentElement.innerHTML
            } else if (e.target.parentElement.localName == 'a') {
                console.log('!!!!!!!!!!!!!!!!!!you are on the right track!!!!!!!!!!!!!!!!!!!');
                console.log(e.target.parentElement.parentElement.classList[1]);
                console.log(portfolio.porjectBackgroundImage[e.target.parentElement.parentElement.classList[1]]);
                document.querySelector('.myProjects').style.backgroundImage = portfolio.porjectBackgroundImage[e.target.parentElement.parentElement.classList[1]];

                document.querySelector('.projectDisplay').innerHTML = e.target.parentElement.parentElement.innerHTML;
            }

        });
    });
};

portfolio.init = () => {
    portfolio.eventListenerSetUp()
};

portfolio.init();