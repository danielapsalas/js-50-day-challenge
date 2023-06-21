const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentProg = 1;

next.addEventListener('click', () => {
    currentProg++;
    if(currentProg > circles.length){
        currentProg = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentProg--;
    if(currentProg < 1){
        currentProg = 1;
    }
    update();
})

function update(){
    circles.forEach((circle, index) => {
        if(index < currentProg) {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + '%';

    if( currentProg === 1){
        prev.disabled  = true;
    }else if(currentProg === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}

