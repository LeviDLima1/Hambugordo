const search_box = document.querySelector('.js-search-box');
const search_btn = document.querySelector('.open-search');
const close_btn = document.querySelector('.js-close');

search_btn.addEventListener('click', () => {
    search_box.classList.add('active');
});

close_btn.addEventListener('click', () => {
    search_box.classList.remove('active');
})

document.querySelector('.bnt-cadastro').addEventListener('click', () => {

    document.querySelector('.login-box').style.display = 'block'
})

document.querySelector('.login-back').addEventListener('click', () => {

    document.querySelector('.login-box').style.display = 'none'
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

        document.querySelector('.hambuCombo-Img img').src = item.img
        document.querySelector('.hambu-Combo-Description').innerHTML = item.description
        document.querySelector('.hambuCombo-Name').innerHTML = item.name
        //hambuItem.querySelector('.preco-produto').innerHTML = `R$ ${item.price}`   


        document.querySelector('.hambuWindow-Area').style.display = 'block'
    })


    document.querySelector('.hambuWindow-Back').addEventListener('click', () => {
        document.querySelector('.hambuWindow-Area').style.display = 'none'
    })
})




        