// 市场数据
let marketData = [];

// 获取URL参数
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 初始化应用
async function initializeApp() {
    try {
        await i18next.init({
            lng: 'zh',
            fallbackLng: 'zh',
            resources: {
                zh: {
                    translation: {
                        "market_title": "市场概况",
                        "language_setting": "语言设置:",
                        "login": "登录",
                        "register": "注册",
                        "read_more": "阅读更多",
                        "beijing_tianjin_hebei": "京津冀地区",
                        "guangdong_shenzhen": "广深湾地区",
                        "southeast_coast": "东南沿海地区",
                        "southwest": "西南地区",
                        "policy": "政策导向",
                        "industry": "重点产业",
                        "ip": "知识产权类型"
                    }
                },
                en: {
                    translation: {
                        "market_title": "Market Overview",
                        "language_setting": "Language:",
                        "login": "Login",
                        "register": "Register",
                        "read_more": "Read More",
                        "beijing_tianjin_hebei": "Beijing-Tianjin-Hebei Region",
                        "guangdong_shenzhen": "Guangdong-Shenzhen Bay Area",
                        "southeast_coast": "Southeast Coast Region",
                        "southwest": "Southwest Region",
                        "policy": "Policy Orientation",
                        "industry": "Key Industries",
                        "ip": "IP Types"
                    }
                },
                es: {
                    translation: {
                        "market_title": "Resumen del Mercado",
                        "language_setting": "Idioma:",
                        "login": "Iniciar sesión",
                        "register": "Registrarse",
                        "read_more": "Leer más",
                        "beijing_tianjin_hebei": "Región Beijing-Tianjin-Hebei",
                        "guangdong_shenzhen": "Área de la Bahía Guangdong-Shenzhen",
                        "southeast_coast": "Región de la Costa Sureste",
                        "southwest": "Región Suroeste",
                        "policy": "Orientación de Políticas",
                        "industry": "Industrias Clave",
                        "ip": "Tipos de Propiedad Intelectual"
                    }
                }
            }
        });

        const region = getUrlParameter('region') || 'beijing';
        const response = await fetch(`data/${region}.json`);
        if (!response.ok) throw new Error('无法加载地区数据');
        marketData = (await response.json()).sections;

        renderSidebar();
        loadInitialContent();
        updatePageContent();
    } catch (error) {
        console.error('Initialization error:', error);
        document.getElementById('news-cards').innerHTML = '<p>加载数据失败，请稍后重试。</p>';
    }
}

// 渲染侧栏
function renderSidebar() {
    const sidebarList = document.getElementById('news-sidebar-list');
    sidebarList.innerHTML = '';

    marketData.forEach(section => {
        const itemLi = document.createElement('li');
        itemLi.className = 'news-sidebar-item';

        const a = document.createElement('a');
        a.href = '#';
        a.setAttribute('data-section', section.id);
        a.textContent = i18next.t(section.id); // 使用i18n翻译板块名称

        a.addEventListener('click', (e) => {
            e.preventDefault();
            loadContent(section.id);
        });

        itemLi.appendChild(a);
        sidebarList.appendChild(itemLi);
    });
}

// 加载内容
function loadContent(sectionId) {
    const section = marketData.find(s => s.id === sectionId);
    if (section) {
        const cardsContainer = document.getElementById('news-cards');
        cardsContainer.innerHTML = '';

        section.content[i18next.language].forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'news-card';

            const title = document.createElement('h4');
            title.textContent = item.title;

            const content = document.createElement('p');
            content.textContent = item.text;

            const readMoreDiv = document.createElement('div');
            readMoreDiv.className = 'read-more';
            const readMoreLink = document.createElement('a');
            readMoreLink.href = '#';
            readMoreLink.textContent = i18next.t('read_more');
            readMoreLink.setAttribute('data-section', sectionId);
            readMoreLink.setAttribute('data-index', index);

            readMoreLink.addEventListener('click', (e) => {
                e.preventDefault();
                showModal(sectionId, index);
            });

            readMoreDiv.appendChild(readMoreLink);
            card.appendChild(title);
            card.appendChild(content);
            card.appendChild(readMoreDiv);
            cardsContainer.appendChild(card);
        });

        updateActiveItem(sectionId);
    }
}

// 显示模态框
function showModal(sectionId, index) {
    const section = marketData.find(s => s.id === sectionId);

    const modal = document.getElementById('news-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = section.content[i18next.language][index].title;
    modalContent.innerHTML = '';
    const fullContent = section.content[i18next.language][index].text;
    const p = document.createElement('p');
    p.textContent = fullContent;
    modalContent.appendChild(p);

    modal.style.display = 'flex';

    const closeBtn = document.querySelector('.modal-close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// 更新选中状态
function updateActiveItem(sectionId) {
    document.querySelectorAll('.news-sidebar-item').forEach(item => {
        item.classList.remove('active');
        const a = item.querySelector('a');
        if (a.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });
}

// 加载初始内容
function loadInitialContent() {
    const firstSection = marketData[0];
    loadContent(firstSection.id);
}

// 更新页面内容（语言切换时）
function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = i18next.t(element.getAttribute('data-i18n'));
    });
    document.title = i18next.t('market_title');
    renderSidebar();
    loadInitialContent();
}

// 语言切换事件
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('current-lang'));
        this.classList.add('current-lang');
        i18next.changeLanguage(lang, () => {
            updatePageContent();
        });
    });
});

// 启动应用
initializeApp();