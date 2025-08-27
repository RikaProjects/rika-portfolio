(function() {
  // Fungsi ini akan berjalan sebelum React dimuat
  try {
    const theme = localStorage.getItem('theme') || 'system';
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === 'dark' || (theme === 'system' && isSystemDark)) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  } catch {
    // Mengabaikan error jika localStorage tidak tersedia
  }
})();