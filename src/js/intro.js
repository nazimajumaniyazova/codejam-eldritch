//const greetingSection = document.querySelector('.greeting')
const volumeBtn = document.querySelector('.volume')
const introSection = document.querySelector('.intro')
const introText = document.querySelector('.intro-text')
const introTitle = document.querySelector('.ancient-cards__title')
const backIcon = document.querySelector('.back-icon')
const ancientCards = document.querySelector('.ancient-cards')
const levels = document.querySelector('.levels')
const levelsList = document.querySelectorAll('.levels div')

const deck = document.querySelector('.deck')
const deckMyth = document.querySelectorAll('.deck span')
const cardsContainer = document.querySelector('.cards')
const cards = document.querySelectorAll('.card')

introSection.style.display = 'none'
let horrorSound = new Audio()
let isVolumeMuted = false;
let imgCount = 1

let cardsArray = []
let blueCardAmount = 0;
let greenCardAmount = 0;
let yellowCardAmount = 0;

levels.style.display ='none'
deck.style.display = 'none'

const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
      cardImg: './src/assets/img/12.png',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
      stagesArray: [1,2,1,2,3,1,2,4,0]
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
      cardImg: './src/assets/img/13.png',
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
      stagesArray: [0,2,2,1,3,0,3,4,0]
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
      cardImg: './src/assets/img/14.png',
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
      stagesArray: [0,2,1,2,3,1,3,4,0]
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
      cardImg: './src/assets/img/15.png',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
      stagesArray: [1,2,1,3,2,1,2,4,0]
    },
]

const cardsData = [
    {
        id: 'blue1',
        difficulty: 'hard',
        color:'blue',
        img: './src/assets/img/MythicCards/blue/blue1.png'
    },
    {
        id: 'blue2',
        difficulty: 'hard',
        color:'blue',
        img: './src/assets/img/MythicCards/blue/blue2.png'
    },
    {
        id: 'blue3',
        difficulty: 'easy',
        color:'blue',
        img: './src/assets/img/MythicCards/blue/blue3.png'
    },
    {
        id: 'blue4',
        difficulty: 'easy',
        color:'blue',
        img: './src/assets/img/MythicCards/blue/blue4.png'
    },
    {
        id: 'blue5',
        difficulty: 'easy',
        color:'blue',
        img: './src/assets/img/MythicCards/blue/blue5.png'
    },
    {
        id: 'blue6',
        difficulty: 'hard',
        color:'blue',
        img: './src/assets/img/MythicCards/blue/blue6.png'
    },
    {
        id: 'blue7',
        difficulty: 'normal',
        color:'blue',
        img: './src/assets/img/MythicCards/blue/blue7.png'
    },
    {
        id: 'blue8',
        difficulty: 'normal',
        color:'blue',
        img: './src/assets/img/MythicCards/blue/blue8.png'
    },
]
  
async function intro(){
    //horrorSound = new Audio('./src/assets/sounds/[YT2mp3.info] - Horror music[no copyright] (320kbps).mp3')
   
    introSection.style.display = 'flex'
   // greetingSection.remove()
   
    horrorSound.play()
    sectionBg()
    const changeBgInterval = setInterval(()=>{
        sectionBg();
        if(imgCount>=5){
            clearInterval(changeBgInterval);
        }
    }, 7000)
    displayText()
}

volumeBtn.addEventListener('click',()=>{
    if(!isVolumeMuted){
        volumeBtn.classList.add('volume_off')
        isVolumeMuted = true;
        changeVolume()
    }else{
        volumeBtn.classList.remove('volume_off')
        isVolumeMuted = false;
        changeVolume()
    }
})

function changeVolume(){
    horrorSound.muted = isVolumeMuted
}

function sectionBg(){
    introSection.style.backgroundImage = `url('./src/assets/img/img-${imgCount}.jpg')`;
    imgCount++
}
intro( )

