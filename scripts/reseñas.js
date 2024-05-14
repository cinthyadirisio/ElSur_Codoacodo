const reseñaContainer = document.getElementById('reseñacontainer')

async function getOpiniones() {
    await fetch('../assets/json/opiniones.json')
        .then(response => response.json())
        .then(data => {
            opinionesList = data.opiniones
            pintarTarjetas(opinionesList, reseñaContainer);
        }).catch(err => console.error(err))
} getOpiniones()

function pintarTarjetas(array, container) {
    container.innerHTML = ''
    let fragmento = document.createDocumentFragment()
    array.forEach(elemento => {
        let div = document.createElement('div')
        div.classList = 'cardreseña'
        div.id = elemento.id
        div.innerHTML = `
        <img src=${elemento.cover} alt=${elemento.libro} >
        <div class="cuadroreseña">
            <h4> ${elemento.lector} - Lector</h4>
            <h5>${elemento.libro}</h5>
            <p>${elemento.opinion}</p>
        </div>`
        fragmento.appendChild(div)
    })
    container.appendChild(fragmento)
}
