// Simple AlAhli Bank Website Code
// Made simple for beginners

// Data for services
var servicesData = [
    {icon:"lucide:wallet",color:"orange",en:"Current Accounts",ar:"الحسابات الجارية",enD:"Zero-balance accounts with instant access and smart spending insights.",arD:"حسابات برصيد صفر مع وصول فوري ورؤى ذكية للإنفاق."},
    {icon:"lucide:piggy-bank",color:"green",en:"Savings Accounts",ar:"حسابات التوفير",enD:"Grow your wealth with competitive interest rates and flexible plans.",arD:"نم ثروتك بعوائد تنافسية وخطط توفير مرنة."},
    {icon:"lucide:credit-card",color:"orange",en:"Credit Cards",ar:"البطاقات الائتمانية",enD:"Premium cards with exclusive rewards, cashback, and travel benefits.",arD:"بطاقات مميزة بمكافآت حصرية واسترداد نقدي ومزايا سفر."},
    {icon:"lucide:home",color:"green",en:"Home Finance",ar:"التمويل العقاري",enD:"Own your dream home with flexible plans up to 30 years.",arD:"أمتلك منزل أحلامك بخطط مرنة حتى 30 سنة."},
    {icon:"lucide:building-2",color:"orange",en:"Business Banking",ar:"الخدمات التجارية",enD:"Comprehensive solutions for SMEs with dedicated managers.",arD:"حلول شاملة للشركات الصغيرة مع مديري علاقات مخصصين."},
    {icon:"lucide:globe",color:"green",en:"Global Transfers",ar:"التحويلات الدولية",enD:"Send money worldwide instantly through our global network.",arD:"أرسل أموالك حول العالم فورا عبر شبكتنا العالمية."}
];

// Data for features
var featuresData = [
    {icon:"lucide:smartphone",color:"orange",en:"Digital-First Banking",ar:"تمويل رقمي أولا",enD:"Manage everything from your phone — accounts, cards, investments.",arD:"أدر كل شيء من هاتفك — حسابات وبطاقات واستثمارات."},
    {icon:"lucide:shield-check",color:"green",en:"Military-Grade Security",ar:"أمان بمعايير عسكرية",enD:"256-bit encryption, biometric auth, and real-time fraud monitoring.",arD:"تشفير 256 بت ومصادقة بيومترية ومراقبة احتيال فورية."},
    {icon:"lucide:headphones",color:"green",en:"24/7 Smart Support",ar:"دعم ذكي على مدار الساعة",enD:"AI-powered chatbot and human agents available round the clock.",arD:"روبوت محادثة ذكي ووكلاء بشريون متاحون على مدار الساعة."},
    {icon:"lucide:leaf",color:"orange",en:"Green Banking",ar:"تمويل أخضر",enD:"Paperless transactions, carbon-neutral operations, and ESG investments.",arD:"معاملات بلا ورق وعمليات محايدة الكربون واستثمارات مستدامة."}
];

// Data for FAQ
var faqData = [
    {en:"How do I open a new account?",ar:"كيف أفتح حسابا جديدا؟",enD:"You can open an account online through our app in minutes, or visit any branch with your national ID. The process is quick, paperless, and free.",arD:"يمكنك فتح حساب عبر التطبيق في دقائق أو زيارة أي فرع مع هويتك. العملية سريعة وبلا ورق ومجانية."},
    {en:"What is the minimum balance for savings?",ar:"ما هو الحد الأدنى لحساب التوفير؟",enD:"The minimum balance starts from just 1,000 SAR with competitive profit rates that increase based on your balance tier.",arD:"يبدأ الحد الأدنى من 1000 ريال فقط مع أرباح تنافسية تزداد حسب شريحة رصيدك."},
    {en:"Can I make international transfers via the app?",ar:"هل يمكنني تحويل أموال دوليا عبر التطبيق؟",enD:"Yes! Send money to 200+ countries instantly with competitive exchange rates and low fees.",arD:"نعم! أرسل أموالك إلى أكثر من 200 دولة فورا بأسعار صرف تنافسية ورسوم منخفضة."},
    {en:"How do I contact customer support?",ar:"كيف أتواصل مع خدمة العملاء؟",enD:"Reach us 24/7 at 19623, via in-app chat, or through our AI assistant on this page.",arD:"تواصل معنا على مدار الساعة على الرقم 19623 أو عبر الدردشة في التطبيق أو مساعد الذكاء الاصطناعي."}
];

