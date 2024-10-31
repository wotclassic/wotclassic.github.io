---
layout: js_minifier
---
var brand_offset, navbar, navbar_blank;
var lastScrollTop = 0;
var isHidden = false;

function navbarInit() {
    brand_offset = document.getElementsByClassName("brand-header")[0].offsetHeight;
    navbar = document.getElementById("navbar");
    navbar_blank = document.getElementById("navbar_blank");
}

function navbarStick() {
    curScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (!isHidden && curScrollTop - (navbar.offsetHeight + brand_offset) > 0 && curScrollTop > lastScrollTop) hide();
    else if (isHidden && curScrollTop < lastScrollTop) unHide();
    else if (curScrollTop - brand_offset < 0) unstick();

    function hide() {
        navbar.style.top = "-66px";
        navbar.style.position = "fixed";
        navbar.style.width = "100%";
        navbar.style.zIndex = 3;
        setTimeout(function() { navbar.style.transition = "top 0.2s ease-out 0s"; }, 0.2);
        navbar_blank.style.display = "block";
        isHidden = true;

        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                openDropdown.parentElement.classList.remove("show");
            }
        }
    }

    function unHide() {
        navbar.style.top = 0;
        isHidden = false;
    }

    function unstick() {
        navbar.style.position = "relative";
        navbar.style.removeProperty("width");
        setTimeout(function() { navbar.style.removeProperty("transition"); }, 0.2);
        navbar_blank.style.display = "none";
        isHidden = false;
    }

    lastScrollTop = curScrollTop <= 0 ? 0 : curScrollTop;
}

window.addEventListener("scroll", navbarStick);
document.addEventListener("DOMContentLoaded", navbarInit);
