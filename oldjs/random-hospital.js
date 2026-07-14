/**
 * Random Hospital Environment Script
 * 城市页面专用：每次刷新随机显示6张不同的医院环境图片
 * 图片来源：Hospital(1-73)
 */

(function() {
    'use strict';

    var TOTAL_HOSPITAL = 73;
    var basePath = '';

    var descriptions = [
        { title: 'Modern Reception Area', desc: 'Welcoming and comfortable environment for patients' },
        { title: 'Private Consultation Rooms', desc: 'Confidential and professional consultations' },
        { title: 'Advanced Operating Rooms', desc: 'Equipped with the latest medical technology' },
        { title: 'Comfortable Recovery Area', desc: 'Relaxing environment for post-procedure care' },
        { title: 'Patient Waiting Lounge', desc: 'Spacious and comfortable waiting area' },
        { title: 'Advanced Medical Equipment', desc: 'State-of-the-art hair transplant technology' },
        { title: 'Sterile Surgical Suite', desc: 'Highest standards of cleanliness and safety' },
        { title: 'Professional Medical Team', desc: 'Experienced staff ready to assist you' },
        { title: 'Luxury Patient Room', desc: 'Premium comfort during your stay' },
        { title: 'Modern Diagnostic Center', desc: 'Comprehensive hair analysis facilities' },
        { title: 'Treatment Planning Room', desc: 'Personalized consultation space' },
        { title: 'Post-Op Care Center', desc: 'Dedicated recovery monitoring area' },
        { title: 'Hair Analysis Laboratory', desc: 'Advanced scalp diagnostics' },
        { title: 'Patient Care Lounge', desc: 'Relaxing atmosphere for comfort' },
        { title: 'Medical Technology Center', desc: 'Cutting-edge equipment for best results' },
        { title: 'Professional Staff Area', desc: 'Where our expert team prepares for procedures' },
        { title: 'Comfortable Lounge', desc: 'Relax before and after your procedure' },
        { title: 'Treatment Consultation Area', desc: 'Private space for detailed discussions' },
        { title: 'Modern Facility Interior', desc: 'Clean and contemporary design' },
        { title: 'Premium Healthcare Space', desc: 'World-class medical environment' }
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

    function pickRandomNumbers(count, max) {
        var numbers = [];
        var used = {};
        while (numbers.length < count) {
            var num = Math.floor(Math.random() * max) + 1;
            if (!used[num]) {
                numbers.push(num);
                used[num] = true;
            }
        }
        return numbers;
    }

    function detectBasePath() {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var rawSrc = scripts[i].getAttribute('src') || '';
            if (rawSrc.indexOf('random-hospital.js') !== -1) {
                if (rawSrc.indexOf('../') !== -1) {
                    basePath = '../';
                } else {
                    basePath = '';
                }
                break;
            }
        }
    }

    function setRandomHospital() {
        detectBasePath();
        var hospitalItems = document.querySelectorAll('.hospital-grid .hospital-item');
        if (hospitalItems.length === 0) return;

        var selectedNumbers = pickRandomNumbers(6, TOTAL_HOSPITAL);
        var descs = shuffle(descriptions).slice(0, 6);

        for (var i = 0; i < 6 && i < hospitalItems.length; i++) {
            var img = hospitalItems[i].querySelector('img');
            var h4 = hospitalItems[i].querySelector('h4');
            var p = hospitalItems[i].querySelector('p');

            if (img) img.src = basePath + 'Hospital/Hospital-' + selectedNumbers[i] + '.jpg';
            if (h4) h4.textContent = descs[i].title;
            if (p) p.textContent = descs[i].desc;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setRandomHospital);
    } else {
        setRandomHospital();
    }
})();
