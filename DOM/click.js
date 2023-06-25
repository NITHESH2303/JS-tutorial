// DOM Manipulation

// Event Listeners

const btn2 = document.querySelector('.btn-2')

function alertbtn(){
    alert('Welcome')
}

btn2.addEventListener("click",alertbtn)

// MouseOver

const newBackGroundColor = document.querySelector('.btn-3')

function changeBgColor(){
    newBackGroundColor.style.backgroundColor = 'blue'
}

newBackGroundColor.addEventListener("MouseOver",changeBgColor)

// Reveal Event

const revealbtn = document.querySelector('.reveal-btn')
const hiddenContent = document.querySelector('.hidden-content')

function revealContent(){
    if (hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    }else{
        hiddenContent.classList.add('reveal-btn')
    }
}

revealbtn.addEventListener('click', revealContent)

