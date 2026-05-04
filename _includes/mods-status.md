### СОСТОЯНИЕ МОДОВ

Данные актуальны для версии клиента **«Мира Танков» -- {{ site.data.mods_status.confirmed_version }}**.

<br>

{% assign colors = "red|green|yellow" | split: "|" %}
| Название мода | Работоспособность |
|-|-|
{%- for mod in site.data.mods_status.mods -%}
{%- assign mod_name = mod[0] -%}
{%- assign mod_status = mod[1] -%}
{%- assign mod_plurality = site.data.mods_status.mods_meta.mods_plurality[mod_name] %}
| {{ mod_name }} | <span class="{{ colors[mod_status] }}">{{ site.data.mods_status.mods_meta.def_text[mod_status][mod_plurality] }}</span> |
{%- endfor %}
{: .wg-table }

<style>
  .wg-table .green::after,
  .wg-table .yellow::after,
  .wg-table .red::after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 4px;
    background-size: contain;
    vertical-align: middle;
  }

  .wg-table .green {
    color: #50b531;
  }
  .wg-table .green::after {
    background: url(/assets/img/table/check_green.png) no-repeat;
  }

  .wg-table .yellow {
    color: #e3df33;
  }
  .wg-table .yellow::after {
    background: url(/assets/img/table/wait_update.png) no-repeat;
  }

  .wg-table .red {
    color: #c71d1d;
  }
  .wg-table .red::after {
    background: url(/assets/img/table/icon_cross.png) no-repeat;
  }
</style>
