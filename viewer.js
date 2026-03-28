(function() {
  const EXTERNAL_SECTIONS = {
    projects: 'http://projects.jkhenzai.dev/'
  };

  const map = {
    projects: 'sections/projects.html',
    blog: 'sections/blog.html',
    vibecoding: 'sections/vibecoding.html'
  };

  const params = new URLSearchParams(window.location.search);
  const section = params.get('section');

  const titleMap = {
    projects: 'Projects',
    blog: 'Blog',
    vibecoding: 'VibeCoding'
  };

  const viewerTitle = document.getElementById('viewerTitle');
  const viewerCrumb = document.getElementById('viewerCrumb');
  const host = document.getElementById('section-host');
  const body = document.body;
  const themeToggle = document.getElementById('viewerThemeToggle');

  // Initialize theme from localStorage
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark');
      if (themeToggle) themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    } else {
      body.classList.remove('dark');
      if (themeToggle) themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
    }
  } catch {}

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      const icon = themeToggle.querySelector('i');
      if (body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        try { localStorage.setItem('theme', 'dark'); } catch {}
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        try { localStorage.setItem('theme', 'light'); } catch {}
      }
    });
  }

  if (section && EXTERNAL_SECTIONS[section]) {
    window.location.href = EXTERNAL_SECTIONS[section];
    return;
  }

  if (!section || !(section in map)) {
    viewerTitle.textContent = 'Section not found';
    if (viewerCrumb) viewerCrumb.textContent = 'Home / N/A';
    host.innerHTML = '<div class="bg-section-bg rounded-xl p-6 border border-border">' +
      '<p class="font-body">Debes proporcionar una sección válida (?section=projects|blog|vibecoding).</p>' +
      '</div>';
    return;
  }

  viewerTitle.textContent = titleMap[section] + ' – Viewer';
  if (viewerCrumb) viewerCrumb.textContent = 'Home / ' + titleMap[section];

  fetch(map[section])
    .then(r => r.text())
    .then(html => {
      host.innerHTML = html;
    })
    .catch(err => {
      host.innerHTML = '<div class="bg-section-bg rounded-xl p-6 border border-border">' +
        '<p class="font-body">No se pudo cargar la sección: ' + String(err) + '</p>' +
        '</div>';
    });
})();
