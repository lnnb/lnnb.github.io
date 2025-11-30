document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const pdfBtn = document.getElementById('pdf-btn');
    const body = document.body;

    // State
    let currentLang = localStorage.getItem('cv_lang') || 'en'; // Default to English
    let currentTheme = localStorage.getItem('cv_theme') || 'light';

    // Initialize
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    // Event Listeners
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
        localStorage.setItem('cv_theme', currentTheme);
    });

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        applyLanguage(currentLang);
        localStorage.setItem('cv_lang', currentLang);
    });

    pdfBtn.addEventListener('click', () => {
        window.print();
    });

    // Functions
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    function applyLanguage(lang) {
        // Update Toggle Button Text
        langToggle.textContent = lang === 'en' ? 'ES' : 'EN'; // Show the *other* language option

        // Update Content
        const t = translations[lang];

        // Text Content Replacements
        document.querySelector('[data-i18n="role"]').textContent = t.role;
        document.querySelector('[data-i18n="location"]').textContent = t.location;
        document.querySelector('[data-i18n="profileTitle"]').textContent = t.profileTitle;
        document.querySelector('[data-i18n="profileText"]').textContent = t.profileText;
        document.querySelector('[data-i18n="experienceTitle"]').textContent = t.experienceTitle;

        document.querySelector('[data-i18n="exp1Title"]').textContent = t.exp1Title;
        document.querySelector('[data-i18n="exp1Date"]').textContent = t.exp1Date;
        updateList('[data-i18n="exp1Desc"]', t.exp1Desc);

        document.querySelector('[data-i18n="exp2Title"]').textContent = t.exp2Title;
        document.querySelector('[data-i18n="exp2Date"]').textContent = t.exp2Date;
        updateList('[data-i18n="exp2Desc"]', t.exp2Desc);

        document.querySelector('[data-i18n="exp3Title"]').textContent = t.exp3Title;
        document.querySelector('[data-i18n="exp3Date"]').textContent = t.exp3Date;
        updateList('[data-i18n="exp3Desc"]', t.exp3Desc);

        document.querySelector('[data-i18n="exp4Title"]').textContent = t.exp4Title;
        document.querySelector('[data-i18n="exp4Date"]').textContent = t.exp4Date;
        updateList('[data-i18n="exp4Desc"]', t.exp4Desc);

        document.querySelector('[data-i18n="educationTitle"]').textContent = t.educationTitle;
        document.querySelector('[data-i18n="edu1Title"]').textContent = t.edu1Title;
        document.querySelector('[data-i18n="edu2Title"]').textContent = t.edu2Title;
        document.querySelector('[data-i18n="edu3Title"]').textContent = t.edu3Title;

        document.querySelector('[data-i18n="skillsTitle"]').textContent = t.skillsTitle;
        document.querySelector('[data-i18n="skill1"]').textContent = t.skill1;
        document.querySelector('[data-i18n="skill2"]').textContent = t.skill2;
        document.querySelector('[data-i18n="skill3"]').textContent = t.skill3;
        document.querySelector('[data-i18n="skill4"]').textContent = t.skill4;
        document.querySelector('[data-i18n="skill5"]').textContent = t.skill5;
        document.querySelector('[data-i18n="skill6"]').textContent = t.skill6;
        document.querySelector('[data-i18n="skill7"]').textContent = t.skill7;
        document.querySelector('[data-i18n="skill8"]').textContent = t.skill8;
        document.querySelector('[data-i18n="footerRights"]').textContent = t.footerRights;
    }

    function updateList(selector, items) {
        const ul = document.querySelector(selector).querySelector('ul');
        if (ul) {
            ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
        }
    }
});
