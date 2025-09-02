// Language Switcher Script
const langSwitch = document.getElementById('lang-switch');
langSwitch.addEventListener('click', () => {
    const html = document.documentElement;
    if (html.lang === 'en') {
        html.lang = 'ar';
        html.dir = 'rtl';
        langSwitch.textContent = 'English';
        // TODO: Replace all text with Arabic
    } else {
        html.lang = 'en';
        html.dir = 'ltr';
        langSwitch.textContent = 'العربية';
        // TODO: Replace all text with English
    }
});
// You can expand this script to fully translate all content dynamically.
