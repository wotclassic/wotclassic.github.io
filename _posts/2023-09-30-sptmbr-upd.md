---
title: Сентябрьское обновление модов
date: 2023-09-30 18:34:15 +0300
tags: [important]
category: updates
image: "/assets/img/news/thumbnail/sptmbr_upd_127x.png"
image_small: "/assets/img/news/image_small/sptmbr_upd.png"
---
<p style="display: none">Опять сентябрьские вечера, учеба, работа... Но выходит сентябрьское обновление с огромной кучей изменений которые украсят ваши вечерние игры в "танки"!</p>

{% include yt-embed.html id="D3KeZwwZBg4" %}

Танкисты!
{: style="margin-top: 10px" }

Сентябрьское обновление уже [здесь](https://www.youtube.com/watch?v=D3KeZwwZBg4)! А в нём скриптовые изменения интерфейса ангара, изменения в интерфейсе боя, карта "Сталинград" и много чего ещё! 

#### Содержание
- **[Что нового?](#что-нового)**
- **[Интерфейс ангара](#интерфейс-ангара)**
  - **[Меню настроек](#меню-настроек)**
- **[Ангары](#ангары)**
  - **[Базовый и премиум ангар снова здесь!](#базовый-и-премиум-ангар-снова-здесь)**
- **[Интерфейс боя](#интерфейс-боя)**
  - **[Результат боя](#результат-боя)**
- **[Скайбоксы](#скайбоксы)**
- **[Террейны](#террейны)**
- **[Эффекты](#эффекты)**

> Обновление модов доступно для скачивания и уствновки в разделе [моды]({{ "/mods" | relative_url }}).
>
> Если у вас возникли трудности с установкой модов, то предлагаем вам небольшую инструкцию по их установке.
1. Файлы .wotmod перемистите по данному пути:
- C:\Games\Tanki\mods\Актуальная версия игры
2. Файлы папки res_mods переместите по данному пути:
- C:\Games\Tanki\res_mods\Актуальная версия игры
> 
> На этом все, начинается прекрасная весенняя пора и самое время немножечко окунуться в ностальгию.
>
> ---
>
> Также вы можете просмотреть [данное видео](https://www.youtube.com/watch?v=XLn-GLCK1Qk) если вам все еще не понятно как устанавливать моды.

## Что нового?
А много чего! Буквально все моды претерпели важные для ностальгии изменения, старый интерфейс порадует Вас старым выбором боя, интерфейс боя получит "обновлённое" меню списка игроков в бою, скайбоксы и террейны переведут карту "Сталинград" в старый стиль. В общем, вас ждет гора изменений! Начнем же!

#### Интерфейс ангара
[![интерфейс ангара]({{ '/assets/img/news/mods/old_hangar_gui.png' | relative_url}}){: .pic-left.orange width="200" }](https://wgmods.net/6368/)

Но сначала расскажем о самых мелких изменениях. Мы немного освободили пространство в интерфейсе, а точнее: в правом нижнем углу убрана кнопка перехода в режим «Натиск» и ссылка для перехода к контейнерам.  
На корню была удалена кнопка «Премиум магазина», теперь вы точно не сможете нажать на нее.  
Кнопка «создать взвод» теперь, внимание, создает взвод сразу же, без различных дополнительных окон.  
Также были убраны ссылки на боевой пропуск, личные и обычные боевые задачи, не волнуйтесь, вы все еще можете следить за их прогрессом в разделе «Задачи» и «Кампании».  
Ну и самое интересное - старый выбор боя! В патче 1.13 его [переработали](https://tanki.su/ru/news/updates/1-13-details/#mode) до неузнаваемости, и вот, спустя долгое время, он снова с вами. Компактный, быстрый, старый – все как вы хотели. 
{: style="margin-left: 215px" }

[![выбор боя]({{ '/assets/img/news/screens/battle_selector.png' | relative_url}}){:  width="100%" }](/assets/img/news/screens/battle_selector.png)

## Меню настроек

С обновлением интерфейса ангара также станет доступна возможность **отключать** некоторые изменения, для этого:
1. Нажмите на кнопку в правом нижнем углу для настройки модов.
2. Нажмите "Настройка модификаций." 

[![настройка]({{ '/assets/img/news/screens/mod_settings.png' | relative_url}}){:  width="100%" }](/assets/img/news/screens/mod_settings.png)

Перед вами меню в котором вы можете настроить:
  - Отображение лутбоксов
  - Старое создание взводов
  - Отображение премиум магазина
  - Отображение боевого пропуска
  - Старый выбор режима боя

[![реально настройка]({{ '/assets/img/news/screens/mod_list.png' | relative_url}}){:  width="100%" }](/assets/img/news/screens/mod_list.png)

Обратите внимание: для применения изменений потребуется перезапуск клиента.
{: .message-info}

---

#### Ангары
![ангары]({{ '/assets/img/news/mods/hangar922.png' | relative_url}}){: .pic-left.orange width="200" }
Да, ангары вернулись, и не просто вернулись, а с большой обновкой! Самым крупным правкам подвергся премиумный ангар из патчей 0.9.Х.  
Полностью перереализована база, была проведена переработка освещения, правильная установка декалей, источников света, карт отражений, тумана и эффектов.  
Давайте сравним этот ангар в двух версиях игры, а именно 9.22 и 1.22. 

<div class="wrapper">
      <div class="images">
        <div class="img-1"></div>
        <div class="img-2"></div>
      </div>
      <div class="slider">
        <div class="drag-line">
          <span></span>
        </div>
        <input type="range" min="0" max="100" value="50">
      </div>
</div>

Обновление 9.22
{: style="text-align: right; margin-top: 10px;"}

Обновление 1.22
{: style="margin-top: -25px;"}

Если вы не видите отличий, значит нам удалось воссоздать ангар в полной мере.

<script>
    const slider = document.querySelector(".slider input");
    const img = document.querySelector(".images .img-2");
    const dragLine = document.querySelector(".slider .drag-line");
        slider.oninput = ()=>{
        let sliderVal = slider.value;
        dragLine.style.left = sliderVal + "%";
        img.style.width = sliderVal + "%";
    }
</script>
<style>
.wrapper{
  position: relative;
  height: 400px;
  width: 680px;
  overflow: hidden;
  background: #fe5000;
  border: 3px solid #fe5000;
}
.wrapper .images{
  height: 100%;
  width: 100%;
  display: flex;
}
.wrapper .images .img-1{
  height: 100%;
  width: 100%;
  background: url("/assets/img/news/screens/9.22.jpg") no-repeat;
  background-size: cover;
}
.wrapper .images .img-2{
  position: absolute;
  height: 100%;
  width: 50%;
  background: url("/assets/img/news/screens/1.22.jpg") no-repeat;    
  background-size: cover;
}
.wrapper .slider{
  position: absolute;
  top: -45px;
  width: 100%;
  z-index: 99;
}
.wrapper .slider input{
  width: 100%;
  outline: none;
  background: none;
  -webkit-appearance: none;
}
.slider input::-webkit-slider-thumb{
  height: 486px;
  width: 3px;
  background: none;
  -webkit-appearance: none;
  cursor: col-resize;
}
.slider .drag-line{
  width: 3px;
  height: 486px;
  position: absolute;
  left: 49.85%;
  pointer-events: none;
}
.slider .drag-line::before,
.slider .drag-line::after{
  position: absolute;
  content: "";
  width: 100%;
  height: 222px;
  background: #fe5000;
}
.slider .drag-line::before{
  top: 0;
}
.slider .drag-line::after{
  bottom: 0;
}
.slider .drag-line span{
  height: 42px;
  width: 42px;
  border: 3px solid #fe5000;
  position: absolute;
  background: #1c1c1e;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.slider .drag-line span::before,
.slider .drag-line span::after{
  position: absolute;
  content: "";
  top: 50%;
  border: 10px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  transform: translate(-50%, -50%) rotate(45deg);
}
.slider .drag-line span::before{
  left: 40%;
  border-left-color: #fe5000;
}
.slider .drag-line span::after{
  left: 60%;
  border-top-color: #fe5000;
}

</style>

## Базовый и премиум ангар снова здесь!

С их обновлением мы начинаем использовать версию 8.11, а не 8.2. Из изменений:
- Новая база
- Обновлённые ресурсы
- Обновлённые звуки
- Камера
- Источники света

А благодаря новым шейдерам ангары будут выглядеть куда лучше!

[![базовый]({{ '/assets/img/news/screens/basic.png' | relative_url}}){:  width="100%" }](/assets/img/news/screens/basic.png)
[![премиум]({{ '/assets/img/news/screens/premium.png' | relative_url}}){:  width="100%" }](/assets/img/news/screens/premium.png)

---

#### Интерфейс боя
[![интерфейс боя]({{ '/assets/img/news/mods/old_battle_gui.png' | relative_url}}){: .pic-right.orange width="200" }](https://wgmods.net/6287/)
В интерфейсе боя вас ждет старое меню списка игроков! Это только первоначальная версия, и мы ждем ваших отзывов о данном нововведении.  
Для миникарт добавлены Сталинград и Провинция, также был обновлён Руинберг.  

[![таб]({{ '/assets/img/news/screens/tab.png' | relative_url}}){:  width="100%" }](/assets/img/news/screens/tab.png)

## Результат боя
Он претерпел заметные изменения, мы попытались воссоздать стиль старого варианта данного окна, но с современными решениями.

[![результат]({{ '/assets/img/news/screens/battle_result.png' | relative_url}}){:  width="100%" }](/assets/img/news/screens/battle_result.png)


---

#### Скайбоксы
[![скайбоксы]({{ '/assets/img/news/mods/ssb.png' | relative_url}}){: .pic-left.orange width="200" }](https://wgmods.net/6288/)

Старые скайбоксы вновь претерпели изменения, была проведена полная переработка текстур солнца, освещения, а также перестановка положений солнца и неба на некоторых картах в угоду историчности отбрасывания теней, цветокорекции и тумана.  
Ну и куда же без самого главного? Встречайте, карта «[Сталинград]({{ "/news/stalingrad/" | relative_url }})»! Которой мы вернули старую и мрачную атмосферу войны, как в бывалых версиях World of Tanks.  
Карта Ласвилль также претерпела изменения, кроме её возвращения в мод она стала более приятной для глаз.
{: style="margin-left: 215px" }

---

#### Террейны
[![террейны]({{ '/assets/img/news/mods/old_flora.png' | relative_url}}){: .pic-right.orange width="200" }](https://drive.google.com/file/d/1FmohmS9sjSlitiQzPuboNxT1bLcsdWug/view?usp=sharing)
Старые террейны также пополнятся картой «Сталинград»!  
Кроме этого были переработаны такие карты как:
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
- Тихий берег
- Париж

И как «сюрприз», в комплекте со старыми террейнами идет мод на старый флагшток. Это будет наша первая попытка в SD-модель для общественного пользования.
{: style="margin-right: 215px" }

---

#### Эффекты
[![эффекты]({{ '/assets/img/news/mods/effects.png' | relative_url}}){: .pic-left.orange width="200" }](https://wgmods.net/6399/)
Старые эффекты также не обошлись без изменений. Теперь вы не увидите летящих самолётов над Химмельсдорфом или Артобстрела на Заполярье, так как на картах полностью убраны ивенты, которые отсутствовали до обновления 1.0.  
Для некоторых карт были изменены эмбиенты окружающей среды на их аналоги из 9.22 

---

Обратите внимание:  
{: .message-info}
  - Моды на WGMods могут модерироваться несколько дней, это не зависит от нас.
  - Все моды вы ставите на свой страх и риск.
  - О обновлении модификаций будет сказано на Discord-сервере Д.Р.У.З.Ь.Я., в нашей группе ВКонтакте и Discord-сервере, на форумах и в соц. сетях.
  {: style="top: -47px; left: 38px; position: relative;"}

На этом все, осень это самое отличное время для того, чтобы окунуться в свой внутренний мир и вспомнить прошлое, так что вперед!
{: style="top: -47px; position: relative;"}

Удачи на полях сражений!
{: style="top: -47px; position: relative; margin-bottom: -55px;"}