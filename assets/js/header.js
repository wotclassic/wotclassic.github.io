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
    else if ((isHidden && curScrollTop < lastScrollTop) || (dropdownOpen && curScrollTop - brand_offset > 0)) unHide();
    else if (curScrollTop - brand_offset < 0) unstick();

    function hide() {
        setTimeout(function() { navbar.style.transition = "top 0.2s ease-out 0s"; }, 0.2);
        if (dropdownOpen) {
            return;
        }
        navbar.style.top = "-66px";
        navbar.style.position = "fixed";
        navbar.style.width = "100%";
        navbar.style.zIndex = 3;
        navbar_blank.style.display = "block";
        isHidden = true;
    }
    
    function unHide() {
        navbar.style.position = "fixed";
        navbar.style.width = "100%";
        navbar.style.zIndex = 3;
        navbar.style.top = 0;
        navbar_blank.style.display = "block";
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