// Data for quick buttons
var quickData = [
    {en:"Open Account",ar:"فتح حساب",enR:"To open an account, visit any branch with your ID or use our app for instant online opening. Want step-by-step guidance?",arR:"لفتح حساب زر أي فرع مع هويتك أو استخدم التطبيق لفتح حساب فوري. هل تريد إرشادا خطوة بخطوة؟"},
    {en:"Card Info",ar:"معلومات البطاقات",enR:"We offer Visa Classic, Platinum, and World Elite cards with up to 5% cashback and travel perks. Which interests you?",arR:"نقدم بطاقات كلاسيك وبلاتينيوم وورلد إليت مع استرداد نقدي حتى 5% ومزايا سفر. أيها يهمك؟"},
    {en:"Loan Rates",ar:"أسعار القروض",enR:"Personal loans from 2.5% APR, home finance from 3.2% APR. Rates depend on your profile. Want a personalized quote?",arR:"قروض شخصية من 2.5% وتمويل عقاري من 3.2%. الأسعار تعتمد على ملفك. هل تريد عرضا مخصصا؟"}
];

// AI responses
var aiResp = {
    en:{account:"Opening an account is easy! Use our app or visit any branch. Want guidance?",card:"We offer Classic, Platinum, and World Elite cards with up to 5% cashback. Which one?",loan:"Personal loans from 2.5% APR, home finance from 3.2%. Want a personalized quote?",transfer:"Send money to 200+ countries instantly! Fees from 10 SAR. Available 24/7.",hello:"Hello! Welcome to AlAhli Bank. How can I help you today?",def:"I can help with accounts, cards, loans, transfers, and more. Try the quick buttons below!" },
    ar:{account:"فتح حساب سهل! استخدم التطبيق أو زر أي فرع. هل تريد إرشادا؟",card:"نقدم كلاسيك وبلاتينيوم وورلد إليت مع استرداد نقدي حتى 5%. أي واحدة؟",loan:"قروض شخصية من 2.5% وتمويل عقاري من 3.2%. هل تريد عرضا مخصصا؟",transfer:"أرسل أموالك لأكثر من 200 دولة فورا! الرسوم من 10 ريال. متاح 24/7.",hello:"مرحبا! أهلا بك في البنك الأهلي. كيف أساعدك اليوم؟",def:"يمكنني المساعدة في الحسابات والبطاقات والقروض والتحويلات. جرب الأزرار السريعة!" }
};

// Global variables
var isAr = false;
var isDark = false;

// Helper function to get element
function $(sel) {
    return document.querySelector(sel);
}

// Helper function to get all elements
function $$(sel) {
    return document.querySelectorAll(sel);
}

// Show toast message
function toast(msg) {
    var t = $("#toast");
    $("#toastTxt").textContent = msg;
    t.style.opacity = "1";
    t.style.transform = "translate(-50%,0)";
    setTimeout(function() {
        t.style.opacity = "0";
        t.style.transform = "translate(-50%,-1rem)";
    }, 3000);
}

// Get translated text
function getT(el) {
    return isAr ? (el.getAttribute("data-t-ar") || el.textContent) : (el.getAttribute("data-t-en") || el.textContent);
}

// Render services
function renderServices() {
    var grid = $("#servicesGrid");
    grid.innerHTML = "";
    for (var i = 0; i < servicesData.length; i++) {
        var s = servicesData[i];
        var isO = s.color === "orange";
        var glowCls = isO ? "hover:shadow-orange-500/10" : "hover:shadow-green-500/10";
        var borderCls = isO ? "hover:border-orange-300 dark:hover:border-orange-500/30" : "hover:border-green-300 dark:hover:border-green-500/30";
        var txtCls = isO ? "text-orange-500" : "text-green-500";
        var bgIcon = isO ? "from-orange-500 to-orange-600" : "from-green-500 to-green-600";
        var glowIcon = isO ? "glow-o-sm" : "glow-g-sm";
        var div = document.createElement("div");
        div.className = "scard bg-white dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-800/80 " + borderCls + " hover:shadow-xl " + glowCls + " cursor-pointer";
        div.innerHTML = "<div class=\"w-14 h-14 rounded-2xl bg-gradient-to-br " + bgIcon + " flex items-center justify-center mb-6 group-hover:scale-110 transition-transform " + glowIcon + "\"><iconify-icon icon=\"" + s.icon + "\" class=\"text-white text-2xl\"></iconify-icon></div>" +
            "<h3 class=\"text-lg font-bold text-slate-900 dark:text-white mb-2 tr\" data-t-en=\"" + s.en + "\" data-t-ar=\"" + s.ar + "\">" + getT({getAttribute:function(k){return k==="data-t-en"?s.en:k==="data-t-ar"?s.ar:"";}, textContent:s.en}) + "</h3>" +
            "<p class=\"text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 tr\" data-t-en=\"" + s.enD + "\" data-t-ar=\"" + s.arD + "\">" + getT({getAttribute:function(k){return k==="data-t-en"?s.enD:k==="data-t-ar"?s.arD:"";}, textContent:s.enD}) + "</p>" +
            "<span class=\"inline-flex items-center gap-1 " + txtCls + " text-sm font-semibold group-hover:gap-2 transition-all\"><span class=\"tr\" data-t-en=\"Learn More\" data-t-ar=\"اعرف أكثر\">" + (isAr?"اعرف أكثر":"Learn More") + "</span><iconify-icon icon=\"lucide:arrow-right\" class=\"arr-ico text-sm\"></iconify-icon></span>";
        grid.appendChild(div);
    }
}

