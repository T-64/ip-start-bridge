document.addEventListener('DOMContentLoaded', function () {
    // 初始化 i18next
    i18next.init({
        lng: 'zh', // 默认语言
        fallbackLng: 'zh',
        resources: {
            "zh": {
                "translation": {
                    "title": "涉外知识产权多语种法务咨询平台",
                    "login": "登录",
                    "register": "注册",
                    "hot_search": "热门搜索:",
                    "patent": "专利",
                    "copyright": "著作权",
                    "trademark": "商标",
                    "patent_application": "专利申请",
                    "search_placeholder": "搜索关键词...",
                    "language_setting": "语言设置:",
                    "home": "首页",
                    "domestic_market": "国内市场",
                    "beijing_tianjin_hebei": "京津冀地区",
                    "guangdong_shenzhen": "广深湾地区",
                    "southeast_coast": "东南沿海地区",
                    "southwest": "西南地区",
                    "laws_regulations": "法律法规",
                    "overseas_market": "海外市场",
                    "international_laws": "各国法律法规",
                    "country_overview": "各国环境概况",
                    "ip_news_overseas": "海外知识产权动态信息",
                    "ip_application_process": "海外知识产权申请流程",
                    "ip_search_overseas": "海外知识产权信息检索",
                    "learning_center": "学习天地",
                    "online_courses": "线上课程",
                    "interactive_forum": "互动论坛",
                    "legal_games": "普法小游戏",
                    "consulting_services": "咨询服务",
                    "ip_application_service": "知识产权申请服务",
                    "ip_consulting": "知识产权咨询",
                    "patent_translation": "专利翻译",
                    "data_center": "大数据中心",
                    "patent_search": "专利权检索",
                    "trademark_search": "商标权检索",
                    "copyright_search": "著作权检索",
                    "circuit_search": "集成电路检索",
                    "geographical_indication_search": "地理标志检索",
                    "ip_news": "知识产权要闻",
                    "more": "更多",
                    "news_1": "欧盟知识产权局发布元宇宙IP侵权和执法影响报告",
                    "news_2": "萨尔瓦多全新知识产权法即将生效",
                    "news_3": "英国就版权与人工智能法律改革征求公众意见",
                    "news_4": "英国知识产权局讨论如何保护人工智能行业",
                    "news_5": "美国多部门知识产权执法策略与工作",
                    "common_countries": "常用国家信息",
                    "usa": "美国",
                    "uk": "英国",
                    "eu": "欧盟",
                    "switzerland": "瑞士",
                    "mexico": "墨西哥"
                }
            },
            "en": {
                "translation": {
                    "title": "Multilingual Legal Consulting Platform for International Intellectual Property",
                    "login": "Login",
                    "register": "Register",
                    "hot_search": "Hot Search:",
                    "patent": "Patent",
                    "copyright": "Copyright",
                    "trademark": "Trademark",
                    "patent_application": "Patent Application",
                    "search_placeholder": "Search keywords...",
                    "language_setting": "Language Settings:",
                    "home": "Home",
                    "domestic_market": "Domestic Market",
                    "beijing_tianjin_hebei": "Beijing-Tianjin-Hebei Region",
                    "guangdong_shenzhen": "Guangdong-Shenzhen Bay Area",
                    "southeast_coast": "Southeast Coastal Region",
                    "southwest": "Southwest Region",
                    "laws_regulations": "Laws and Regulations",
                    "overseas_market": "Overseas Market",
                    "international_laws": "International Laws and Regulations",
                    "country_overview": "Country Environment Overview",
                    "ip_news_overseas": "Overseas IP News and Updates",
                    "ip_application_process": "Overseas IP Application Process",
                    "ip_search_overseas": "Overseas IP Information Search",
                    "learning_center": "Learning Center",
                    "online_courses": "Online Courses",
                    "interactive_forum": "Interactive Forum",
                    "legal_games": "Legal Education Games",
                    "consulting_services": "Consulting Services",
                    "ip_application_service": "IP Application Service",
                    "ip_consulting": "IP Consulting",
                    "patent_translation": "Patent Translation",
                    "data_center": "Big Data Center",
                    "patent_search": "Patent Search",
                    "trademark_search": "Trademark Search",
                    "copyright_search": "Copyright Search",
                    "circuit_search": "Integrated Circuit Search",
                    "geographical_indication_search": "Geographical Indication Search",
                    "ip_news": "IP News Highlights",
                    "more": "More",
                    "news_1": "EUIPO Releases Report on Metaverse IP Infringement and Enforcement Impact",
                    "news_2": "El Salvador's New Intellectual Property Law to Take Effect Soon",
                    "news_3": "UK Seeks Public Opinion on Copyright and AI Law Reform",
                    "news_4": "UK IPO Discusses Protection for AI Industry",
                    "news_5": "US Multi-Agency IP Enforcement Strategies and Work",
                    "common_countries": "Frequently Used Country Information",
                    "usa": "United States",
                    "uk": "United Kingdom",
                    "eu": "European Union",
                    "switzerland": "Switzerland",
                    "mexico": "Mexico"
                }
            },
            "es": {
                "translation": {
                    "title": "Plataforma de Consultoría Legal Multilingüe para Propiedad Intelectual Internacional",
                    "login": "Iniciar sesión",
                    "register": "Registrarse",
                    "hot_search": "Búsquedas populares:",
                    "patent": "Patente",
                    "copyright": "Derechos de autor",
                    "trademark": "Marca registrada",
                    "patent_application": "Solicitud de patente",
                    "search_placeholder": "Buscar palabras clave...",
                    "language_setting": "Configuración de idioma:",
                    "home": "Inicio",
                    "domestic_market": "Mercado nacional",
                    "beijing_tianjin_hebei": "Región Beijing-Tianjin-Hebei",
                    "guangdong_shenzhen": "Área de la Bahía Guangdong-Shenzhen",
                    "southeast_coast": "Región costera del sureste",
                    "southwest": "Región suroeste",
                    "laws_regulations": "Leyes y regulaciones",
                    "overseas_market": "Mercado internacional",
                    "international_laws": "Leyes y regulaciones internacionales",
                    "country_overview": "Panorama del entorno de los países",
                    "ip_news_overseas": "Información dinámica sobre propiedad intelectual en el extranjero",
                    "ip_application_process": "Proceso de solicitud de propiedad intelectual en el extranjero",
                    "ip_search_overseas": "Búsqueda de información sobre propiedad intelectual en el extranjero",
                    "learning_center": "Centro de aprendizaje",
                    "online_courses": "Cursos en línea",
                    "interactive_forum": "Foro interactivo",
                    "legal_games": "Juegos de educación legal",
                    "consulting_services": "Servicios de consultoría",
                    "ip_application_service": "Servicio de solicitud de propiedad intelectual",
                    "ip_consulting": "Consultoría de propiedad intelectual",
                    "patent_translation": "Traducción de patentes",
                    "data_center": "Centro de macrodatos",
                    "patent_search": "Búsqueda de patentes",
                    "trademark_search": "Búsqueda de marcas",
                    "copyright_search": "Búsqueda de derechos de autor",
                    "circuit_search": "Búsqueda de circuitos integrados",
                    "geographical_indication_search": "Búsqueda de indicaciones geográficas",
                    "ip_news": "Noticias destacadas de propiedad intelectual",
                    "more": "Más",
                    "news_1": "La EUIPO publica un informe sobre infracciones de PI en el metaverso y su impacto en la aplicación",
                    "news_2": "Nueva ley de propiedad intelectual de El Salvador entrará en vigor pronto",
                    "news_3": "Reino Unido busca opinión pública sobre reforma de leyes de derechos de autor e IA",
                    "news_4": "Oficina de PI del Reino Unido discute cómo proteger la industria de IA",
                    "news_5": "Estrategias y trabajos de aplicación de PI de múltiples departamentos de EE.UU.",
                    "common_countries": "Información de países frecuentemente usados",
                    "usa": "Estados Unidos",
                    "uk": "Reino Unido",
                    "eu": "Unión Europea",
                    "switzerland": "Suiza",
                    "mexico": "México"
                }
            }
        }
    }, function (err, t) {
        if (err) return console.error(err);
        updateContent();
    });

    // 更新页面内容
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (key.startsWith('[placeholder]')) {
                const actualKey = key.replace('[placeholder]', '');
                element.setAttribute('placeholder', i18next.t(actualKey));
            } else {
                element.innerHTML = i18next.t(key);
            }
        });
        document.title = i18next.t('title');
    }

    // 语言切换（移除 alert）
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            const langText = this.textContent.trim(); // 获取按钮文本（中文、English、Español）
            console.log('Switching to language:', langText); // 可选：保留调试日志
            i18next.changeLanguage(lang, () => {
                updateContent();
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('current-lang'));
                this.classList.add('current-lang');
            });
        });
    });

    // 轮播图功能
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;

    slides[currentIndex].classList.add('active');

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    function showPrevSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);
    setInterval(showNextSlide, 3000); // 每3秒切换
});