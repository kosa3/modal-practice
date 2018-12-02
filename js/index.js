var $ = require('jquery');

$(function() {
    $('#modal-button').on('click', function () {
        var $modal = $('#modal');
        if ($modal.is(':visible')) {
            $(this).text('モーダル表示');
            $modal.css('display', 'none');
        } else {
            $(this).text('モーダル非表示');
            $modal.css('display', 'block');
        }
    });
});
