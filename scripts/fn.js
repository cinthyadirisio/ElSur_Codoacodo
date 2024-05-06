async function getebooks() {
    await fetch('../assets/json/ebooks.json')
        .then(response => response.json())
        .then(data => {
            ebookList = data.ebooks
            let generos = sacarGeneros(ebookList)
            console.log(ebookList)
            console.log(generos)
        }).catch(err => console.error(err))
} getebooks()


function sacarGeneros(array) {
    return [...new Set((array.map(item => item.generos).flat()))]
}

