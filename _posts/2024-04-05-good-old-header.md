---
title: Глобальное обновление старой шапки ангара
date: 2024-04-05 21:00:00 +0300
tags: [important]
category: updates
image: "/assets/img/news/thumbnail/header_127x.png"
image_small: "/assets/img/news/image_small/old_lobbyHeader.png"
---

Революция интерфейса скоро свершится.
{: style="display: none" }

![header]({{ '/assets/img/news/header/old_header.png' | relative_url }})

Танкисты!
{: style="margin-top: 10px" }

Первое в году обновление наших модов принесёт в игру помимо всего прочего одно из самых важных нововведений -- полностью функционирующую старую шапку ангара. С этого момента нам открываются новые горизонты разработки интерфейсных модификаций. Давайте же взглянем на то, как она работает.

#### Содержание
{: .no_toc}

- Содержание
{:toc}

Мод выходит в режим **альфа-релиза**, ожидайте множество недоработок и багов. Обо всех встреченных ошибках просим сообщать в канал-форум `#баг-трекер` на нашем [Discord-сервере]({{ site.data.socials.wek.discord.url }}).
{: .message-error }

## Что нового?

С момента последнего обновления шапка ангара сильно преобразилась. Она стала большой и прозрачной. Валюты теперь выстроены в столбец, а не в строку. Некоторые элементы шапки, например, задачи и кланы из меню перекочевали в саму шапку. Также переехали кнопки боевого обучения и личных резервов.

## Как взаимодействовать с новой старой шапкой?

Интерактивная схема ниже доходчиво объяснит вам, как взаимодействовать с шапкой ангара после апрельского обновления.

**Интерактивное изображение.** Наведите курсором на интересующий вас элемент и прочитайте подсказку.
{: .message-money }

<div class="diagram-tooltips">
  <div>
    <span tooltip="Это ваш игровой никнейм, при нажатии на него открывается современное окно профиля. Ниже находится статус вашего аккаунта." flow="down" style="top: -7px; left: 90px; padding: 0.5em 2.67em;"></span>
  </div>
  <div>
    <span tooltip="Кнопка создания взвода переехала в подменю выбора типа боя. При нажатии на данную кнопку создается окно взвода. Для каждого режима создается соответствующее окно." flow="down" style="top: 13px;left: -2px;padding: 1.1em 4.2em;"></span>
  </div>
  <div>
    <span tooltip="Иконка вашего клана. При нажатии на нее открывается современное окно клана." flow="left" style=" top: -86px; left: 106px; padding: 0.5em 0.48em;"></span>
    <span tooltip="Кнопка боевого обучения. При нажатии вас переносит на страницу руководства по игре прямо в клиенте." flow="right" style="top: -72px; left: -254px; padding: 0.8em 1.48em;"></span>
    <span tooltip="Кнопка боевых задач. При нажатии открывает страницу 'задач' в ангаре." flow="right" style="top: -72px; left: -352px; padding: 0.8em 1.88em;"></span>
  </div>
</div>

<style>
[tooltip] {
  position: relative;
}

[tooltip]::before,
[tooltip]::after {
  text-transform: none;
  font-size: .9em;
  line-height: 1;
  user-select: none;
  pointer-events: none;
  position: absolute;
  display: none;
  opacity: 0;
}
[tooltip]::before {
  content: '';
  border: 5px solid transparent;
  z-index: 1001;
}
[tooltip]::after {
    content: attr(tooltip);
    font: 12px "robotoregular", "Arial Narrow", Arial, sans-serif;
    min-width: 23em;
    max-width: 23em;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1ch 1.5ch;
    border-radius: .3ch;
    box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
    background: #333;
    color: #fff;
    z-index: 1000;
}

[tooltip]:hover::before,
[tooltip]:hover::after {
  display: block;
}

[tooltip='']::before,
[tooltip='']::after {
  display: none !important;
}