// Render features
function renderFeatures() {
    var grid = $("#featuresGrid");
    grid.innerHTML = "";
    for (var i = 0; i < featuresData.length; i++) {
        var f = featuresData[i];
        var isO = f.color === "orange";
        var txtCls = isO ? "text-orange-500" : "text-green-500";
        var bgIco = isO ? "bg-orange-500/10 dark:bg-orange-500/20" : "bg-green-500/10 dark:bg-green-500/20";
        var shadowCls = isO ? "hover:shadow-orange-500/5" : "hover:shadow-green-500/5";
        var div = document.createElement("div");
        div.className = "group flex items-start gap-5 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl " + shadowCls + " transition-all duration-300";
        div.innerHTML = "<div class=\"w-14 h-14 rounded-2xl " + bgIco + " flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform\"><iconify-icon icon=\"" + f.icon + "\" class=\"" + txtCls + " text-2xl\"></iconify-icon></div>" +
            "<div><h3 class=\"text-lg font-bold text-slate-900 dark:text-white mb-2 tr\" data-t-en=\"" + f.en + "\" data-t-ar=\"" + f.ar + "\">" + getT({getAttribute:function(k){return k==="data-t-en"?f.en:k==="data-t-ar"?f.ar:"";}, textContent:f.en}) + "</h3>" +
            "<p class=\"text-sm text-slate-500 dark:text-slate-400 leading-relaxed tr\" data-t-en=\"" + f.enD + "\" data-t-ar=\"" + f.arD + "\">" + getT({getAttribute:function(k){return k==="data-t-en"?f.enD:k==="data-t-ar"?f.arD:"";}, textContent:f.enD}) + "</p></div>";
        grid.appendChild(div);
    }
}

// Render FAQ
function renderFAQ() {
    var list = $("#faqList");
    list.innerHTML = "";
    for (var i = 0; i < faqData.length; i++) {
        var q = faqData[i];
        var det = document.createElement("details");
        det.className = "group border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/50 overflow-hidden";
        det.innerHTML = "<summary class=\"flex items-center justify-between cursor-pointer p-6\"><span class=\"font-semibold text-slate-900 dark:text-white text-sm pr-4 tr\" data-t-en=\"" + q.en + "\" data-t-ar=\"" + q.ar + "\">" + getT({getAttribute:function(k){return k==="data-t-en"?q.en:k==="data-t-ar"?q.ar:"";}, textContent:q.en}) + "</span><iconify-icon icon=\"lucide:chevron-down\" class=\"text-slate-400 text-lg transition-transform group-open:rotate-180 flex-shrink-0\"></iconify-icon></summary>" +
            "<div class=\"px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed tr\" data-t-en=\"" + q.enD + "\" data-t-ar=\"" + q.arD + "\">" + getT({getAttribute:function(k){return k==="data-t-en"?q.enD:k==="data-t-ar"?q.arD:"";}, textContent:q.enD}) + "</div>";
        list.appendChild(det);
    }
}

