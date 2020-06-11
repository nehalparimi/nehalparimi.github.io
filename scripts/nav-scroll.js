(function navScroll() {
    let nav = document.getElementById('nav-container');
    let banner = document.querySelector('.banner');
    let bannerUnderline = document.getElementById('banner-underline')
    console.log(banner);

    document.addEventListener('scroll', function(e) {
        console.log(document.documentElement.scrollTop);
        
        if (document.documentElement.scrollTop > 65) {
            nav.classList.add('nav-container');
            banner.classList.add('banner-str');
            bannerUnderline.classList.add('banner-underline-str');
        }
        else {
            nav.classList.remove('nav-container');
            banner.classList.remove('banner-str');
            bannerUnderline.classList.remove('banner-underline-str');
        }
    })
})();