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

function getCountry() {
    const countryCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('country='));
    return countryCookie ? countryCookie.split('=')[1] : '';
}

function isRestricted() {
    const country = getCountry();
    return country == "ru" || country == "by";
}

window.addEventListener('DOMContentLoaded', async function () {
    await promise;

    if (isRestricted()) {
        document.querySelectorAll('.geolimited').forEach(el => el.remove());
        document.querySelectorAll('.only_for_limited').forEach(el => el.style.display = "revert");
        document.querySelector("link[rel~='icon']").href = "/assets/img/favicon_mt.ico";

        const replacements = [
            { pattern: /WoT (?:- )?это Классика[!]?/gi, replacement: "Мир Танков: Истоки" },
            { pattern: /WэК[!]?/gi, replacement: "МТИ" }
        ];

        function replaceText(replacements) {
            const treeWalker = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode: function(node) {
                        const tagName = node.parentNode.tagName;
                        if (['SCRIPT', 'STYLE', 'TEXTAREA', 'NOSCRIPT'].includes(tagName)) {
                            return NodeFilter.FILTER_REJECT;
                        }
                        return NodeFilter.FILTER_ACCEPT;
                    }
                }
            );

            while (treeWalker.nextNode()) {
                let value = treeWalker.currentNode.nodeValue;
                replacements.forEach(rep => {
                    value = value.replace(rep.pattern, rep.replacement);
                });
                treeWalker.currentNode.nodeValue = value;
            }
        }

        replaceText(replacements);
        document.querySelector("title").textContent = document.querySelector("title").textContent
            .replace(replacements[0].pattern, replacements[0].replacement)
            .replace(replacements[1].pattern, replacements[1].replacement);

        document.querySelectorAll('.geo_replace').forEach(element => {
            const style = window.getComputedStyle(element);
            const bgImage = style.backgroundImage;
            if (bgImage && bgImage !== 'none') {
                element.style.backgroundImage = bgImage
                    .replace(/\.(png|jpe?g|svg)(["']?\))/gi, '_mt.$1$2');
            }
        });
    }
});