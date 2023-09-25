---
title: Сентябрьское обновление модов
date: 2023-09-20 20:01:00 +0300
tags: [important]
category: updates
image: "/assets/img/may_upd_127x.png"
image_small: "/assets/img/news/image_small/may_upd.png"
---
<p style="display: none">Опять сентябрьские вечера, учеба, работа... Но выходит сентябрьское обновление с огромной кучей изменений которые украсят ваши вечерние игры в "танки"!</p>

{% include yt-embed.html id="vJIFTgOFcJ0" %}

Танкисты!
{: style="margin-top: 10px" }

Сентябрьское обновление уже [здесь](ссылка на видео)! А в нём скриптовые изменения интерфейса ангара, изменения в интерфейсе боя, карта "Сталинград" и много чего ещё! 

#### Содержание
- **[Что нового?](#что-нового)**
- **[Интерфейс ангара](#интерфейс-ангара)**
- **[Ангары](#ангары)**
- **[Интерфейс боя](#интерфейс-боя)**
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

Но сначала расскажем о самых мелких изменениях. Мы немного освободили пространство в интерфейсе, кнопка "Премиум магазин" теперь полностью удалена из шапки ангара. При нажатии кнопки "Создать взвод" Вы, внимание, создаете взвод сразу же! Без каких либо окон и прочего. Также убрана ссылка на Боевой пропуск, личные / обычные боевые задачи.
В правом углу убрана реклама режима "Натиск" и переход к контейнерам.  
Ну и самое интересное - старый выбор боя! В патче 1.13 его [переработали](https://tanki.su/ru/news/updates/1-13-details/#mode) до неузнаваемости, и вот, спустя долгое время вы можете вновь опробовать данный вариант выбора боя!
{: style="margin-left: 215px" }

[![выбор боя]({{ '/assets/img/news/screens/battle_selector.png' | relative_url}}){: height="387px" }](/assets/img/news/screens/battle_selector.png)

---

#### Ангары
![старые скайбоксы и террейны]({{ '/assets/img/news/mods/old_flora.png' | relative_url}}){: .pic-left.orange width="200" }
Да, ангары снова с вами! И они вернулись в обновленном виде. Самым большим правкам подвергся премиумный ангар из патчей 0.9.Х. Было доработано освещение, декали, тени, отражения источника света на объекты и туман. Все так, как вы и помните.  
Давайте сравним этот ангар в двух версиях игры. Клиент 9.10 и 1.22... Если вы не видите отличий, значит нам удалось воссоздать ангар так, как его и помнили

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

Обновление 9.10
{: style="text-align: right; margin-top: 10px;"}

Обновление 1.22
{: style="margin-top: -25px;"}

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
  background: url("/assets/img/indev/screens/9.10.jpg") no-repeat;
  background-size: cover;
}
.wrapper .images .img-2{
  position: absolute;
  height: 100%;
  width: 50%;
  background: url("/assets/img/indev/screens/1.22.jpg") no-repeat;    
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

---

#### Интерфейс боя
[![интерфейс боя]({{ '/assets/img/news/mods/old_battle_gui.png' | relative_url}}){: .pic-right.orange width="200" }](https://wgmods.net/6287/)
Интерфейс боя получил нововведение в виде старого меню списка игроков! Это только первоначальная версия меню, и мы ждем ваших отзывов о данном нововведении.  
Для миникарт добавлен Сталинград и Провинция, обновлён Руинберг.  
Также результат боя претерпит заметные изменения, мы попытались воссоздать стиль старого результата боя, но с современными решениями. Крайне надеемся, что вам понравится такой вариант окна с результатами!
[![таб]({{ '/assets/img/news/screens/tab.png' | relative_url}}){: height="387px" }](/assets/img/news/screens/tab.png)

---

#### Скайбоксы
[![старые ангары]({{ '/assets/img/news/mods/old_hangar922.png' | relative_url}}){: .pic-left.orange width="200" }](https://wgmods.net/6288/)
Старые скайбоксы вновь перетерпели изменения, была проведена полная переработка текстур солнца, а также освещения, перестановка положений солнца и неба на некоторых картах в угоду историчности отбрасывания теней, а также цветокорекции и тумана.  
А ещё у нас пополнение в виде карты «[Сталинград]({{ "/news/stalingrad/" | relative_url }})», мы вернули ему старую и мрачную атмосферу войны, который была в старых версиях игры. Карта Ласвилль также претерпела изменения, теперь она стала более приятной для глаз, чем оригинал.

---

#### Террейны
[![старые скайбоксы и террейны]({{ '/assets/img/news/mods/old_flora.png' | relative_url}}){: .pic-right.orange width="200" }](https://drive.google.com/file/d/1FmohmS9sjSlitiQzPuboNxT1bLcsdWug/view?usp=sharing)
В старых террейнах тоже пополнение в виде карты «Сталинград»!
Также были переработаны такие карты как:  
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

А также в комплекте со старыми террейнами идет мод на старый флагшток. Это будет наша первая попытка в SD-модель для общественного пользования.
{: style="margin-right: 215px" }

---

#### Эффекты
[![старые ангары]({{ '/assets/img/news/mods/old_hangar922.png' | relative_url}}){: .pic-left.orange width="200" }](https://wgmods.net/6399/)
Старые эффекты также не обошлись без изменений. Теперь вы не увидите летящих самолётов над Химмельсдорфом или Артобстрела на Заполярье, так как на картах убраны ивенты, которых не было до обновления 1.0.  
Также для некоторых карт были изменены эмбиенты окружающей среды на их аналоги из 9.22

---

Обратите внимание:

- Моды могут модерироваться несколько дней, это не зависит от нас.
- Все моды вы ставите на свой страх и риск.
- О обновлении модификаций будет сказано на Discord-сервере Д.Р.У.З.Ь.Я., на нашем Guilded и Discord-сервере, на форумах и в соц. сетях.

На этом все, осень это самое отличное время для того, чтобы окунуться в свой внутренний мир и вспомнить в прошлое, так что вперед!

Удачи на полях сражений!