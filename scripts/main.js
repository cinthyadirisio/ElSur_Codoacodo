const ultimosContainer = document.getElementById('ultimosContainer')
const generosContainer = document.getElementById('generosbadges')

async function getebooks() {
    await fetch('https://cinthyadirisio.github.io/ElSur_Codoacodo/assets/json/ebooks.json')
        .then(response => response.json())
        .then(data => {
            ebookList = data.ebooks
            let generos = sacarGeneros(ebookList)
            // console.log(ebookList)
            // console.log(generos)
            pintarGenerosIndex(generos, generosContainer)
            pintarTarjetasIndex(filtrarUltimos(ebookList), ultimosContainer);
        }).catch(err => console.error(err))
} getebooks()

function sacarGeneros(array) {
    return [...new Set((array.map(item => item.generos).flat()))]
}

function pintarGenerosIndex(array, container) {
    container.innerHTML = ''
    let fragmento = document.createDocumentFragment()
    array.forEach(elemento => {
        let badge = document.createElement('span')
        badge.classList = 'etiqueta'
        badge.innerHTML = elemento
        fragmento.appendChild(badge)
    })
    container.appendChild(fragmento)
}

function filtrarUltimos(array){
    let ultimos = array.slice(-4)
    return ultimos
}

function pintarTarjetasIndex(array, container) {
    container.innerHTML = ''
    let fragmento = document.createDocumentFragment()
    array.forEach(elemento => {
        let figure = document.createElement('figure')
        figure.classList = 'figureUltimos'
        figure.innerHTML = `<img src=${elemento.cover} alt=${elemento.titulo}>`
        fragmento.appendChild(figure)
    })
    container.appendChild(fragmento)
}