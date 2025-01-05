---
title: Интерфейс ангара
status: "Обновлено: 1 сентября 2024 года"
image: /assets/img/indev/thumb/hangarui.png
---

<p style="display: none">Процесс разработки интерфейсного ангара.</p>

![Placeholder]({{ '/assets/img/indev/head/hangarui.png' | relative_url }})

{% include indev/status.html status="done" text="Обновление 2.1" date="1 сентября" %}

Обновление 2.0 вдохнуло вторую жизнь в разработку интерфейсных модификаций, сейчас мы только строим планы на то, что переведем на собственную структуру, а пока, можете глянуть на...

### Оборудование

Да, выбор оборудования не выходя из ангара возвращается. Да и не просто возвращается, а еще и пополняется возможностями нового оборудования.

Стоит упомянуть, что в связи с техническими ограничениями "Усовершенствованное" и "Экспериментальное" оборудование называется "**Улучшенное**" и "**Пробное**".

**Интерактивное изображение.** Нажмите на название типа оборудования.
{: .message-money }

<div class="container">
  <div class="tab">
      <input checked="" id="tab-btn-1" name="tab-btn" type="radio" value="">
      <label for="tab-btn-1" style="top: 147px; left: 110px; position: relative; z-index: 1; color: #ffffff00; border-bottom-color: #ffffff00;">Штатное</label>
      <input id="tab-btn-2" name="tab-btn" type="radio" value="">
      <label for="tab-btn-2" style="top: 147px; left: 141px; position: relative; z-index: 1; color: #ffffff00; border-bottom-color: #ffffff00;">Улучшенное</label>
      <input id="tab-btn-3" name="tab-btn" type="radio" value="">
      <label for="tab-btn-3" style="top: 147px; left: 164px; position: relative; z-index: 1; color: #ffffff00; border-bottom-color: #ffffff00;">Трофейное</label>
      <input id="tab-btn-4" name="tab-btn" type="radio" value="">
      <label for="tab-btn-4" style="top: 147px; left: 199px; position: relative; z-index: 1; color: #ffffff00; border-bottom-color: #ffffff00;">Пробное</label>
      <div class="tab-content" id="content-1" style="top: -57px; position: relative;">
        <img src="/assets/img/indev/screens/ammo/ammo_1.png">
      </div>
      <div class="tab-content" id="content-2" style="top: -57px; position: relative;">
        <img src="/assets/img/indev/screens/ammo/ammo_2.png">
      </div>
      <div class="tab-content" id="content-3" style="top: -57px; position: relative;">
        <img src="/assets/img/indev/screens/ammo/ammo_3.png">
      </div>
      <div class="tab-content" id="content-4" style="top: -57px; position: relative;">
        <img src="/assets/img/indev/screens/ammo/ammo_4.png">
      </div>
  </div>
</div>

<style>
.tab {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tab > input[type="radio"] {
  display: none;
}

.tab-content {
  display: none;
  width: 100%;
  margin-top: 1rem;
}

#tab-btn-1:checked~#content-1,
#tab-btn-2:checked~#content-2,
#tab-btn-3:checked~#content-3,
#tab-btn-4:checked~#content-4 {
  display: block;
}

.tab > label {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  transition: color .15s ease-in-out, border-color .15s ease-in-out;
  color: #ffffff;
  background: 0 0;
  border-bottom: 0.125rem solid transparent;
}

.tab > input[type="radio"]:checked + label {
    cursor: default;
    font-weight: bold;
    color: #ffffff;
    border-bottom-color: #fe5000;
}
</style>

Думаете, что на этом все? Как бы не так... Мы скоро вернемся!