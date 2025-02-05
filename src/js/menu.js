// $('#burger').click = function () {
//     $('#menu').classList.add('open')
// }

// $('#menu *').each((item)=> {
//     item.onclick = () => {
//         $('#menu').classList.remove('open')
//     }
// })

$('#burger').click(function(){
    $('#menu').toggleClass('open');
})

$('#menu').click(function(){
    $('#menu').removeClass('open');
})

