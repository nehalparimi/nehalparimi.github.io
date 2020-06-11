(function navScroll() {
    let nav = document.querySelector('.nav-container');
    let banner = document.querySelector('.banner');
    let bannerUnderline = document.getElementById('banner-underline');

    // let navBelow = document.querySelector(['data-onScroll=true']);
    // console.log(navBelow)

    document.addEventListener('scroll', function(e) {
        // console.log(nav.clientHeight);
        // check the client height part later
        if (document.documentElement.scrollTop > nav.clientHeight) {
            nav.classList.add('nav-container-scroll');
            banner.classList.add('banner-scroll');
            bannerUnderline.classList.add('banner-underline-scroll');
        }
        else {
            nav.classList.remove('nav-container-scroll');
            banner.classList.remove('banner-scroll');
            bannerUnderline.classList.remove('banner-underline-scroll');
        }
    })
})();