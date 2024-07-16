$(document).ready(function() {
    $('.read-more-btn').click(function() {
        var $cardText = $(this).siblings('.card-text');
        var $shortText = $cardText.find('.short-text');
        var $fullText = $cardText.find('.full-text');

        if ($fullText.is(':visible')) {
            $fullText.hide();
            $shortText.show();
            $(this).text('Daha fazlasını oku');
        } else {
            $fullText.show();
            $shortText.hide();
            $(this).text('Daha azını oku');
        }
    });
});