// Render quick buttons
function renderQuickBtns() {
    var c = $("#quickBtns");
    c.innerHTML = "";
    for (var i = 0; i < quickData.length; i++) {
        var q = quickData[i];
        var isO = i % 2 === 0;
        var cls = isO ? "border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/10" : "border-green-200 dark:border-green-500/20 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10";
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quick-btn flex-shrink-0 text-xs border " + cls + " px-3 py-1.5 rounded-full transition-colors";
        btn.textContent = isAr ? q.ar : q.en;
        btn.setAttribute("data-idx", i);
        btn.addEventListener("click", function() {
            var idx = parseInt(this.getAttribute("data-idx"));
            var q = quickData[idx];
            var reply = isAr ? q.arR : q.enR;
            addMsg(reply, false);
        });
        c.appendChild(btn);
    }
}

// Translate all
function translateAll() {
    var trElements = $$(".tr");
    for (var i = 0; i < trElements.length; i++) {
        trElements[i].textContent = getT(trElements[i]);
    }
    var inp = $("#chatIn");
    inp.placeholder = isAr ? "اكتب سؤالك..." : "Type your question...";
    var arrIcos = $$(".arr-ico");
    for (var i = 0; i < arrIcos.length; i++) {
        arrIcos[i].setAttribute("icon", isAr ? "lucide:arrow-left" : "lucide:arrow-right");
    }
    renderServices();
    renderFeatures();
    renderFAQ();
    renderQuickBtns();
}

// Apply dark mode
function applyDark() {
    if (isDark) {
        document.documentElement.classList.add("dark");
        var sunIcos = $$(".sun-ico");
        for (var i = 0; i < sunIcos.length; i++) {
            sunIcos[i].style.display = "none";
        }
        var moonIcos = $$(".moon-ico");
        for (var i = 0; i < moonIcos.length; i++) {
            moonIcos[i].style.display = "inline-block";
        }
    } else {
        document.documentElement.classList.remove("dark");
        var sunIcos = $$(".sun-ico");
        for (var i = 0; i < sunIcos.length; i++) {
            sunIcos[i].style.display = "inline-block";
        }
        var moonIcos = $$(".moon-ico");
        for (var i = 0; i < moonIcos.length; i++) {
            moonIcos[i].style.display = "none";
        }
    }
}