function displayText(){
    ScrollReveal().reveal('.intro-text__item1', {
        delay: 500,
        duration: 1000 
    });
    ScrollReveal().reveal('.intro-text__item2', {
        delay: 1500,
        duration: 2000 
    });
    ScrollReveal().reveal('.intro-text__item3', {
        delay: 2500,
        duration: 3000 
    });
    ScrollReveal().reveal('.intro-text__item4', {
        delay: 3500,
        duration: 4000 
    });
    setTimeout(() => {
        document.querySelector('.intro-text__1').remove()
        document.querySelector('.intro-text__2').style.display = 'block'
        document.querySelector('.intro-text__2').style.visibility = 'hidden'
        ScrollReveal().reveal('.intro-text__item5', {
            delay: 500,
            duration: 1000 
        });
        ScrollReveal().reveal('.intro-text__item6', {
            delay: 1500,
            duration: 2000 
        });
        ScrollReveal().reveal('.intro-text__item7', {
            delay: 2500,
            duration: 3000 
        });
    }, 9000);
    setTimeout(() => {
        document.querySelector('.intro-text__2').remove()
    }, 18000);
}

cardsContainer.addEventListener('click',(event)=>{
    cardsArray = []
    let eventTarget = event.target.closest('.card')
    introTitle.style.display = 'none'
    backIcon.classList.add('back-icon_active')
    ancientCards.style.width = '0px'
    Array.from(cards).forEach(element => {
        element.style.display = 'none'
    });
    if(eventTarget){
        eventTarget.style.display = 'block'
        eventTarget.classList.add('card_active')
        levels.style.display ='flex'
        deck.style.display = 'flex'
        for(let i=0; i<ancientsData.length;i++){
            if(eventTarget.getAttribute('data-name') === ancientsData[i].name){
                blueCardAmount = ancientsData[i].secondStage.blueCards + ancientsData[i].firstStage.blueCards + ancientsData[i].thirdStage.blueCards
                yellowCardAmount = ancientsData[i].secondStage.brownCards + ancientsData[i].firstStage.brownCards + ancientsData[i].thirdStage.brownCards
                greenCardAmount = ancientsData[i].secondStage.greenCards + ancientsData[i].firstStage.greenCards + ancientsData[i].thirdStage.greenCards
                deckMyth.forEach((elem,index)=>{
                    elem.innerHTML = ancientsData[i].stagesArray[index]
                })
            }
        }
        console.log(blueCardAmount,yellowCardAmount,greenCardAmount)
    }
})
backIcon.addEventListener('click', ()=>{
    introTitle.style.display = 'block';
    ancientCards.style.width = '80%'
    levels.style.display ='none'
    deck.style.display = 'none'
    Array.from(cards).forEach(element => {
        element.classList.remove('card_active')
        element.style.display = 'block'
    });
    backIcon.classList.remove('back-icon_active')
})

levels.addEventListener('click',(e)=>{
    Array.from(levelsList).forEach(elem =>{
        elem.classList.remove('active-level')
    })
    e.target.classList.add('active-level')
    if(e.target.classList.contains('easy')){
        let blueCardsArray = []
        let yellowCardsArray = []
        let greenCardsArray = []
        for(let i=0;i<blueCardAmount.length;i++){
          for(let j=0;j<cardsData.length;j++){
            if(cardsData[j].color==='blue' && cardsData[j].difficulty === 'easy'){
                blueCardsArray.push(cardsData[j].img)
            }
          }
        }
        for(let i=0;i<yellowCardAmount.length;i++){
            for(let j=0;j<cardsData.length;j++){
              if(cardsData[j].color==='brown' && cardsData[j].difficulty === 'easy'){
                  yellowCardsArray.push(cardsData[j].img)
              }
            }
          }
          for(let i=0;i<greenCardAmount.length;i++){
            for(let j=0;j<cardsData.length;j++){
              if(cardsData[j].color==='green' && cardsData[j].difficulty === 'easy'){
                  greenCardsArray.push(cardsData[j].img)
              }
            }
          }
        cardsArray.push(greenCardsArray)
        cardsArray.push(yellowCardsArray)
        cardsArray.push(blueCardsArray)
    }
    if(e.target.classList.contains('medium')){
     
    }
    if(e.target.classList.contains('hard')){
        
    }
    console.log(cardsArray)
})
// function displayAncientCards(){
//    for(let i=0;i<ancientsData.length;i++){
//     let card = createNode('div','card')
//     let cardImg  = createNode('img')
//     cardImg.src = ancientsData[i].cardImg
//     card.append(cardImg)
//     cardsContainer.append(card)
//    }
// }

// displayAncientCards()

// function createNode(tagName, ...classes){
//     let elem = document.createElement(tagName);
//     elem.classList.add(...classes)
//     return elem
// }