$(function () {
    $('body').click(function () {
        $('.site-index-classify, .site-index-author').find('.site-index-dropdown').hide()
    })

    $('.site-index-classify, .site-index-author').click(function (event) {
        $('.site-index-classify, .site-index-author').find('.site-index-dropdown').hide()
        $(this).find('.site-index-dropdown').show()
        event.stopPropagation()
    })
})