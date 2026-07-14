(function() {
    'use strict';
    var TOTAL = 23;
    function getPrefix() {
        var link = document.querySelector('link[rel="stylesheet"]');
        if (link) {
            var href = link.getAttribute('href');
            if (href && href.indexOf('../') === 0) return '../Banner/';
        }
        return 'Banner/';
    }
    function setBanner() {
        var imgs = document.querySelectorAll('.hero-bg img');
        if (imgs.length === 0) return;
        var num = Math.floor(Math.random() * TOTAL) + 1;
        var src = getPrefix() + 'hero-' + num + '.jpg';
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].src = src;
            if (!imgs[i].alt) imgs[i].alt = 'Barley Hair Transplant Banner';
        }
        console.log('Random Banner Loaded: hero-' + num + '.jpg');
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setBanner);
    } else {
        setBanner();
    }
})();
