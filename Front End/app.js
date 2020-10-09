window.addEventListener("load", () => {
    gsap.to(window, {duration: .5, scrollTo: 1, autoKill: false})
})


// Create A Timeline to put the animations in order
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#header',
        start: () => {
            if(window.innerWidth >= 1280){
                return 'top 55%'
            }else if(window.innerWidth >= 1024){
                return 'top 30%'
            }else if(window.innerWidth >= 800){
                return 'top 40%'
            }else{
                return 'top center'
            }
        },
        end: () => {
            if(window.innerWidth >= 1280){
                return 'top 55%'
            }else if(window.innerWidth >= 1024){
                return 'top 30%'
            }else if(window.innerWidth >= 800){
                return 'top 40%'
            }else{
                return 'top center'
            }
        },
        toggleActions: 'restart none reverse none',
    }
});


// Describe what the animations will do
tl.to('.header1', {duration: .8, opacity: 0, y: 100});
tl.to('.vault', {duration: .8, opacity: 1, y: 65, visibility: 'visible'});