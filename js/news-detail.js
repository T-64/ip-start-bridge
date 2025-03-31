// 初始化i18next和新闻数据
let newsData = [];

// 初始化应用
async function initializeApp() {
    try {
        // 初始化i18next
        await i18next.init({
            lng: 'zh', // 默认中文
            fallbackLng: 'zh',
            resources: {
                zh: {
                    translation: {
                        "news_detail_title": "新闻详情",
                        "ip_news": "知识产权要闻",
                        "language_setting": "语言设置:",
                        "login": "登录",
                        "register": "注册"
                    }
                },
                en: {
                    translation: {
                        "news_detail_title": "News Detail",
                        "ip_news": "IP News",
                        "language_setting": "Language:",
                        "login": "Login",
                        "register": "Register"
                    }
                },
                es: {
                    translation: {
                        "news_detail_title": "Detalles de Noticias",
                        "ip_news": "Noticias de PI",
                        "language_setting": "Idioma:",
                        "login": "Iniciar sesión",
                        "register": "Registrarse"
                    }
                }
            }
        });

        // 加载新闻数据
        const response = await fetch('data/news-data.json');
        newsData = (await response.json()).news;

        // 渲染页面
        renderNewsList();
        loadNewsContent();
        updatePageContent();
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

// 获取URL参数
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


// 修改loadNewsContent函数
function loadNewsContent() {
    const newsId = getUrlParameter('id') || '1';
    const news = newsData.find(item => item.id.toString() === newsId);
    
    if (news) {
        document.getElementById('news-title').textContent = news.title[i18next.language] || news.title.zh;
        
        // 清空现有内容
        const contentElement = document.getElementById('news-content');
        contentElement.innerHTML = '';
        
        // 逐段添加内容
        const contentArray = news.content[i18next.language] || news.content.zh;
        contentArray.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            contentElement.appendChild(p);
        });
        
        // 更新当前选中的新闻项样式
        updateActiveNewsItem(newsId);
    }
}

// 添加更新当前选中新闻项样式的函数
function updateActiveNewsItem(newsId) {
    document.querySelectorAll('.news-sidebar-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-news-id') === newsId) {
            item.classList.add('active');
        }
    });
}

function renderNewsList() {
    const newsList = document.getElementById('news-list');
    const currentNewsId = getUrlParameter('id') || '1';
    
    // 清空现有列表
    newsList.innerHTML = '';
    
    newsData.forEach(news => {
        const li = document.createElement('li');
        li.className = 'news-sidebar-item';
        li.setAttribute('data-news-id', news.id);
        if (news.id.toString() === currentNewsId) {
            li.classList.add('active');
        }
        
        const a = document.createElement('a');
        a.href = `news-detail.html?id=${news.id}`;
        // 存储多语言标题数据
        a.setAttribute('data-i18n-news-title', JSON.stringify(news.title));
        a.textContent = news.title[i18next.language] || news.title.zh;
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.pushState({}, '', `news-detail.html?id=${news.id}`);
            loadNewsContent();
        });
        
        li.appendChild(a);
        newsList.appendChild(li);
    });
}

// 格式化新闻内容（添加段落等）
function formatNewsContent(content) {
    // 简单处理：按换行符分割为段落
    return content.split('\n').map(paragraph => {
        return `<p>${paragraph}</p>`;
    }).join('');
}

// 更新页面内容（语言切换时调用）
function updatePageContent() {
    // 更新静态文本
    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = i18next.t(element.getAttribute('data-i18n'));
    });
    
    // 更新新闻列表标题
    document.querySelectorAll('.news-sidebar-item a').forEach(a => {
        const titles = JSON.parse(a.getAttribute('data-i18n-news-title'));
        a.textContent = titles[i18next.language] || titles.zh;
    });
    
    // 更新当前新闻内容
    const newsId = getUrlParameter('id') || '1';
    const news = newsData.find(item => item.id.toString() === newsId);
    
    if (news) {
        document.getElementById('news-title').textContent = news.title[i18next.language] || news.title.zh;
        
        const contentElement = document.getElementById('news-content');
        contentElement.innerHTML = '';
        
        const contentArray = news.content[i18next.language] || news.content.zh;
        contentArray.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            contentElement.appendChild(p);
        });
    }
    
    // 更新当前选中的新闻项样式
    updateActiveNewsItem(newsId);
}


// 语言切换事件
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        
        // 更新当前语言按钮样式
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.remove('current-lang');
        });
        this.classList.add('current-lang');
        
        // 切换语言
        i18next.changeLanguage(lang, () => {
            // 重新渲染整个页面内容
            renderNewsList();
            updatePageContent();
        });
    });
});

// 启动应用
initializeApp();