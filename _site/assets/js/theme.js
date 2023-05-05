// Has to be in the head tag, otherwise a flicker effect will occur.
let initTheme = (theme) => {
  if (theme == null) {
    const userPref = window.matchMedia;
    if (userPref && userPref('(prefers-color-scheme: light)').matches) {
        theme = 'light';
    }
    // theme = 'light';
  }

  if (theme)  {
    document.documentElement.setAttribute('data-theme', theme)
  }

  localStorage.setItem("theme", theme);
}

initTheme(localStorage.getItem("theme"));
