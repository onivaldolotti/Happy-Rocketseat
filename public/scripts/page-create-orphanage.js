//create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

//create and add marker
map.on('click', (event) => {
    const {lat, lng} = event.latlng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat,lng], {icon}).addTo(map);
})

function addPhotoField () {
    //pegar o container de fotos #images
    const images = document.querySelector('#images');

    //pegar o container para duplicar o .new-upload
    const newUploads = document.querySelectorAll('.new-upload');

    //realizar o clone da última imagem adicionada
    const clonedUpload = newUploads[newUploads.length -1].cloneNode(true);

    //verifica se o campo esta vazio
    let fieldValue = clonedUpload.children[0];
    if(fieldValue.value === "") {
        return;
    }

    //limpar o campo antes de adicionar ao container de images
    fieldValue.value = '';

    //adicionar o clone ao container de #images
    images.appendChild(clonedUpload);
}

function deleteField(event) {
    const span = event.currentTarget;

    const newUploads = document.querySelectorAll('.new-upload');

    if (newUploads.length < 2) {
        span.parentNode.children[0].value = '';
        return;
    }

    //deletar o campo
    span.parentNode.remove();
}

function toggleSelect(event) {
    //pegar o botao clicado
    const button = event.currentTarget;

    //retirar a classe active dos botões
    document.querySelectorAll('.button-select button').forEach(button =>
        button.classList.remove('active')
    )
    //colocar a classe active
    button.classList.add('active');

    //atualizar o input hidden
    const input = document.querySelector('#open_on_weekends');
    input.value = button.dataset.value;
}