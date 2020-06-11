(function navScroll() {
    let nav = document.querySelector('.nav-container');
    let banner = document.querySelector('.banner');
    let bannerUnderline = document.querySelector('.banner-underline');

    let navLinks = Array.from(document.getElementsByClassName('nav-link'));

    document.addEventListener('scroll', function(e) {
        // console.log(nav.clientHeight);
        // check the client height part later
        if (document.documentElement.scrollTop > nav.clientHeight) {
            banner.classList.add('banner-scroll');
            bannerUnderline.classList.add('banner-underline-scroll');

            navLinks.forEach(link => link.classList.add('nav-link-scroll'));
        }
        else {
            banner.classList.remove('banner-scroll');
            bannerUnderline.classList.remove('banner-underline-scroll');

            navLinks.forEach(link => link.classList.remove('nav-link-scroll'))
        }
    })

    // Just for fun, can remove if not needed:
        let bannerContainer = banner.parentElement;
        bannerContainer.addEventListener('mouseover', function () {
            banner.classList.add('boo');
        });
        bannerContainer.addEventListener('mouseleave', function () {
            banner.classList.remove('boo');
        })
})();