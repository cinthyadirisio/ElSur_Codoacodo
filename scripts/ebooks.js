const cardcontainer = document.getElementById('cardcontainer');

async function getebooks() {
    await fetch('../assets/json/ebooks.json')
        .then(response => response.json())
        .then(data => {
            ebookList = data.ebooks
            let generos = sacarGeneros(ebookList)
            console.log(ebookList)
            console.log(generos)
            // console.log(pintarGenerosIndex(generos));
            console.log(pintarTarjetas(ebookList, cardcontainer));

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
        badge.classList = 'badge text-bg-dark'
        badge.innerHTML = elemento
        fragmento.appendChild(badge)
    })
    container.appendChild(fragmento)
}

function pintarTarjetas(array, container) {
    container.innerHTML = ''
    let fragmento = document.createDocumentFragment()
    array.forEach(elemento => {
        let div = document.createElement('div')
        div.classList = 'tarjeta'
        div.innerHTML = `
            <img src=${elemento.cover} alt=${elemento.titulo}>
            <div class="textotarjeta p-2">
                <h5 class="fw-bold">${elemento.titulo}</h5>
                <h6>${elemento.autor}</h6>
                <div class="my-2">
                    ${elemento.generos.map(item => `<span class="badge text-bg-dark">${item}</span>`).join(' ')}
                </div>
                <div class="my-2">
                    <a href="./detalles.html?id=${elemento.id}" class="btn btn-dark">Leer más!</a>
                </div>
            </div>`
        fragmento.appendChild(div)
    })
    container.appendChild(fragmento)
}