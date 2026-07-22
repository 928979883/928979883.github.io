---
layout: page
title: 归档
permalink: /archive/
---

<div class="archive">
  {% for post in site.posts %}
    {% capture current_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% if current_year != previous_year %}
      {% unless forloop.first %}</ul>{% endunless %}
      <h2 class="archive-year">{{ current_year }}</h2>
      <ul class="archive-list">
      {% assign previous_year = current_year %}
    {% endif %}

    <li class="archive-item">
      <span class="archive-date">{{ post.date | date: "%m-%d" }}</span>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </li>

    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}
</div>
