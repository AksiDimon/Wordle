 function writeOnKeyBoard () {
    
 }
 const letters = document.querySelector('.button')
 letters.addEventListener('keydown', function (event) {
        console.log(`нажали кнопку ${event.key}`)
    })