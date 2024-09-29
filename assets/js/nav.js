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


//gallery

const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const close = document.getElementById('close');
const body = $('body'); // jQuery 對 body 的引用

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = 'flex';
        modal.style.visibility = 'visible';
        modalImage.src = thumbnail.src;  // 設定模態框中的圖片為被點擊的圖片
        caption.innerHTML = thumbnail.alt; // 設定標題為圖片的alt文本
        body.css('overflow', 'hidden'); // 禁止背景滾動
    });
});

close.addEventListener('click', () => {
    modal.style.display = 'none'; // 關閉模態框
    modal.style.visibility = 'hidden';
    body.css('overflow', 'auto'); // 恢復背景滾動
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // 點擊模態框外部關閉模態框
        modal.style.visibility = 'hidden';
        body.css('overflow', 'auto'); // 恢復背景滾動
    }
});


