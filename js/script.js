function degistir(){
    const favoributton = document.querySelector('.favorite-btn');
    favoributton.classList.toggle('active');
    if(favoributton.className.includes('active')){
        favoributton.innerHTML= ` <span class="material-symbols-rounded">favorite</span>
                    Favori Eklendi`;
    }
    else {
        favoributton.innerHTML=` <span class="material-symbols-rounded">favorite</span>
                    Favori Ekle`
    }
}