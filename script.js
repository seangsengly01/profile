function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('dark-mode-icon');
    if (document.body.classList.contains('light-mode')) {
      icon.src = 'night-mode.png';
      icon.style.transform = 'rotate(360deg)';
    } else {
      icon.src = 'day-mode.png';
      icon.style.transform = 'rotate(0deg)';
    }
  }
  
