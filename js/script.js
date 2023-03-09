const boxes = document.querySelectorAll('.box')
const limitLineContent = document.querySelectorAll('.limitLineContent')
const boxesContent = document.querySelectorAll('.box-content')
const viewport = document.querySelector('.viewport')

window.addEventListener('resize', () => {
    const windowLimit = window.innerHeight * 0.8
    viewport.innerText = `${window.innerHeight}px de Altura e ${window.innerWidth}px de Comprimento.`
    limitLineContent[0].innerText = `View Port Atual = Altura: ${window.innerHeight}px, Largura: ${window.innerWidth}px`
    limitLineContent[1].innerText = `Altura Limite: ${windowLimit.toFixed(0)}px`
})

window.addEventListener('scroll', checkboxes);
checkboxes()
function checkboxes() {
    const triggerBottom = window.innerHeight * 0.8  
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        box.children[0].innerText = `Distância da linha verde até a linha azul: ${box.getBoundingClientRect().top}px`

        if (boxTop < triggerBottom) {
            box.classList.add(`show`)
        } else {
            box.classList.remove(`show`)
        }
    })
}

window.addEventListener('load', () => {
    const windowLimit = window.innerHeight * 0.8
    viewport.innerText = `${window.innerHeight}px de Altura e ${window.innerWidth}px de Comprimento.`
    limitLineContent[0].innerText = `View Port Atual =  Altura: ${window.innerHeight}px, Largura: ${window.innerWidth}px`
    limitLineContent[1].innerText = `Altura Limite: ${windowLimit.toFixed(0)}px`
})

