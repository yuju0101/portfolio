$(document).ready(function () {
    $('.toggler').click(function () {
        const menu = $('.menu');
        const body = $('body');

        if (menu.css('visibility') === 'hidden') {
            menu.css('visibility', 'visible');
            body.css('overflow', 'hidden');
        } else {
            menu.css('visibility', 'hidden');
            body.css('overflow', 'auto');
        }
    });
    $('.toggler').on('click', function () {
        $(this).toggleClass('active');
    });
});


$(document).ready(function () {
    $(window).scroll(function () {
        const scrollTop = $(window).scrollTop();
        const nav = $('.c-nav');

        if (scrollTop > 0) {
            nav.css('background-color', 'rgba(100%,100%,100%,0.6)'); // 滾動後變色
        } else {
            nav.css('background-color', 'transparent'); // 滾動到頂部時變回透明
        }
    });
});
