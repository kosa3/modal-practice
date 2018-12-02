var $ = require('jquery');

$(function(){
    $('#modal').on('click', function () {
        console.log(123);
        $(this).css('display', 'block');
    });
});
