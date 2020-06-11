(function navScroll() {
    let nav = document.querySelector('.nav-container');
    let banner = document.querySelector('.banner');
    let bannerUnderline = document.querySelector('.banner-underline');

    document.addEventListener('scroll', function(e) {
        // console.log(nav.clientHeight);
        // check the client height part later
        if (document.documentElement.scrollTop > nav.clientHeight) {
            banner.classList.add('banner-scroll');
            bannerUnderline.classList.add('banner-underline-scroll');
        }
        else {
            banner.classList.remove('banner-scroll');
            bannerUnderline.classList.remove('banner-underline-scroll');
        }
    })
})();