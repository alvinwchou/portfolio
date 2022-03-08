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

    // add background to nav after scroll
    window.addEventListener('scroll', () => {
        document.querySelector('.navBar').classList.toggle('scrollActive', window.scrollY > 0);
    })

    //TESTING OUT FULL PAGE SCROLL
    // let delay = false; 
    // document.querySelector('html').addEventListener('wheel', (e) => {
        
    //     if (delay == false) {
    //         delay = true;
    //         if (e.deltaY > 0) {
    //             window.scrollBy(0, window.innerHeight);
    //         } else {
    //             window.scrollBy(0, -window.innerHeight);
    //         }
    //     }
    //     // document.querySelector(class).scrollIntoView()
    //     setTimeout( () => {delay = false}, 1500)
    // })

    // const pages = document.querySelectorAll('.pageScroll')
    // pages.forEach( (page, index) => {
    //     console.log(pages);
    //     console.log(page, index);
    //     console.log(`'#${pages[index].id}'`);
    //     console.log(`'#resume'`);
    //     page.addEventListener('wheel', (e) => {
    //         if (e.deltaY > 0) {
    //             // window.scrollBy(0, window.innerHeight)
    //             console.log('down page');
    //             console.log(`#${pages[index].id}`);
    //             console.log(document.querySelector(`#${pages[index].id}`));
    //             // console.log(document.querySelector('#resume'))
    //             document.querySelector(`#${pages[index].id}`).scrollIntoView()
    //             console.log(document.getElementById(`${pages[index].id}`))
    //             const scrollToPage = document.getElementById(`${pages[index].id}`)
    //             console.log(scrollToPage)
    //             scrollToPage.scrollIntoView(true)
    //         } else {
    //             window.scrollBy(0, -window.innerHeight);
    //         }
    //     })
    // })
};

portfolio.init = () => {
    portfolio.eventListenerSetUp()
};

portfolio.init();