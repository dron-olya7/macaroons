let order = $('#order');
let name = $('#name');
let phone = $('#phone');

$('#btn-macaroons-action').click((e) => {
    order.val($(e.target).parents('.choose-macaroon-cart').find('.choose-macaroon-title').text());
    $('#order-macaroons')[0].scrollIntoView({behavior: 'smooth'});
});

$('#submit').click(function () {
    if(!order.val()){
        order.css({
            border: '2px solid red'
        });

        alert('Заполните поле Заказать');
        return;
    }
    if(!name.val()){
        name.css({
            border: '2px solid red'
        });

        alert('Заполните поле Имя');
        return;
    }
    if (!phone.val()){
        phone.css({
            border: '2px solid red'
        });

        alert('Заполните поле Телефон');
        return;
    }
})
  
  