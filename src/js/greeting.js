const sentence1 = document.querySelector('.sentence1')
const sentence1Cursor = document.querySelector('.sentence1-cursor')
const sentence2 = document.querySelector('.sentence2')
const sentence2Cursor = document.querySelector('.sentence2-cursor')

const pressKey = document.querySelector('.press-key')

sentence2Cursor.style.visibility = 'hidden'

async function typeSentence(sentence, eleRef, delay = 150){
    const letters = sentence.split('')
    let i = 0
    while(i<letters.length){
        await waitForMs(delay);
        eleRef.append(letters[i])
        i++
    }
    return
}
function waitForMs(ms){
    return new Promise(resolve =>setTimeout(resolve,ms))
}


async function t(){
    await typeSentence('Добро пожаловать!', sentence1)
    sentence1Cursor.style.visibility = 'hidden'
    sentence2Cursor.style.visibility = 'visible'
    await typeSentence('Ты был выбран спасать мир.', sentence2)
    pressKey.classList.add('press-key_active')

    window.addEventListener('keydown',(e)=>{
        if (e.key === ' ') {
            console.log('dd')
            intro()
        }
    })
    window.addEventListener('touchstart', function() {
        alert('was touched')
    });
}
t()