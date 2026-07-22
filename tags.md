---
layout: page
title: 标签
permalink: /tags/
---

<div class="tags-cloud">
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
    <a class="tag tag-lg" href="#{{ tag[0] }}">{{ tag[0] }} <small>{{ tag[1].size }}</small></a>
  {% endfor %}
</div>

{% for tag in sorted_tags %}
  <section class="tag-section" id="{{ tag[0] }}">
    <h2 class="tag-title">{{ tag[0] }}</h2>
    <ul class="archive-list">
      {% for post in tag[1] %}
        <li class="archive-item">
          <span class="archive-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </section>
{% endfor %}
