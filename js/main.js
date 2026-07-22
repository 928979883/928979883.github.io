(function () {
  'use strict';

  // Reading progress bar
  var progress = document.getElementById('reading-progress');
  function updateProgress() {
    var h = document.documentElement;
    var scrolled = h.scrollTop;
    var height = h.scrollHeight - h.clientHeight;
    var pct = height > 0 ? (scrolled / height) * 100 : 0;
    if (progress) progress.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Scroll reveal animation
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // Simple TOC generation for posts
  var entry = document.querySelector('.entry');
  var tocWrapper = document.getElementById('toc');
  if (entry && tocWrapper) {
    var heads = entry.querySelectorAll('h2, h3');
    if (heads.length > 1) {
      var ul = document.createElement('ul');
      ul.className = 'toc';
      heads.forEach(function (h, i) {
        if (!h.id) h.id = 'heading-' + i;
        var li = document.createElement('li');
        if (h.tagName === 'H3') li.className = 'toc-h3';
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        ul.appendChild(li);
      });
      tocWrapper.appendChild(ul);
    }
  }
})();
