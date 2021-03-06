const portfolio = {};

// portfolio.backgroundChanager = (number) => {
//     const projectBackgrounds = document.querySelectorAll('.projectBackground')
//     projectBackgrounds.forEach( (projectBackground) => {
//         projectBackground.classList.remove('zoom')
//     })
//     projectBackgrounds[number].classList.add('zoom')
// }


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

    // close slide out nav after clicking on a link when nav has 100vw
    document.querySelector('.slideOutNav').addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && window.innerWidth < 750) {
            document.querySelector('#openSidebarMenu').checked = false;
        }
    })

    // display description of project
    const projects = document.querySelectorAll('.projectBox');
    projects.forEach( (project, index) => {
        project.querySelector('a').addEventListener('mouseover', (e) => {
            if (e.target.localName == 'a') {
                document.querySelector('.projectDisplay').innerHTML = e.target.parentElement.innerHTML
                portfolio.backgroundChanager(index);
            } else if (e.target.parentElement.localName == 'a') {
                document.querySelector('.projectDisplay').innerHTML = e.target.parentElement.parentElement.innerHTML;
                portfolio.backgroundChanager(index);
            }
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
        document.querySelector('.navBar').classList.toggle('scrollActive', window.scrollY > 0);
    })

    // const pages = document.querySelectorAll('.pageScroll')
    // pages.forEach( (page, index) => {
    //     page.addEventListener('wheel', (e) => {
    //         if (e.deltaY > 0) {
    //             if (index === 4) {
    //                 document.getElementById(`${pages[0].id}`).scrollIntoView()
    //             } else {
    //                 let scrollToPage = document.getElementById(`${pages[index+1].id}`)
    //                 scrollToPage.scrollIntoView()
    //             }
    //         } else {
    //             let scrollToPage = document.getElementById(`${pages[index - 1].id}`)
    //             scrollToPage.scrollIntoView()
    //         }
    //     })
    // })
};

portfolio.carousel = () => {
    const carousel = document.querySelector('.carousel')
    const slider = document.querySelector('.slider')
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')


    let direction;

    prev.addEventListener('click', () => {
        if (direction == -1) {
            slider.appendChild(slider.firstElementChild)
            direction = 1;
        }
        carousel.style.justifyContent = 'flex-end';
        slider.style.transform = `translate(calc(100%/6))`; // $projects
    })

    next.addEventListener('click', () => {
        direction = -1;
        carousel.style.justifyContent = 'flex-start';
        slider.style.transform = `translate(calc(100%/-6))`; // $projects
    })

    slider.addEventListener('transitionend', () => {
        if (direction == -1) {
            slider.appendChild(slider.firstElementChild)
        } else {
            slider.prepend(slider.lastElementChild)

        }

        slider.style.transition = 'none'
        slider.style.transform = 'translate(0)'
        setTimeout(() => {
            slider.style.transition = 'all 0.5s'
        })
    })
}

portfolio.init = () => {
    portfolio.eventListenerSetUp()
    portfolio.carousel()
};

portfolio.init();