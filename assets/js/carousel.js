---
layout: js_minifier
---
var cur_slide_num = 0;
var is_playing = false;
var slides, dots, left_arrow, right_arrow;

function setup_carousel() {
    slides = document.querySelectorAll('.carousel-slide');
    dots = document.querySelectorAll('.carousel-dot');
    left_arrow = document.querySelector('.carousel-control');
    right_arrow = document.querySelector('.carousel-control_right');

    for (var i = 0; i < slides.length; i++) {
        var className = 'carousel-text_'+i;
        text = slides[i].querySelector('.carousel-text');
        document.styleSheets[0].insertRule('.' + className + ':hover { bottom: ' + text.clientHeight +'px; transition-delay: 0.3s; }', 0);
        if (i > 0) slides[i].style.display = 'none';
        text.classList.add(className);
    }

    left_arrow.addEventListener('click', function() {
        if (is_playing) return;
        if (cur_slide_num === 0) slide_to(slides.length-1);
        else slide_to(cur_slide_num-1);
        return;
    });
    right_arrow.addEventListener('click', function() {
        if (is_playing) return;
        if (cur_slide_num === slides.length-1) slide_to(0);
        else slide_to(cur_slide_num+1);
        return;
    });

    for (var i = 0; i < dots.length; i++) {
        function v(dot, i) {
            dots[i].addEventListener('click', function() {
                if (is_playing) return;
                slide_to(i);
            });
        }
        v(dots[i], i);
    }
}

function slide_to(num) {
    if (cur_slide_num === num) return;
    var cur_slide = slides[cur_slide_num];
    var new_slide = slides[num];
    var cur_dot = dots[cur_slide_num];
    var new_dot = dots[num];
    is_playing = true;
    cur_slide.classList.remove('slide-active');
    new_slide.style.display="block";
    cur_dot.classList.remove('dot-active');
    new_dot.classList.add('dot-active');
    setTimeout(function() {
        new_slide.classList.add('slide-active');
    }, 250);
    setTimeout(function() {
        cur_slide.style.display="none";
        is_playing = false;
        cur_slide_num = num;
    }, 1000)
}

try {
    document.fonts.ready.then(setup_carousel)
} catch (e) {
    window.addEventListener('load', setup_carousel)
}