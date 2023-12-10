const SCROLL_SPY_ELMT = document.querySelectorAll('[scroll-spy]')

let TRHESHOLD = 0.3
/**
 * 
 * @param {IntersectionObserverEntry[]} entries 
 * @param {IntersectionObserver} observer 
 */
function callback( entries, observer ){
    entries.forEach( (entry) => {
        
        if(entry.intersectionRatio > TRHESHOLD){
            entry.target.classList.remove('invisible')

            // if(isPermanent) 
            observer.unobserve(entry.target)
        }
    } )
}

export const setUpScrollSpy = ()=>{
    const observer = new IntersectionObserver(callback, {threshold: TRHESHOLD, rootMargin: "100px", root: document.getElementById('main-content')})
    SCROLL_SPY_ELMT.forEach( entry => observer.observe(entry))
} 