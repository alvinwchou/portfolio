const portfolio = {};

// portfolio.porjectBackgroundImage = {
//     project1: `url('../assets/pokemonxwordle-background2dull.png')`,
//     project2: `url('../assets/sanctuary-helpers-homedull.jpg')`,
//     project3: `url('../assets/project-bg2.jpg')`,
//     project4: `url('../assets/project-bg.jpg')`,
// }

portfolio.backgroundChanager = (number) => {
    const projectBackgrounds = document.querySelectorAll('.projectBackground')
    projectBackgrounds.forEach( (projectBackground) => {
        projectBackground.classList.remove('zoom')
        console.log('removed');
    })
    projectBackgrounds[number].classList.add('zoom')
}


portfolio.eventListenerSetUp = () => {
    // close slide out nav
    document.querySelector('.slideOutNav button').addEventListener('click', () => {
        document.querySelector('#openSidebarMenu').checked = false;
    });

    // display description of project
    const projects = document.querySelectorAll('.projectBox');
    projects.forEach( (project, index) => {
        console.log(project);
        project.querySelector('a').addEventListener('mouseover', (e) => {
            // console.log("mouse");
            // console.log(e.target);
            // project.addEventListener('mouseover', () => {
            //     console.log(project.textContent, index);
            // })

            // const projectBackgrounds = document.querySelectorAll('.projectBackground');
            if (e.target.localName == 'a') {
                document.querySelector('.projectDisplay').innerHTML = e.target.parentElement.innerHTML

                // console.log(document.querySelectorAll('.projectBackground'))


                // console.log(projectBackgrounds[index]);

                // projectBackgrounds.forEach( (projectBackground) => {
                //     projectBackground.classList.remove('zoom')
                //     console.log('removed');
                // })

                // projectBackgrounds[index].classList.add('zoom')
                portfolio.backgroundChanager(index);

            } else if (e.target.parentElement.localName == 'a') {
                // document.querySelector('.projectBackground').style.backgroundImage = portfolio.porjectBackgroundImage[e.target.parentElement.parentElement.classList[1]];
                // document.querySelector('.projectBackground').classList.remove('zoom');
                // document.querySelector('.projectBackground').classList.add('zoom');


                document.querySelector('.projectDisplay').innerHTML = e.target.parentElement.parentElement.innerHTML;

                // projectBackgrounds.forEach( (projectBackground) => {
                //     projectBackground.classList.remove('zoom')
                //     console.log('removed');
                // })
                // projectBackgrounds[index].classList.add('zoom')
                portfolio.backgroundChanager(index);
                
            }

        });
    });
};

portfolio.init = () => {
    portfolio.eventListenerSetUp()
};

portfolio.init();