const detailContainer = document.getElementById('detailContainer')

async function getebooks(){
    await fetch('../assets/json/ebooks.json')
        .then(response => response.json())
        .then(data =>{
            ebooksList = data.ebooks
            
            let params = location.search
            let querystring = new URLSearchParams(params)
            let id = querystring.get('id')
            const ebook = ebooksList.find(a => a.id === id)
            console.log(ebook);
            
            pintarDetalles(ebook, detailContainer)
    }).catch(err => console.error(err))
}getebooks()


function pintarDetalles(element, container) {
    container.innerHTML = `
    <div class="tarjetagrande d-flex rounded-2">
            <img src="${element.cover}" alt="${element.titulo}">
            <div class="textotarjgrande p-3">
                <h2 class="fw-bold">${element.titulo}</h2>
                <h3>${element.autor}</h3>
                ${element.generos.map(item => `<span class="badge text-bg-dark">${item}</span>`).join(' ')}
                <p class="my-2">${element.sinopsis}</p>
                <div>
                    <h6 class="fw-bolder">Disponible en:</h6>
                    ${element.epub !== "void" ? `<a href="${element.epub}" class="btn btn-dark" target="_blank">ePub</a>` : ''}
                    ${element.pdf !== "void" ? `<a href="${element.pdf}" class="btn btn-dark" target="_blank">PDF</a>` : ''}
                </div>
            
            </div>
    </div>`;
}

