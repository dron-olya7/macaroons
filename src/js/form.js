let order = $('#order');
let name = $('#name');
let phone = $('#phone');
let loader = $('.loader');
let hasError = false;

$('.macaroons-action.btn').click((e) => {
    order.val($(e.target).parents('.choose-macaroon-cart').find('.choose-macaroon-title').text());
    $('#order-macaroons')[0].scrollIntoView({behavior: 'smooth'});
});

$('#submit').click(function (e) {
    e.preventDefault();

    $('.error-input').hide();

    if(!order.val()){
        order.next().show();
        order.css({
            border: '2px solid red'
        });
        $(order).addClass("input-error");
        hasError = true;
    }else{
        order.css('border', "1px solid rgb(130, 19, 40)");
    }

    if(!name.val()){
        name.next().show();
        name.css({
            border: '2px solid red'
        });
        hasError = true;
    }else{
        name.css('border', "1px solid rgb(130, 19, 40)");
    }

    if (!phone.val()){
        phone.next().show();
        phone.css({
            border: '2px solid red'
        });
        hasError = true;
    }else{
        phone.css('border', "1px solid rgb(130, 19, 40)");
    }

    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.ru/checkout",
            data: {order: order.val(), name: name.val(), phone: phone.val()}
        })
            .done(function(msg){
                loader.hide();
                if (msg.success){
                    $('.order-macaroons-title').text("Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!")
                    $('.order-macaroons-description').hide();
                    $('.order-macaroon-form').hide();
                }else{
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            })
    }

    $('#form')[0].reset();
})
  

