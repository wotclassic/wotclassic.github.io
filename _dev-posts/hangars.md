---
title: Ангары
status: "Обновлено: 4 ноября 2023 года"
image: /assets/img/indev/thumb/hangars.png
---

<p style="display: none">Подробности о жизни ангаров мы рассказываем именно здесь.</p>

![Placeholder]({{ '/assets/img/indev/head/hangars.png' | relative_url }})

{% include indev/status.html status="doe" text="Доработки премиум ангара v2" date="4 ноября" %}

Работа над ангарами ведется каждый день, и мы готовы показать Вам некоторые из изменений во всеми полюбившемся премиум ангаре v2!

- Добавлены и отстроены все 3D звуки;
- Изменены и добавлены новые источники освещения;
- Добавлены новые объекты;
- Изменена громкость звуков;
- Изменены шейдеры некоторых объектов;
- Полностью пересобран весь ангара;
- Сгенерованы новые карты отражений (cubemap);
- Изменены и добавлены все звуковые ивенты;
- Изменена работа камеры.

[![ангар2]({{ '/assets/img/indev/screens/hpv2_2.png' | relative_url}}){: width="100%" }](/assets/img/indev/screens/hpv2_2.png)

{% include indev/status.html status="done" text="Воскрешение ангаров" date="30 сентября" %}

Ангары вновь восстают из пепла! И не просто восстают, а еще и обновляются!  

Встречайте - полностью восстановленный премиум ангар из 0.9.Х версий. Самое важное по изменениям:

- Совершенно новая и своя база
- Свои карты отражений
- Освещение и объекты на основе старых чанков
- Правильная отстройка параметров объектов и декалей (1)
- Туман сверху ангара теперь настоящий, а не модель
- Правильные положения декалей (1) и эффектов (2)
- Полная попытка вернуть старое положение и поведение камеры, как раньше (3)

1. Планируется полное старое возвращение декалей, пока оно не совсем полное;  
2. Будет проведена попытка реанимации шейдера эффектов на старый для полного сходства и реализации;  
3. У камеры есть проблемы с зумом и начальным положением.  

Обратите внимание: финальный вариант ангара может отличаться.
{: .message-info}

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

Мы полностью переработали освещение в базовом и премиум ангаре и теперь оно походит на патч 0.8.11, что позволит ностальгировать игрокам Tanki Online из 2014 года.

[![обновленные новости]({{ '/assets/img/indev/screens/h1.png' | relative_url}}){: width="100%" }](/assets/img/indev/screens/h1.png)
[![обновленные новости]({{ '/assets/img/indev/screens/h2.png' | relative_url}}){: width="100%" }](/assets/img/indev/screens/h2.png)
[![обновленные новости]({{ '/assets/img/indev/screens/hp1.png' | relative_url}}){: width="100%" }](/assets/img/indev/screens/hp1.png)
[![обновленные новости]({{ '/assets/img/indev/screens/hp2.png' | relative_url}}){: width="100%" }](/assets/img/indev/screens/hp2.png)
