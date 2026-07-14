/**
 * Random Doctor-Patient Photos Script
 * 首页专属：每次刷新随机显示8张不同的医患合影
 * 图片来源：Photos(1-76)
 */

(function() {
    'use strict';

    var TOTAL_PHOTOS = 76;

    var descriptions = [
        { title: 'Successful Hair Transplant', desc: 'Patient with doctor after procedure' },
        { title: 'Natural Hairline Restoration', desc: 'Happy patient with restored confidence' },
        { title: 'Beard Transplant Success', desc: 'Patient pleased with beard restoration' },
        { title: 'Female Hair Restoration', desc: 'Excellent results for female patient' },
        { title: 'Scar Camouflage Success', desc: 'Scar effectively concealed by our experts' },
        { title: 'Eyebrow Transplant Results', desc: 'Natural-looking eyebrow restoration' },
        { title: 'Crown Area Restoration', desc: 'Complete crown coverage achieved' },
        { title: 'High-Density Transplant', desc: 'Maximum density results delivered' },
        { title: 'FUE Hair Transplant Success', desc: 'Patient thrilled with FUE results' },
        { title: 'Microneedle Transplant Results', desc: 'Superior results with microneedle tech' },
        { title: 'Hairline Lowering Success', desc: 'Perfect hairline design achieved' },
        { title: 'Full Head Restoration', desc: 'Comprehensive hair restoration completed' },
        { title: 'Temporal Hairline Repair', desc: 'Temporal area successfully restored' },
        { title: 'Vertex Hair Restoration', desc: 'Vertex area density improved significantly' },
        { title: 'Mature Hairline Correction', desc: 'Natural mature hairline recreated' },
        { title: 'Receding Hairline Repair', desc: 'Receding hairline successfully corrected' },
        { title: 'Thinning Area Restoration', desc: 'Thinning areas now fully covered' },
        { title: 'Hair Volume Enhancement', desc: 'Significant volume improvement achieved' },
        { title: 'Norwood III Restoration', desc: 'Excellent Norwood III case results' },
        { title: 'Norwood IV Restoration', desc: 'Successful Norwood IV restoration case' }
    ];

    function shuffle(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
        return a;
    }

    function pickRandomPhotos(count) {
        var photos = [];
        var used = {};
        while (photos.length < count) {
            var num = Math.floor(Math.random() * TOTAL_PHOTOS) + 1;
            if (!used[num]) {
                photos.push(num);
                used[num] = true;
            }
        }
        return photos;
    }

    function setRandomPhotos() {
        var photoItems = document.querySelectorAll('.photos-grid .photo-item');
        if (photoItems.length === 0) return;

        var selectedPhotos = pickRandomPhotos(8);
        var descs = shuffle(descriptions).slice(0, 8);

        for (var i = 0; i < 8 && i < photoItems.length; i++) {
            var img = photoItems[i].querySelector('img');
            var h4 = photoItems[i].querySelector('h4');
            var p = photoItems[i].querySelector('p');

            if (img) img.src = 'Photos/Photos-' + selectedPhotos[i] + '.jpg';
            if (h4) h4.textContent = descs[i].title;
            if (p) p.textContent = descs[i].desc;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setRandomPhotos);
    } else {
        setRandomPhotos();
    }
})();
