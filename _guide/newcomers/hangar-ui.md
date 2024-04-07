---
layout: guidee
title: Ангар
permalink: /guide/newcomers/hangar-ui
---

С выходом обновления 2.0 для старого интерфейса ангара мы приняли решение о написании маленького руководства по тому, как пользоваться новой-старой шапкой ангара, ведь было введено и возрождено множество интересных решений.

**Интерактивное изображение.** Наведите курсором на интересующий вас элемент и прочитайте подсказку.
{: .message-money style="margin-bottom: 25px;"}

<main>
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
</main>

<style>
 /* START TOOLTIP STYLES */
[tooltip] {
  position: relative; /* opinion 1 */
}

/* Applies to all tooltips */
[tooltip]::before,
[tooltip]::after {
  text-transform: none; /* opinion 2 */
  font-size: .9em; /* opinion 3 */
  line-height: 1;
  user-select: none;
  pointer-events: none;
  position: absolute;
  display: none;
  opacity: 0;
}
[tooltip]::before {
  content: '';
  border: 5px solid transparent; /* opinion 4 */
  z-index: 1001; /* absurdity 1 */
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

/* Make the tooltips respond to hover */
[tooltip]:hover::before,
[tooltip]:hover::after {
  display: block;
}

/* don't show empty tooltips */
[tooltip='']::before,
[tooltip='']::after {
  display: none !important;
}

/* FLOW: UP */
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

/* FLOW: DOWN */
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

/* FLOW: LEFT */
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

/* FLOW: RIGHT */
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

/* KEYFRAMES */
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

/* FX All The Things */ 
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
/* UNRELATED to tooltips */
main {
  margin-bottom: -125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
aside {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #49b293;
  color: #fff;
  padding: 1em;
}
main div {
  text-align: center;
  color: #353539;
}
main span {
  padding: .5em 1em;
  margin: .5em;
  display: inline-block;
}
</style>

![шапка]({{ '/assets/img/guide/newcomers/old_header.png' | relative_url }}){: width="100%" }