import $ from 'jquery'

function createAnalytics(): object {
    let counter = 0
    let isDestroyed: boolean = false
    
    const listner = (): number => counter++
    
    //document.addEventListener('click', listner)
    $(document).on('click', listner)
    
    return {
        destroy() {
            $(document).off('click', listner)
            isDestroyed = true
        },
        getClicks() {
            if(isDestroyed) {
                return 'Analytics is destroyed.'
            }
            return counter
        }
        
    }
}

window['analytics'] = createAnalytics()