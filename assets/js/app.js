$(function () {
    $('body').click(function () {
        $('.site-index-classify, .site-index-author').find('.site-index-dropdown').removeClass('is-active');
    })

    $('.site-index-classify, .site-index-author').click(function (event) {
        $('.site-index-classify, .site-index-author').find('.site-index-dropdown').removeClass('is-active');
        $(this).find('.site-index-dropdown').addClass('is-active');
        event.stopPropagation();
    })

    $(document).one('opening', '.remodal', function () {
        $('#search').gsearch();
    });

    var inst = $('[data-remodal-id=search]').remodal();

    $('#searchInput').on('focus', function () {
        inst.open();
    })
})