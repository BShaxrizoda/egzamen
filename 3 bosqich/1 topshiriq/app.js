const button = document.querySelector('.modal-open-button');
const buttonTwo = document.querySelector('.modal-open-button__two');
const menuModal = document.querySelector('.menu-modal');
const menuModalTwo = document.querySelector('.menu-modal__two')
const modalBg = document.querySelector('.modal-bg');
const modalBgTwo = document.querySelector('.modal-bg__two');
const modalButton = document.querySelector('.modal-button');
const modalButtonTwo = document.querySelector('.modal-button__two');


button.addEventListener('click', function(){
    if(menuModal.classList.contains('open')){
        menuModal.classList.remove('open')
    }else{
        menuModal.classList.add('open')
    }
});

buttonTwo.addEventListener('click', function(){
    if(menuModalTwo.classList.contains('open')){
        menuModalTwo.classList.remove('open')
    }else{
        menuModalTwo.classList.add('open')
}
});

modalBg.addEventListener('click', function(){
    menuModal.classList.remove('open')
});

modalBgTwo.addEventListener('click', function(){
    menuModalTwo.classList.remove('open')
});

window.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
    menuModal.classList.remove('open')

    }
});

window.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
    menuModalTwo.classList.remove('open')

    }
});

modalButton.addEventListener('click', function(){
    menuModal.classList.remove('open');
})

modalButtonTwo.addEventListener('click', function(){
    menuModalTwo.classList.remove('open');
})




