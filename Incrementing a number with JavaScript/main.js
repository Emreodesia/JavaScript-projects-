let counter =0;
let counterDom =document.querySelector('#counter')
let inceraseDom=document.querySelector('#incerase')
let decreaseDom=document.querySelector('#decrease')


counterDom.innerHTML =counter

inceraseDom.addEventListener('click',clickEvent)
decreaseDom.addEventListener('click',clickEvent)

    function clickEvent(){
        console.log(this.id)
        this.id=="incerase" ? counter=+1: counter=-1
        counterDom.innerHTML=counter

    }





