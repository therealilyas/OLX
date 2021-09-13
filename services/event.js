import DOM from './dom.js'
import SERVICE from './service.js'

DOM.body.addEventListener("load", () => {

    SERVICE.showIndexProducts()
})