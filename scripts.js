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
        // console.log('removed');
    })
    projectBackgrounds[number].classList.add('zoom')
}


portfolio.eventListenerSetUp = () => {
    // close slide out nav
        // via 'x'
    document.querySelector('.slideOutNav button').addEventListener('click', () => {
        document.querySelector('#openSidebarMenu').checked = false;
    });
    // via outside the slideOutNav
    document.querySelector('.slideOutNavVWBg').addEventListener('click', () => {
        document.querySelector('#openSidebarMenu').checked = false;
    });

    // display description of project
    const projects = document.querySelectorAll('.projectBox');
    projects.forEach( (project, index) => {
        // console.log(project);
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

            // if (e.target.localName == 'a' || e.target.parentElement.localName == 'a'|| e.parentElement.localName == 'div') {
            //     console.log(document.querySelector('.projectDisplay'));
            //     console.log(document.querySelector('.projectDisplay').classList);
            //     document.querySelector('.projectDisplay').classList.add('hovered')
            // } else {
            //     document.querySelector('.projectDisplay').classList.remove('hovered')
            //     console.log(e.target);
                
            // }
        });
    });

    projects.forEach( (project) => {
        project.addEventListener('mouseover', (e) => {
            console.log("projectbox");
            console.log(e.target);

            if (e.target.classList[0] == "projectBox") {
                document.querySelector('.projectDisplay').classList.remove('hovered')
            } else {
                document.querySelector('.projectDisplay').classList.add('hovered')

            }
        })
    })

    // add grey background to top nav bar after scrolling down
    window.addEventListener('scroll', () => {
        console.log('scroll');
        document.querySelector('.navBar').classList.toggle('scrollActive', window.scrollY > 0);
    })

    const pages = document.querySelectorAll('.pageScroll')
    pages.forEach( (page, index) => {
        page.addEventListener('wheel', (e) => {
            if (e.deltaY > 0) {
                if (index === 4) {
                    document.getElementById(`${pages[0].id}`).scrollIntoView()
                } else {
                    let scrollToPage = document.getElementById(`${pages[index+1].id}`)
                    scrollToPage.scrollIntoView()
                }
            } else {
                let scrollToPage = document.getElementById(`${pages[index - 1].id}`)
                scrollToPage.scrollIntoView()
            }
        })
    })
};

portfolio.init = () => {
    portfolio.eventListenerSetUp()
};

portfolio.init();