[tooltip]:not([flow])::before,
[tooltip][flow^="up"]::before {
  bottom: 100%;
  border-bottom-width: 0;
  border-top-color: #333;
}
[tooltip]:not([flow])::after,
[tooltip][flow^="up"]::after {
  bottom: calc(100% + 5px);
}
[tooltip]:not([flow])::before,
[tooltip]:not([flow])::after,
[tooltip][flow^="up"]::before,
[tooltip][flow^="up"]::after {
  left: 50%;
  transform: translate(-50%, -.5em);
}

[tooltip][flow^="down"]::before {
  top: 100%;
  border-top-width: 0;
  border-bottom-color: #333;
}
[tooltip][flow^="down"]::after {
  top: calc(100% + 5px);
}
[tooltip][flow^="down"]::before,
[tooltip][flow^="down"]::after {
  left: 50%;
  transform: translate(-50%, .5em);
}

[tooltip][flow^="left"]::before {
  top: 50%;
  border-right-width: 0;
  border-left-color: #333;
  left: calc(0em - 5px);
  transform: translate(-.5em, -50%);
}
[tooltip][flow^="left"]::after {
  top: 50%;
  right: calc(100% + 5px);
  transform: translate(-.5em, -50%);
}

[tooltip][flow^="right"]::before {
  top: 50%;
  border-left-width: 0;
  border-right-color: #333;
  right: calc(0em - 5px);
  transform: translate(.5em, -50%);
}
[tooltip][flow^="right"]::after {
  top: 50%;
  left: calc(100% + 5px);
  transform: translate(.5em, -50%);
}

@keyframes tooltips-vert {
  to {
    opacity: .9;
    transform: translate(-50%, 0);
  }
}

@keyframes tooltips-horz {
  to {
    opacity: .9;
    transform: translate(0, -50%);
  }
}

[tooltip]:not([flow]):hover::before,
[tooltip]:not([flow]):hover::after,
[tooltip][flow^="up"]:hover::before,
[tooltip][flow^="up"]:hover::after,
[tooltip][flow^="down"]:hover::before,
[tooltip][flow^="down"]:hover::after {
  animation: tooltips-vert 300ms ease-out forwards;
}
[tooltip][flow^="left"]:hover::before,
[tooltip][flow^="left"]:hover::after,
[tooltip][flow^="right"]:hover::before,
[tooltip][flow^="right"]:hover::after {
  animation: tooltips-horz 300ms ease-out forwards;
}
.diagram-tooltips {
  margin-bottom: -125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.diagram-tooltips div {
  text-align: center;
  color: #353539;
}
.diagram-tooltips span {
  padding: .5em 1em;
  margin: .5em;
  display: inline-block;
}
</style>

![шапка]({{ '/assets/img/guide/newcomers/old_header.png' | relative_url }}){: width="100%" }

Если вы не состоите в клане и эмблема не отображается, эта область всё ещё доступна для нажатия и перехода в соответствующее меню.
{: .message-info}

---

## Известные проблемы

Как мы уже говорили -- это альфа-релиз. Разумеется, шапка ангара имеет ряд известных багов и недоработок, которые сейчас исправить не представляется возможным. На данный момент в него входят такие проблемы, как:

- появление панели модулей при прокачке перка экипажа;
- некорректное отображение типа боя в селекторе;
- смещение положения панели модулей при переключении танков с полевой модернизацией и без неё в некоторых случаях;
- неполная адаптация некоторых окон ангара под новые размеры шапки;
- первый уровень в панели модулей в некоторых случаях не отображается;
- смещение панели модулей при открытии разделов и возвращении в ангар.  
  - *Временное решение: зайти в меню игры -> "Настройки" -> "Игра" -> поменять в "Панели техники" вид панели на другую, затем поставить как было.*
  {: style="margin-top: 0;"}

---

Последнее обновление шапки ангара внесло в неё крупнейшие изменения за всю историю существования этого мода. Играйте, тестируйте и оставляйте свои отзывы о его использовании на наших ресурсах.

До встречи на полях сражений, танкисты!
