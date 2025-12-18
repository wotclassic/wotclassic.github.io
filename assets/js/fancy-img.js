var FANCYIMGEXPR = /_thumb-[a-z0-9]{6}-[0-9]*x[0-9]*.webp$/

function OpenImgWindow(ev) {
    var wrapper = document.createElement('div');
    wrapper.className = 'fancy-img_wrapper';
    wrapper.onclick = CloseImgWindow;
    wrapper.classList.add('fade-out');
    document.body.appendChild(wrapper);
    
    var wrapwrapper = document.createElement('div');
    wrapwrapper.className = 'fancy-img_wrapwrapper';
    wrapper.appendChild(wrapwrapper);

    var img = document.createElement('img');
    img.src = this.children[0].src.replace(FANCYIMGEXPR, "");
    img.style.maxWidth = "100%";
    img.style.maxHeight = "90vh";
    wrapwrapper.appendChild(img);

    var closeButton = document.createElement('button');
    closeButton.className = 'fancy-img_close-button';
    closeButton.onclick = CloseImgWindow;
    wrapwrapper.appendChild(closeButton);
    document.documentElement.style.marginRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
        wrapper.classList.remove('fade-out');
    }, 1);

    ev.preventDefault();
}

function CloseImgWindow(ev) {
    if (ev.target !== ev.currentTarget) return false;
    var wrapper = document.getElementsByClassName('fancy-img_wrapper')[0];
    wrapper.classList.add('fade-out');
    document.body.style.overflow = null;
    document.documentElement.style.marginRight = null;
    setTimeout(function () {
        wrapper.remove();
    }, 500);
    ev.preventDefault();
}

window.addEventListener('DOMContentLoaded', function () {
    var fancy_imgs = this.document.getElementsByClassName('fancy-img');
    for (var i = 0; i < fancy_imgs.length; i++) {
        var e = fancy_imgs[i];
        var wrap = this.document.createElement('a');

        if (e.classList.contains("b-img-signature_img"))
            wrap.className = "b-img-signature_link";

        wrap.href = e.src.replace(FANCYIMGEXPR, "");
        e.parentElement.insertBefore(wrap, e);
        wrap.appendChild(e);
        wrap.onclick = OpenImgWindow;
    }
})