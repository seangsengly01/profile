function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('dark-mode-icon');
    if (document.body.classList.contains('light-mode')) {
      icon.src = 'image/night-mode.png';
      icon.style.transform = 'rotate(360deg)';
    } else {
      icon.src = 'image/day-mode.png';
      icon.style.transform = 'rotate(0deg)';
    }
  }
  