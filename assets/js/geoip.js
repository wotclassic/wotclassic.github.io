const endpoint = "https://api.country.is/";

const geoip = async function () {
    if (!document.cookie.includes("country")) {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            document.cookie = `country=${data.country.toLowerCase()}; path=/; max-age=604800;`;
        } catch (error) {
            console.error(error);
            document.getElementById("noGeoNotif").style.display = "revert";
            document.cookie = 'country=ru; path=/;';
        }
    }
}

const promise = geoip();

function isRestricted() {
    const countryCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('country='));
    const country = countryCookie ? countryCookie.split('=')[1] : '';
    return country == "ru" || country == "by";
}

window.addEventListener('DOMContentLoaded', async function () {
    await promise;

    if (isRestricted()) {
        document.querySelectorAll('.geolimited').forEach(el => el.remove());
        document.querySelectorAll('.only_for_limited').forEach(el => el.style.display="revert")

        document.querySelector("link[rel~='icon']").href = "/assets/img/favicon_mt.ico";

        document.querySelector("body").innerHTML = document.querySelector("body").innerHTML
            .replaceAll(/WoT (?:- )?это Классика[!]?/gi, "Мир Танков: Истоки")
            .replaceAll(/WэК[!]?/gi, "МТИ");
        document.querySelector("title").innerHTML = document.querySelector("title").innerHTML
            .replaceAll(/WoT это Классика[!]?/gi, "Мир Танков: Истоки")
            .replaceAll(/WэК[!]?/gi, "МТИ");

        document.querySelectorAll('.geo_replace').forEach(element => {
            const style = window.getComputedStyle(element);
            const bgImage = style.backgroundImage;

            if (bgImage && bgImage !== 'none') {
                const newImage = bgImage
                    .replace(/\.png(["']?\))/i, '_mt.png$1')
                    .replace(/\.jpg(["']?\))/i, '_mt.jpg$1')
                    .replace(/\.jpeg(["']?\))/i, '_mt.jpeg$1')
                    .replace(/\.svg(["']?\))/i, '_mt.svg$1');
                element.style.backgroundImage = newImage;
            }
        });
    }
});
