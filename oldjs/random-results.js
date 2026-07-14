/**
 * Random Before & After Results Script
 * 首页专属：每次刷新随机显示6张不同的案例图片
 * 图片来源：Beard(1-5), Eyebrow(1-2), manBald(1-26), manHairline(1-35), women(1-33)
 */

(function() {
    'use strict';

    var folders = [
        { name: 'Beard', max: 5 },
        { name: 'Eyebrow', max: 2 },
        { name: 'manBald', max: 26 },
        { name: 'manHairline', max: 35 },
        { name: 'women', max: 33 }
    ];

    var descriptions = [
        { title: 'Hairline Restoration', time: '6 months after surgery' },
        { title: 'Crown Area Restoration', time: '12 months after surgery' },
        { title: 'Full Density Restoration', time: '10 months after surgery' },
        { title: 'Frontal Hairline Rebuild', time: '8 months after surgery' },
        { title: 'Complete Hair Restoration', time: '11 months after surgery' },
        { title: 'Natural Hairline Design', time: '9 months after surgery' },
        { title: 'Hair Density Enhancement', time: '7 months after surgery' },
        { title: 'Full Head Restoration', time: '10 months after surgery' },
        { title: 'Hairline Lowering', time: '8 months after surgery' },
        { title: 'Crown & Mid-Scale Recovery', time: '12 months after surgery' },
        { title: 'Temporal Hairline Restoration', time: '6 months after surgery' },
        { title: 'Scalp Coverage Restoration', time: '9 months after surgery' },
        { title: 'Mature Hairline Correction', time: '7 months after surgery' },
        { title: 'Receding Hairline Repair', time: '8 months after surgery' },
        { title: 'Thinning Area Restoration', time: '10 months after surgery' },
        { title: 'Hair Volume Restoration', time: '11 months after surgery' },
        { title: 'Norwood III Restoration', time: '9 months after surgery' },
        { title: 'Norwood IV Restoration', time: '12 months after surgery' },
        { title: 'Vertex Hair Restoration', time: '8 months after surgery' },
        { title: 'Hairline & Crown Combo', time: '14 months after surgery' }
    ];

    function buildAllImages() {
        var all = [];
        for (var i = 0; i < folders.length; i++) {
            var folder = folders[i];
            for (var j = 1; j <= folder.max; j++) {
                all.push(folder.name + '/' + folder.name + '-' + j + '.jpg');
            }
        }
        return all;
    }

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

    function pickRandom(arr, count) {
        return shuffle(arr).slice(0, count);
    }

    function setRandomResults() {
        var resultItems = document.querySelectorAll('.results-grid .result-item');
        if (resultItems.length === 0) return;

        var allImages = buildAllImages();
        var selected = pickRandom(allImages, 8);
        var descs = shuffle(descriptions).slice(0, 8);

        for (var i = 0; i < 8 && i < resultItems.length; i++) {
            var img = resultItems[i].querySelector('img');
            var h4 = resultItems[i].querySelector('h4');
            var p = resultItems[i].querySelector('p');

            if (img) img.src = selected[i];
            if (h4) h4.textContent = descs[i].title;
            if (p) p.textContent = descs[i].time;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setRandomResults);
    } else {
        setRandomResults();
    }
})();
