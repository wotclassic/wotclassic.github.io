---
layout: guidee
title: Преображение клиента
permalink: /guide/newcomers/mods-changes
---

В «WoT это Классика!» существует десять ностальгических модов. Выбрать каждый мод можно в [соответствующем]({{ "/mods" | relative_url }}) разделе. Здесь вы узнаете какие моды отвечают за те или иные изменения клиента <<Мира Танков>>.

<span class="geolimited">![раздел моды]({{ '/assets/img/guide/newcomers/mods.png' | relative_url }}){: width="100%" }</span>
<span class="only_for_limited">![раздел моды]({{ '/assets/img/guide/newcomers/mods_lesta.png' | relative_url }}){: width="100%" }</span>

Рассмотрим все моды поподробнее.

- **[Изменения в интерфейсе](#izmienieniia-v-intierfieisie)**
  - **[Старый экран логина](#staryi-ekran-loghina)**
  - **[Старый интерфейс ангара](#staryi-intierfieis-anghara)**
  - **[Старый интерфейс боя](#staryi-intierfieis-boia)**
- **[Ангары](#anghary)**
  - **[Старый базовый ангар](#staryi-bazovyi-anghar)**
  - **[Старый премиум ангар](#staryi-priemium-anghar)**
  - **[Старый базовый ангар 0.9.X](#staryi-bazovyi-anghar-09kh)**
  - **[Старый премиум ангар 0.9.X](#staryi-priemium-anghar-09kh)**
- **[Изменения на картах](#izmienieniia-na-kartakh)**
  - **[Старые скайбоксы и террейны](#staryie-skaiboksy-i-tierrieiny)**
  - **[SD-модели](#sd-modieli)**
  - **[Старые эффекты](#staryie-effiekty)**
- **[Старые звуки](#staryie-zvuki)**

---

### Изменения в интерфейсе

![ui]({{ '/assets/img/guide/newcomers/ui.png' | relative_url }}){: .fancy-img .pic-left width="243" }
Интерфейс - самая важная часть <<Мира Танков>>, благодаря нему вы понимаете множество полезной информации. Но в последнее время там появляется множество мусора, поэтому мы готовы хоть неменого вернуть вам тот самый интерфейс, компактный и удобный.

<br><br><br><br><br>

#### Старый экран логина

В патче 1.21 разработчики полностью [переработали](https://vk.com/@wotclue-patchnout-obnovleniya-121-wot-spisok-izmenenii?anchor=6-dorabotki-interfeysa) экран логина, и мы не могли не отредактировать данный дизайн экрана логина на новый лад.

При запуске игры вас встречает короткий видеоролик с логотипом игры, после чего вы попадаете на экран авторизации, который точь-в-точь воссоздан по старому аналогу. Экран авторизации также изменен на старый лад, за основу бралась версия 0.8.2.

<!-- Дизайн загрузки отредактирован на новый лад, но с сохранением старого вида. Также при первом запуске мода вас ждет приветственное сообщение. -->

![скрин2]({{ '/assets/img/guide/newcomers/login_load.png' | relative_url }}){: .fancy-img }
![логин]({{ '/assets/img/guide/newcomers/login.png' | relative_url }}){: .fancy-img }

#### Старый интерфейс ангара

Игра начинается с игрового интерфейса. Мод на «[Старый интерфейс ангара](https://drive.google.com/drive/folders/1Bv_BxHXXZtcuftR0zf5U_wzCYpRENtWl?usp=sharing)» частично возвращает ангарный интерфейс из прошлых обновлений <<Мира Танков>>. На момент написание статьи изменены:

- Карусель техники
- Удален виджет с режимом Натиск и прочей рекламой
- ТТХ техники
- Шапка ангара
  - Удалена ссылка на премиум магазин
  - При нажатии "Создать взвод" вы сразу активируете окно взвода.
  - Выбор боя
  - Шапка ангара полностью изменена на вариант из 0.8.2.
- Удалены ссылки на боевой пропуск и личные / обычные боевые задачи.

Не переживайте, вы все еще можете следить за прогрессией боевого пропуска в разделе "Задачи" или включить его отображение в настройках модификаций.
{: .message-info}

- Панель амуниции
  - Окно обслуживания техники
- Меню
- Дерево исследований
- Личные Боевые Задачи
- Склад
- Экран ожидания боя
- Экран тренировочной комнаты

![интерфейс ангара]({{ '/assets/img/guide/newcomers/hangar_ui.png' | relative_url }}){: .fancy-img }

**Интерактивное изображение.** Наведите курсором на интересующий вас элемент и прочитайте подсказку.
{: .message-money style="margin-bottom: 25px;"}

<div class="interactive">
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
.interactive {
  margin-bottom: -125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.interactive div {
  text-align: center;
  color: #353539;
}
.interactive span {
  padding: .5em 1em;
  margin: .5em;
  display: inline-block;
}
</style>

![шапка]({{ '/assets/img/guide/newcomers/old_header.png' | relative_url }}){: width="100%" }

#### Старый интерфейс боя

Ну и куда же без старого интерфейса боя? Это один из самых более-менее завершенных модов на данный момент, и выглядит он ну очень красиво. И самое главное - исторично.
Мод основывается на версии 0.8.2 и вот список изменений:

- Экран загрузки боя
  - Иконки режимов
  - Экраны карт

![загрузка]({{ '/assets/img/guide/newcomers/load_ui.png' | relative_url }}){: .fancy-img }

- Шапка боя
- Счетчик FPS и пинга
- Экипаж в ангаре
- Таймер до окончания боя
- Отсчет до начала боя
- Панель снаряжения
- Миникарты
- Уши команды
- Панель повреждений
- Меню списка игроков
- Боевое меню
- Быстрое руководство

![бой]({{ '/assets/img/guide/newcomers/battle_ui.png' | relative_url }}){: .fancy-img }

---

### Ангары

![hangars]({{ '/assets/img/guide/newcomers/hangar_premium_v2.png' | relative_url }}){: .fancy-img .pic-left width="243" }
При входе в <<Мир Танков>>, игроки всегда оказываются в знакомой обстановке: танк стоит в лесу под открытым небом, недалеко видны военные палатки и на опушке леса солдаты устроили максимально комфортное и уютное место, похожее на дом, где можно отдохнуть перед предстоящими боями.
Именно так выглядит ангар в наше время. Но моды «WoT это Классика!» возвращают Вам те самые ангары из 2009-2017, которые помогали еще больше расслабиться, и напоминали вам в какую игру Вы играете, так давайте посмотрим на них поближе!

<br>

#### Старый базовый ангар

Первый ангар - это тот, который оставляет самое незабываемое впечатление и которому мы очень прикованы по душе. Мы не могли пройти мимо этого места. Многие танкисты до сих пор с огромной ностальгией вспоминают грязные стены этого маленького бункера.

![ангар]({{ '/assets/img/guide/newcomers/v1.jpg' | relative_url }}){: .fancy-img }

#### Старый премиум ангар

Более обеспеченные игроки предпочитали чистые, почти бесшумный премиум ангар. Внутри, сверкают лампочки, вентиляторы крутятся, а игроки активно прокачивают свои танки, создавая неповторимую атмосферу «тех самых танков».

![ангар прем]({{ '/assets/img/guide/newcomers/pv1.jpg' | relative_url }}){: .fancy-img }

#### Старый базовый ангар 0.9.Х

Шум огромного цеха, а если быть точнее - подвального помещения, сопровождал игроков до 2018 года. Но не шумом едины, ведь эта атмосфера... КВ-2 на ремонте, во всем здании пыльно, где-то перегорели лампочки, масло разлито. А танк игрока стоит и ждет, когда его отправят в бой.

![ангар]({{ '/assets/img/guide/newcomers/v2.jpg' | relative_url }}){: .fancy-img }

#### Старый премиум ангар 0.9.X

Просторный, тихий, интересный. Все что можно сказать про этот ангар. За окном зимний денек, танки ждут своего ремонта, а вы обслуживаете своего любимчика под атмосферный саундтрек и эмбиент.

![ангар 9.х]({{ '/assets/img/guide/newcomers/pv2.jpg' | relative_url }}){: .fancy-img }

И самое важное - во всех этих ангарах, с нашим переключателем у вас есть возможность включить отслеживание статуса премиум-аккаунта, прямо как до обновления 1.0! Если у вас премиум аккаунт отсутствует - сидите в базовых ангарах. А вот игроки с премиумом уже могут позволить себе прибывание в просторных, премиумных ангарах.
{: .message-info}

---

### Изменения на картах

![maps]({{ '/assets/img/guide/newcomers/ssb.png' | relative_url }}){: .fancy-img .pic-left width="243" }
[Карты](https://tanki.su/ru/content/guide/map-guides/) являются неотъемлемой частью <<Мира Танков>>, и после обновления 1.0 они были кардинально [переработаны](https://tanki.su/ru/news/common/maps10part1/) в HD-версию.
Моды серии «WoT это Классика!» возвращают на эти карты ощущение войны, которые было присуще старым версиям <<Мира Танков>>.

<br><br><br><br><br>

#### Старые скайбоксы и террейны

Данные модификации практически буквально дают вам старое освещение на картах! **Старые скайбоксы** помогут вам вспомнить о закате на Мурованке или ярко палящее солнце на Эль-Халлуфе, атмосферу которых дополняет мод на **старые террейны**, в котором перерисовано огромное количество текстур земли на картах!  

<!-- Многие из Вас помнят закат на Мурованке или ярко палящее солнце на Эль-Халлуфе, но теперь всё это сменили на яркие и красочные цвета. Мод на старые скайбоксы поможет вернуть Вам то родное и знакомое небо вместе с освещением, которым оно было до обновления 1.0. Данный мод заменяет более **30** игровых карт! А именно:

- Карелия
- Малиновка
- Провинция
- Химмельсдорф
- Прохоровка
- Ласвилль
- Руинберг
- Рудники
- Мурованка
- Эрленберг
- Линия Зигфрида
- Уайдпарк
- Утёс
- Монастырь
- Вестфилд
- Эль-Халлуф
- Аэродром
- Фьорды
- Редшир
- Степи
- Рыбацкая бухта
- Перевал
- Линия Маннергейма
- Лайв Окс
- Хайвей
- Тихий берег
- Граница Империи
- Жемчужная река
- Тундра
- Харьков
- Затерянный город
- Оверлорд
- Париж
- Промзона

#### Старые террейны

Хорошее дополнение ко «Старым скайбоксам», более **15** карт со старой текстурой земли, и все они адаптированы к современным версиям карт! Мод изменяет такие карты, как:

- Малиновка
- Провинция
- Энск
- Руинберг
- Эрленберг
- Монастырь
- Вестфилд
- Эль-Халлуф
- Аэродром
- Фьорды
- Степи
- Перевал
- Заполярье
- Лайв Окс
- Хайвей
- Жемчужная река
- Сталинград
- Тихий берег
- Париж -->

#### SD-модели

Множество знакомой техники уже переведено в старое, доброе и упрощенное SD-качество! Здесь и легендарные ИС-7 с Maus'ом, знаковый Т-34 или ранее не виданный Объект 156 О, в общем, есть на что посмотреть!

#### Старые эффекты

Данный мод заменяет эффекты взрывов, выстрелов, огня, следов от техники и прочее.
Благодаря данному моду ощущение боя становится реалистичнее и ностальгичнее!

---

### Старые звуки

![sounds]({{ '/assets/img/guide/newcomers/sound.png' | relative_url }}){: .fancy-img .pic-left width="243" }
Звуковая модификация из серии модов "WoT это Классика!", позволяющая на собственных ушах ощутить тарахтение двигателей тогдашних танков, [гром](https://kr.cm/f/t/62100/)ыхание выстрелов, лязг гусениц и прочие до боли знакомые настоящим олдам звуки.