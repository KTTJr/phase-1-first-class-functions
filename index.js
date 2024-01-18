function receivesAFunction(callback) {
    callback("I will be the Pirate King")
}

function returnsANamedFunction() {
    let Strawhats = "pirates"
    return function onePiece() {
        console.log(`damn those Strawhat ${Strawhats}!`)
    }
}

function returnsAnAnonymousFunction() {
    let Sayians = "Vegeta, Goku, Gohan, Goten, Trunks."
    return  function() {
        console.log(`Will you please grab ${Sayians} for dinner.`)
    }
}