// Add message to chat
function addMsg(text, isUser) {
    var div = document.createElement("div");
    div.className = "flex gap-2" + (isUser ? " justify-end" : "");
    if (isUser) {
        div.innerHTML = "<div class=\"bg-gradient-to-br from-orange-500 to-green-500 text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%]\"><p class=\"text-sm\">" + text + "</p></div>";
    } else {
        div.innerHTML = "<div class=\"w-7 h-7 rounded-lg grad-main flex items-center justify-center flex-shrink-0 mt-1\"><iconify-icon icon=\"lucide:bot\" class=\"text-white text-xs\"></iconify-icon></div><div class=\"rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%] bg-orange-50 dark:bg-orange-500/5\"><p class=\"text-sm text-slate-700 dark:text-slate-300\">" + text + "</p></div>";
    }
    var box = $("#chatMsgs");
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

// Show typing
function showTyping(cb) {
    var div = document.createElement("div");
    div.className = "flex gap-2 typing-ind";
    div.innerHTML = "<div class=\"w-7 h-7 rounded-lg grad-main flex items-center justify-center flex-shrink-0 mt-1\"><iconify-icon icon=\"lucide:bot\" class=\"text-white text-xs\"></iconify-icon></div><div class=\"rounded-2xl rounded-tl-md px-4 py-3 bg-orange-50 dark:bg-orange-500/5\"><div class=\"flex gap-1\"><div class=\"w-2 h-2 rounded-full bg-slate-400 animate-bounce\" style=\"animation-delay:0ms\"></div><div class=\"w-2 h-2 rounded-full bg-slate-400 animate-bounce\" style=\"animation-delay:150ms\"></div><div class=\"w-2 h-2 rounded-full bg-slate-400 animate-bounce\" style=\"animation-delay:300ms\"></div></div></div>";
    var box = $("#chatMsgs");
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
    setTimeout(function() {
        div.remove();
        if (cb) cb();
    }, 1000);
}

// Get AI reply
function getAIReply(text) {
    var low = text.toLowerCase();
    var lang = isAr ? "ar" : "en";
    var r = aiResp[lang];
    if (low.includes("account") || low.includes("حساب")) return r.account;
    if (low.includes("card") || low.includes("بطاق")) return r.card;
    if (low.includes("loan") || low.includes("قرض")) return r.loan;
    if (low.includes("transfer") || low.includes("تحويل")) return r.transfer;
    if (low.includes("hello") || low.includes("hi") || low.includes("مرحب")) return r.hello;
    return r.def;
}

// Send chat
function sendChat() {
    var inp = $("#chatIn");
    var text = inp.value.trim();
    if (!text) return;
    addMsg(text, true);
    inp.value = "";
    var reply = getAIReply(text);
    showTyping(function() {
        addMsg(reply, false);
    });
}

// Close mobile menu
function closeMobMenu() {
    $("#mobMenu").classList.remove("open");
    $("#mobOverlay").classList.add("hidden");
    document.body.style.overflow = "";
}

// Initialize when page loads
window.onload = function() {
    // Check saved dark mode
    if (localStorage.getItem("ahliDark") === "true") {
        isDark = true;
    }
    applyDark();

    // Render dynamic content
    renderServices();
    renderFeatures();
    renderFAQ();
    renderQuickBtns();

    // Initial chat message
    addMsg(isAr ? "مرحبا! أنا مساعد الأهلي الذكي. كيف أساعدك اليوم؟" : "Hello! I\'m your AlAhli AI assistant. How can I help you today?", false);

    // Dark mode toggle
    $("#darkToggle").addEventListener("click", function() {
        isDark = !isDark;
        localStorage.setItem("ahliDark", isDark);
        applyDark();
    });

    // Language toggle
    $("#langToggle").addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof closeMobMenu === "function") closeMobMenu();
        isAr = !isAr;
        document.documentElement.lang = isAr ? "ar" : "en";
        document.documentElement.dir = isAr ? "rtl" : "ltr";
        translateAll();
        // Re-add welcome msg
        var box = $("#chatMsgs");
        box.innerHTML = "";
        addMsg(isAr ? "مرحبا! أنا مساعد الأهلي الذكي. كيف أساعدك اليوم؟" : "Hello! I\'m your AlAhli AI assistant. How can I help you today?", false);
    });

    // Mobile menu
    $("#mobMenuBtn").addEventListener("click", function() {
        $("#mobMenu").classList.add("open");
        $("#mobOverlay").classList.remove("hidden");
        document.body.style.overflow = "hidden";
    });
    $("#mobClose").addEventListener("click", closeMobMenu);
    $("#mobOverlay").addEventListener("click", closeMobMenu);
    var mobLinks = $$(".mob-link");
    for (var i = 0; i < mobLinks.length; i++) {
        mobLinks[i].addEventListener("click", closeMobMenu);
    }

    // AI chat
    var panel = $("#aiPanel");
    $("#aiOpen").addEventListener("click", function() {
        if (panel.classList.contains("show")) {
            panel.classList.remove("show");
            setTimeout(function() {
                panel.style.display = "none";
            }, 300);
        } else {
            panel.style.display = "block";
            setTimeout(function() {
                panel.classList.add("show");
            }, 10);
        }
    });
    $("#chatClose").addEventListener("click", function() {
        panel.classList.remove("show");
        setTimeout(function() {
            panel.style.display = "none";
        }, 300);
    });
    $("#chatSend").addEventListener("click", sendChat);
    $("#chatIn").addEventListener("keydown", function(e) {
        if (e.key === "Enter") sendChat();
    });

    // CTA buttons
    var ctaBtns = $$(".cta-btn");
    for (var i = 0; i < ctaBtns.length; i++) {
        ctaBtns[i].addEventListener("click", function(e) {
            e.preventDefault();
            toast(isAr ? "سيتم توجيهك لصفحة فتح الحساب..." : "Redirecting to account opening page...");
        });
    }

    // Back to top
    var btt = $("#btt");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 500) {
            btt.style.opacity = "1";
            btt.style.pointerEvents = "auto";
        } else {
            btt.style.opacity = "0";
            btt.style.pointerEvents = "none";
        }
    });
    btt.addEventListener("click", function() {
        window.scrollTo({top: 0, behavior: "smooth"});
    });

    // Nav shadow
    window.addEventListener("scroll", function() {
        var nav = $("#navbar");
        if (window.scrollY > 10) {
            nav.style.boxShadow = "0 4px 30px rgba(0,0,0,0.08)";
        } else {
            nav.style.boxShadow = "none";
        }
    });

    // Smooth scroll
    var links = $$("a[href^=\"#\"]");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(e) {
            var href = this.getAttribute("href");
            if (href === "#") return;
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) target.scrollIntoView({behavior: "smooth", block: "start"});
        });
    }
};
