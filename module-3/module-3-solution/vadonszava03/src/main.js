import './style.css'

const themeSystemBtn = document.querySelector('#themeSystemBtn');
const themeLightBtn = document.querySelector('#themeLightBtn');
const themeDarkBtn = document.querySelector('#themeDarkBtn');

function applyTheme(theme = null){
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  let isDark = savedTheme === 'dark'? true : false;

  if(theme === 'dark'){
    html.classList.add('dark');
    isDark = true;
  } else if(theme === 'light'){
    html.classList.remove('dark');
    isDark = false;
  } else if(theme === 'system' ||theme === null){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.classList.toggle('dark', prefersDark);
    isDark = prefersDark;
  }

  localStorage.setItem('theme', theme);
}

applyTheme();

themeSystemBtn.addEventListener('click', () => {applyTheme('system')})
themeLightBtn.addEventListener('click', () => {applyTheme('light')})
themeDarkBtn.addEventListener('click', () => {applyTheme('dark')})