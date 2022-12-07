const modal = document.querySelector('#openModal');

modal.onclick = function openModal(){
    const element = document.querySelector('body > div');
    element.classList.remove('invisible');
}


modal.onkeydown = function esc(event){
    const element = document.querySelector('body > div');
    const isEsc = event.key === "Escape";
    const haveInvisible = element.getAttribute('class').includes('invisible');
    if(haveInvisible){

    } else if(isEsc){
        element.classList.add('invisible');
    }
}
