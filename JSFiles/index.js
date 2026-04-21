let codeBtn = document.querySelectorAll('.codeBtn')
let input = '';
let textArea = document.querySelector('.textArea')
let hiddenDiv = document.querySelector('.hiddenDiv')

const clickSound = new Audio('../sound/codeBtnSound.mp3')
const confirmed = new Audio('../sound/confirmed.mp3')

codeBtn.forEach(btn => {
    btn.addEventListener('click',() => {
        if (btn.dataset.value === 'Delete') {
            textArea.value = ''
            input = ''
            textArea.style.color = 'white'
        }
        else if (btn.dataset.value === 'Enter') {
            if (textArea.value === 'NISHY') {
                textArea.value = 'CORRECT'
                textArea.style.color = 'lime'
                confirmed.play()
                hiddenDiv.style.animationPlayState = 'running'
                loading()
            }

        }
        else {
        input+= btn.dataset.value;
        textArea.value = input
        clickSound.currentTime = 0;
        clickSound.play()
    }
    
        
    })
})



function loading() {
    

}





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
