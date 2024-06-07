const search_box = document.querySelector('.js-search-box');
const search_btn = document.querySelector('.open-search');
const close_btn = document.querySelector('.js-close');

search_btn.addEventListener('click', () => {
    search_box.classList.add('active');
});

close_btn.addEventListener('click', () => {
    search_box.classList.remove('active');
})


hambuJson.map((item, index) => {
    //console.log(item)

    let hambuItem = document.querySelector('.container-produtos').cloneNode(true)
    //console.log(hambuItem)
    
    document.querySelector('.combos').append(hambuItem)
    
    hambuItem.querySelector('.foto-produto img').src = item.img
    hambuItem.querySelector('.nome-produto').innerHTML = item.name
    hambuItem.querySelector('.descricao-produto').innerHTML = item.description
    hambuItem.querySelector('.preco-produto').innerHTML = `R$ ${item.price}`


    hambuItem.querySelector('.produto').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Clicou na pizza')
    })
})

addJson.map((item, index) => {
    console.log(item)
    let nomeCombo = document.querySelector('.itens-add').cloneNode(true)

    document.querySelector('.container-add').append(nomeCombo)
    
    
})



        