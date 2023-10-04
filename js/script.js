const elements = document.querySelectorAll('.hidden');

const listenHidden = new IntersectionObserver ((x)=>{
    x.forEach((y)=>{
        if(y.isIntersecting){
            y.target.classList.add('show');
        }else{
            y.target.classList.remove('show');
        }
    })
})

elements.forEach((elements)=>{
    listenHidden.observe(elements);
})


document.addEventListener('click', (e)=>{

    const el = e.target;

    const targetHtml = document.querySelector('.click-html');
    const elementoHTML = document.getElementById('w-html');
    const targetCss = document.querySelector('.click-css');
    const elementoCSS = document.getElementById('w-css');
    const targetJs = document.querySelector('.click-js');
    const elementoJS = document.getElementById('w-js');

    console.log(el)
    if(el == targetHtml) {
        elementoHTML.classList.add('card-class-selecionado')
        elementoCSS.classList.remove('card-class-selecionado')
        elementoJS.classList.remove('card-class-selecionado')
    }
    if(el == targetCss) {
        elementoCSS.classList.add('card-class-selecionado')
        elementoHTML.classList.remove('card-class-selecionado')
        elementoJS.classList.remove('card-class-selecionado')
    }
    if(el == targetJs) {
        elementoJS.classList.add('card-class-selecionado')
        elementoCSS.classList.remove('card-class-selecionado')
        elementoHTML.classList.remove('card-class-selecionado')

    }
})

