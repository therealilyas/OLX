import DB from './db.js'

function showIndexProducts() {

    let promise = new Promise(function(resolve, reject) {
        DB.firebase.database().ref('posts').on('value', function(data) {
            if (data.val()) {
                resolve(data.val())
            } else {
                reject("Something went wrong")
            }
        })
    })

    promise.then((data) => {
        console.log(data)
        prepareData(data)
        console.log("Check =>", check)
        addUser(check)
    })

    .catch((error) => {
        console.log(error)
        pushData()
    })
}

export default {
    showIndexProducts
}