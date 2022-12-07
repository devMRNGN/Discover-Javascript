const modal = document.querySelector('#openModal');

modal.onclick = function openModal(){
    const element = document.querySelector('body > div');
    element.classList.remove('invisible');
}


modal.onkeydown = function esc(event){
    if(event.key == "Escape"){
        const element = document.querySelector('body > div');
        element.classList.add('invisible');
    }
}
