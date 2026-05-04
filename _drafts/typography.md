---
title: Форматирование
date: 2038-01-19 03:14:06 +0000
tags: [important]
category: site-update
image: "/assets/img/news/thumbnail/p_oct23.png"
image_small: "/assets/img/news/image_small/p_oct23.png"
excerpt: Тестовая страница для проверки элементов сайта
last_modified_at: 1970-01-01 00:00:00 +0000
---

<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
## Содержание
{: .no_toc }
<!-- markdownlint-restore -->

- a
{: toc }

---

## Заголовки

<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
# H1

## H2

### H3

#### H4

##### H5

###### H6
<!-- markdownlint-restore -->

## Текст

Quisque egestas convallis ipsum, ut sollicitudin risus tincidunt a. Maecenas interdum malesuada egestas. Duis consectetur porta risus, sit amet vulputate urna facilisis ac. Phasellus semper dui non purus ultrices sodales.

Aliquam ante lorem, ornare a feugiat ac, finibus nec mauris. Vivamus ut tristique nisi. Sed vel leo vulputate, efficitur risus non, posuere mi. Nullam tincidunt bibendum rutrum. Proin commodo ornare sapien. Vivamus interdum diam sed sapien blandit, sit amet aliquam risus mattis.  
Nullam arcu turpis, mollis quis laoreet at, placerat id nibh. Suspendisse venenatis eros eros.

## Списки

### Нумерованный

1. Firstly
2. Secondly
    1. Secondly firstly
    2. Secondly secondly
3. Thirdly

### Ненумерованный

- Chapter
- Chapter
  - Section
    - Paragraph
- Chapter

### Список задач

- [ ] Job
  - [x] Step 1
  - [x] Step 2
  - [ ] Step 3

### Описание

Sun
: the star around which the earth orbits

Moon
: the natural satellite of the earth, visible by reflected light from the sun

## Цитата

> This line shows the _block quote_.

## .message-*

<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
An example showing the `info` type prompt.
{: .message-info }

An example showing the `money` type prompt.
{: .message-money }

An example showing the `warning` type prompt.
{: .message-warning }

An example showing the `error` type prompt.
{: .message-error }
<!-- markdownlint-restore -->

## Таблицы

### Обычная

| Company                      | Contact          | Country |
| :--------------------------- | :--------------- | ------: |
| Alfreds Futterkiste          | Maria Anders     | Germany |
| Island Trading               | Helen Bennett    |      UK |
| Magazzini Alimentari Riuniti | Giovanni Rovelli |   Italy |

### .wg-table

<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

| Company                      | Contact          | Country |
| :--------------------------- | :--------------- | ------: |
| Alfreds Futterkiste          | Maria Anders     | Germany |
| Island Trading               | Helen Bennett    |      UK |
| Magazzini Alimentari Riuniti | Giovanni Rovelli |   Italy |
{: .wg-table }
<!-- markdownlint-restore -->

## Ссылка

<http://127.0.0.1:4000>

## Заметка

Click the hook will locate the footnote[^footnote], and here is another footnote[^fn-nth-2].

## Моноширинный текст

This is an example of `Inline Code`.

## Многострочный код

```text
This is a common code snippet, without
syntax highlight and line number.
```

## Изображения

### Обычное

![Тест](/assets/img/placeholder_2.png)

### Со всплывающим окном

![Тест](/assets/img/news/screens/hangar_ui.png){: .fancy-img }

## Кнопки

{% include button.html url='https://example.com' text='Ссылка на тестовую страницу' %}

{% include button.html text='Выключенная кнопка' disabled=true %}

## Видео из YouTube

{% include yt-embed.html id="dQw4w9WgXcQ" %}

## Видео по ссылке

{% include video.html unique_id=1 url="https://raw.githubusercontent.com/chromium/chromium/main/media/test/data/bear-1280x720.mp4" %}

## Плавающая картинка с ссылкой

[![SD]({{ '/assets/img/news/mods/effects2.png' | relative_url}}){: .pic-right.orange width="200" }](/)

Еще один новогодний подарок - релиз старых эффектов!

На данный момент доступны:

- Выстрелы из всех калибров орудий (в том числе НУРС и Штурмтигр).
- Попадание по всем поверхностям земли или объектов.

И самое важное - те самые трассера! По которым теперь можно определить тип снаряда, который противник использует против вас! 

ББ имеет беловатый цвета, фугас и кумуль рыжеватый, а подкол имеет синеватый оттенок. Самое время подучить, кто каким снарядом стреляет!

## Сетка изображений

<!-- Создаётся переменная elements, в которую записываются следующие строки -->
<!-- (формат: путь к картинке | надпись | опционально ссылка при нажатии) -->
{% capture elements -%}
/assets/img/avatars/bendy.jpg | Картинка 1 | https://example.com
/assets/img/avatars/valberton.webp | Картинка 2
/assets/img/avatars/pbody.webp | Картинка 3 | /mods/download
{%- endcapture -%}

<!-- Строки парсятся в массив -->
{%- assign elements = elements | newline_to_br | strip_newlines | split: "<br />" -%}

<!-- Переменная загружается в шаблон -->
{% include image-grid.html elements=elements %}

---

## Примечания

[^footnote]: The footnote source
[^fn-nth-2]: The 2nd footnote source
