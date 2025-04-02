$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const urlDaImgNova = $('#url-img').val();
        const novoItem = $('<li></li>');
        
        $(`<img src='${urlDaImgNova}'/>`).appendTo(novoItem);
        $(` 
            <div class="overlay-img-link">
                <a href="${urlDaImgNova}" title="Ver Imagem em tamanho real" target="_blank">Ver Imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('url-img').val('');
    })
})