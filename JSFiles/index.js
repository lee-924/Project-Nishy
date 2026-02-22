let bx1 = document.querySelector('.box1')

let b1 = document.querySelector('.b1')

let npoem = document.querySelector('.nishyPoem')


b1.addEventListener('click', () => {
    bx1.style.display = 'flex'
    bx1.style.animationPlayState = 'running'
    setTimeout(() => {
    npoem.style.display = 'block'
},2000)


})

let cancel = document.querySelector('.cancel')
cancel.addEventListener('click', () => {
    bx1.style.display = 'none'
    npoem.style.display = 'none'
})
