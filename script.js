document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as imagens que deverão abrir o modal
    const galleryImages = document.querySelectorAll('.gallery-img');

    // Cria um elemento para o fundo do modal
    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');
    document.body.appendChild(modalBackground);

    // Cria um elemento para a imagem dentro do modal
    const modalImage = document.createElement('img');
    modalImage.classList.add('modal-image');
    modalBackground.appendChild(modalImage);

    // Adiciona evento de clique para cada imagem da galeria
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            modalImage.src = this.src; // Define o src da imagem do modal para a imagem clicada
            modalBackground.classList.add('active'); // Exibe o modal
        });
    });

    // Fecha o modal ao clicar no fundo
    modalBackground.addEventListener('click', function() {
        this.classList.remove('active'); // Oculta o modal
    });
});
