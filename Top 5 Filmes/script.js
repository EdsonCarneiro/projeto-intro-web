//Filmes para ver antes de morrer

let objeto1 = {
    nome: "O SENHOR DOS ANEIS - O RETORNO DO REI",
    anoLancamento: 2003,
    valeAPena: true,
    diretor: "Peter Jackson",
    elenco: [ "Sean Astin, Elijah Wood, Viggo Mortensen"],
    imagem: `./imagens/LOTR.jpg`,
    link: "https://www.adorocinema.com/filmes/filme-39187/",
};


let objeto2 = {
    nome: "FORREST GUMP - O CONTADOR DE HISTORIAS",
    anoLancamento: 1994,
    valeAPena: true,
    diretor: "Robert Zemeckis",
    elenco: ["Tom Hanks, Gary Sinise, Robin Wright"],
    imagem: `./imagens/ForrestGumpPoster.jpg`,
    link: "https://www.adorocinema.com/pesquisar/?q=forrest+gump"
};

let objeto3 = {
    nome: "A PAIXÃO DE CRISTO",
    anoLancamento: 2004,
    valeAPena: true,
    diretor: "Mel Gibson",
    elenco: [ "Jim Caviezel, Maia Morgenstern, Christo Jivkov"],
    imagem: `./imagens/APAIXAO.jpg`,
    link: "https://www.adorocinema.com/filmes/filme-47326/"
};

let objeto4 = {
    nome: "TROIA",
    anoLancamento: 2004,
    valeAPena: true,
    diretor: "Wolfgang Petersen",
    elenco: ["Brad Pitt, Eric Bana, Orlando Bloom"],
    imagem: "./imagens/Troia.jpg",
    link: "https://www.adorocinema.com/filmes/filme-47357/"
};

let arrayObjetos = []
arrayObjetos.push(objeto1, objeto2, objeto3, objeto4)

let media = 0
for (let i in arrayObjetos) {
    media += arrayObjetos[i].anoLancamento
}
console.log(`Media dos anos de lançamento: ${media / arrayObjetos.length}`)

let verificarValeAPena = arrayObjetos[0].valeAPena && arrayObjetos[1].valeAPena && arrayObjetos[2].valeAPena && arrayObjetos[3].valeAPena
console.log(verificarValeAPena)


//Semana 4 exercício 1
let lista = []
let filmes = []
for (i in arrayObjetos) {
    filmes.push(arrayObjetos[i].nome)
}

for (i in arrayObjetos) {
    arrayObjetos[i].valeAPena ? lista.push(arrayObjetos[i]) : alert(`O filme ${filmes[i]} não foi adicionado`)
}
console.log(lista)



let elenco1 = ``
for (i in objeto1.elenco) {
    elenco1 += `${objeto1.elenco[i]}, `
}

let elenco2 = ``
for (i in objeto2.elenco) {
    elenco2 += `${objeto2.elenco[i]}, `
}

let elenco3 = ``
for (i in objeto3.elenco) {
    elenco3 += `${objeto3.elenco[i]}, `
}

let elenco4 = ``
for (i in objeto4.elenco) {
    elenco4 += `${objeto4.elenco[i]}, `
}

let listaElencos = []
listaElencos.push(elenco1, elenco2, elenco3, elenco4)




// for(i in arrayObjetos){
//  console.log(`nome: ${arrayObjetos[i].nome} \nlançamento: ${arrayObjetos[i].anoLancamento} \nvale a pena?: ${arrayObjetos[i].valeAPena} \ndiretor: ${arrayObjetos[i].diretor} \nroteiro: ${listaElencos[i]}`)
// }



impressaoRelatorio = (objeto) => {
    let imprimir = ``
    for (i in objeto) {
        imprimir += `${i}: ${objeto[i]}\n`
    }
    return imprimir
}
console.log(impressaoRelatorio(objeto1))
console.log(impressaoRelatorio(objeto2))
console.log(impressaoRelatorio(objeto3))
console.log(impressaoRelatorio(objeto4))

for (i in arrayObjetos) {
    let div = document.getElementById("div-sections")
    let section = document.createElement("section")
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let li5 = document.createElement("li")
    let a = document.createElement("a")
    let imagem = document.createElement("img")
    section.setAttribute("id", "section1")
    imagem.setAttribute("id", "imagem1")
    ul.setAttribute("id", "lista1")
    ul.setAttribute("class", "lista")
    imagem.src = arrayObjetos[i].imagem
    a.setAttribute("target", "_blank")
    a.setAttribute("href", arrayObjetos[i].link)
    a.innerHTML += `${arrayObjetos[i].nome.toUpperCase()}`
    li1.appendChild(a)
    li2.innerHTML = `Ano de lançamento: ${arrayObjetos[i].anoLancamento}`
    li3.innerHTML = `Vale a pena: ${arrayObjetos[i].valeAPena}`
    li4.innerHTML = `Diretor: ${arrayObjetos[i].diretor}`
    li5.innerHTML = `Elenco: ${arrayObjetos[i].elenco}`
    div.appendChild(section)
    section.appendChild(imagem)
    section.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)
}
    

funcBusca = (arrayObjetos, string) => {
    for (i in arrayObjetos) {
        if (arrayObjetos[i].nome === string) {
            let main = document.getElementById("main")
            let div = document.createElement("div")
            let section = document.createElement("section")
            let ul = document.createElement("ul")
            let li1 = document.createElement("li")
            let li2 = document.createElement("li")
            let li3 = document.createElement("li")
            let li4 = document.createElement("li")
            let li5 = document.createElement("li")
            let a = document.createElement("a")
            let imagem = document.createElement("img")
            div.setAttribute("id", "div-sections")
            section.setAttribute("id", "section1")
            imagem.setAttribute("id", "imagem1")
            ul.setAttribute("id", "lista1")
            ul.setAttribute("class", "lista")
            imagem.src = arrayObjetos[i].imagem
            a.setAttribute("target", "_blank")
            a.setAttribute("href", arrayObjetos[i].link)
            a.innerHTML += `${arrayObjetos[i].nome.toUpperCase()}`
            li1.appendChild(a)
            li2.innerHTML = `Ano de lançamento: ${arrayObjetos[i].anoLancamento}`
            li3.innerHTML = `Vale a pena: ${arrayObjetos[i].valeAPena}`
            li4.innerHTML = `Diretor: ${arrayObjetos[i].diretor}`
            li5.innerHTML = `Elenco: ${arrayObjetos[i].elenco}`
            main.appendChild(div)
            div.appendChild(section)
            section.appendChild(imagem)
            section.appendChild(ul)
            ul.appendChild(li1)
            ul.appendChild(li2)
            ul.appendChild(li3)
            ul.appendChild(li4)
            ul.appendChild(li5)
        }
    }
}

function busca(event){
    event.preventDefault()
    let input = document.getElementById("input").value.toUpperCase()
    if(input === ""){
        alert("Nenhum objeto encontrado")
    }else{
        document.getElementById("div-sections").remove();
        funcBusca(arrayObjetos, input)
    }
}





