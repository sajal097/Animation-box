const magicPush = document.querySelector('.magic');
const boxesBig = document.querySelector('.boxes');

magicPush.addEventListener('click', ()=>{
    boxesBig.classList.toggle('big');
    })

function createBoxes(){
for (let i = 0; i < 4; i++) {

    for (let j = 0; j < 4; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundPosition = `${j * (-125)}px ${i* (-125)}px`;
        boxesBig.append(box);
    }
    
}
}

createBoxes();

