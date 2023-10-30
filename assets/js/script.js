const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500)

}

function game_over_sound () {
    document.querySelector("#mario_death").play()
}

function jump_correct() {
    document.querySelector('#coin_sound').play()
    document.querySelector('#jump_sound').play()
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './assets/images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        game_over_sound()

        clearInterval(loop);
    
    }else if(pipePosition <= 0 && marioPosition >= 0){
        jump_correct()        
    }
}, 10);

document.addEventListener('keydown', jump);