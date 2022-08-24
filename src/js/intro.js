const greetingSection = document.querySelector('.greeting')
const volumeBtn = document.querySelector('.volume')
const introSection = document.querySelector('.intro')
const introText = document.querySelector('.intro-text')

introSection.style.display = 'none'
let horrorSound = new Audio()
let isVolumeMuted = false;
let imgCount = 1

async function intro(){
    //horrorSound = new Audio('./src/assets/sounds/[YT2mp3.info] - Horror music[no copyright] (320kbps).mp3')
   
    introSection.style.display = 'flex'
    greetingSection.remove()
   
    horrorSound.play()
    sectionBg()
    const changeBgInterval = setInterval(()=>{
        sectionBg();
        if(imgCount>=5){
            clearInterval(changeBgInterval);
        }
    }, 7000)
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
