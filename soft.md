---
title: Полезный софт
permalink: /community/soft
---

<div class="content">
    <h1>Полезный софт</h1>
    <div class="b-software-promo">
        <div class="b-software-promo_main">
            <a class="b-software-promo_main-link" href="/web/20160907113848/http://worldoftanks.ru/ru/soft/mobile_apps/worldoftanksmagazine/">
                <img class="b-software-promo_main-img" src="/assets/img/soft/ugv_609x299.png" alt="World of Tanks Magazine">
                <ul class="b-platform-icons__main"> 
                        <li class="b-platform-icon_item"><img src="/assets/img/win-icon.png"></li>
                </ul>
                <div class="b-software-promo_main-text">
                    <div class="b-software-promo_main-title">
                        <span class="b-software-promo_main-title-bg b-software-promo_main-title-bg__level-1">
                            <span class="b-software-promo_main-title-bg b-software-promo_main-title-bg__level-2">
                                <span class="b-software-promo_main-title-bg b-software-promo_main-title-bg__level-3">Унесённый громом войны</span>
                            </span>
                        </span>
                    </div>
                    <p class="b-software-promo_main-producer">OmniLab Research & Development</p>
                </div>
            </a>
        </div>
        <div class="b-software-promo_small b-software-promo_small__first">
            <a class="b-software-promo_small-link" href="https://wgmods.net/">
                <img class="b-software-promo_small-img" src="/assets/img/soft/wgmods.png">
            </a>
            <div class="b-app-info__promo-small">
                <div class="b-app-info_text">
                    <a class="b-app-info_title" href="https://wgmods.net/">WGmods</a>
                    <p class="b-app-info_producer">Wargaming.net</p>
                </div>
                <ul class="b-platform-icon b-platform-icons__promo-small">
                        <li class="b-platform-icons_item"><img src="/assets/img/www-icon.png"></li>
                </ul>
            </div>
        </div>
        <div class="b-software-promo_small">
            <div class="b-app-info__promo-small">
                <div class="b-app-info_text">
                    <a class="b-app-info_title" href="https://kr.cm/f/t/38226/c/539858/">Новогодний ангар</a>
                    <p class="b-app-info_producer">____P_H_A_R_A_O_N____</p>
                </div>
                <ul class="b-platform-icon b-platform-icons__promo-small">
                        <li class="b-platform-icons_item"><img src="/assets/img/win-icon.png"></li>
                </ul>
            </div>
            <a class="b-software-promo_small-link" href="https://kr.cm/f/t/38226/c/539858/">
                <img class="b-software-promo_small-img" src="/assets/img/soft/nyhangar.png">
            </a>
        </div>
    </div>
    <div>
        <div class="b-composite-heading" style="margin: 300px 38px 35px;">
            <h3 class="b-composite-heading_title b-composite-heading_title__uppercase">Фан-ресурсы</h3>
            <a class="orange-arrow" style="top: 6px;     display: table-column;" href="/web/20160907113848/http://worldoftanks.ru/ru/soft/fan-pages/">Ещё</a>
        </div>
        <div style="margin-left: 23px;">
        {% assign fan_pages = site.collections | where: "label", "fan-pages" | first %}
        {% for fpage in fan_pages.docs %}
            {% include fan-pages/fan-block.html url=fpage.url image=fpage.image title=fpage.title desc=fpage.developer icon_urls=fpage.icon_urls %}
        {% endfor %}
        </div>
    </div>
        <div>
        <div class="b-composite-heading" style="margin: 0px 38px 35px;">
            <h3 class="b-composite-heading_title b-composite-heading_title__uppercase">Моды</h3>
            <a class="orange-arrow" style="top: 6px;     display: table-column;" href="/web/20160907113848/http://worldoftanks.ru/ru/soft/fan-pages/">Ещё</a>
        </div>
        <div style="margin-left: 23px;">
        {% assign soft = site.collections | where: "label", "soft" | first %}
        {% for fpage in soft.docs %}
            {% include fan-pages/fan-block.html url=fpage.url image=fpage.image title=fpage.title desc=fpage.developer icon_urls=fpage.icon_urls %}
        {% endfor %}
        </div>
    </div>
</div>