import { LOADER, LOADER_LOGO } from "./elements.js"

export function endLoader(){
    LOADER_LOGO.onanimationiteration = () =>{
        LOADER.classList.add('loaded')        
    }
}

export function launchLoader(){
    LOADER.classList.remove('hidden')
}