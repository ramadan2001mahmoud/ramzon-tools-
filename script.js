// بيانات المنتجات (50 منتج محترف)
const productsData = [
    // إلكترونيات (15 منتج)
    { id: 1, name: "آيفون 15 برو ماكس", category: "electronics", price: 4999, originalPrice: 5999, rating: 4.8, image: "📱", description: "512 جيجا، كاميرا ثلاثية، شاشة 6.7 بوصة" },
    { id: 2, name: "سامسونج جالاكسي S24 ألترا", category: "electronics", price: 4299, originalPrice: 4999, rating: 4.7, image: "📱", description: "512 جيجا، قلم S Pen، كاميرا 200 ميجا" },
    { id: 3, name: "ماك بوك برو M3", category: "electronics", price: 12999, rating: 4.9, image: "💻", description: "16 جيجا رام، 1 تيرا SSD، شاشة Liquid Retina" },
    { id: 4, name: "لابتوب جيمنج ROG", category: "electronics", price: 8999, originalPrice: 10999, rating: 4.6, image: "💻", description: "RTX 4070، 32 جيجا رام، معالج i9" },
    { id: 5, name: "سماعات إيربودز برو 2", category: "electronics", price: 999, originalPrice: 1299, rating: 4.5, image: "🎧", description: "إلغاء الضوضاء، 30 ساعة تشغيل" },
    { id: 6, name: "سماعات سوني WH-1000XM5", category: "electronics", price: 1499, originalPrice: 1799, rating: 4.8, image: "🎧", description: "إلغاء ضوضاء ممتاز، 30 ساعة بطارية" },
    { id: 7, name: "تابلت آيباد برو", category: "electronics", price: 3999, rating: 4.7, image: "📱", description: "M2، 12.9 بوصة، Apple Pencil 2" },
    { id: 8, name: "ساعة أبل ووتش ألترا", category: "electronics", price: 2999, rating: 4.6, image: "⌚", description: "GPS، مقاومة للماء 100م" },
    { id: 9, name: "شاشة سامسونج 4K", category: "electronics", price: 2499, originalPrice: 2999, rating: 4.5, image: "📺", description: "55 بوصة، QLED، HDR10+" },
    { id: 10, name: "طابعة ليزر HP", category: "electronics", price: 899, originalPrice: 1199, rating: 4.4, image: "🖨️", description: "طباعة ملونة، WiFi" },
    { id: 11, name: "كاميرا Canon EOS R5", category: "electronics", price: 15999, rating: 4.9, image: "📷", description: "45 ميجا بيكسل، 8K فيديو" },
    { id: 12, name: "سماعات بلوتوث JBL", category: "electronics", price: 299, originalPrice: 399, rating: 4.3, image: "🔊", description: "12 ساعة تشغيل، مقاومة للماء" },
    { id: 13, name: "راوتر WiFi 6", category: "electronics", price: 599, originalPrice: 799, rating: 4.6, image: "📶", description: "تغطية 300 متر مربع" },
    { id: 14, name: "فلاش ميموري 1 تيرا", category: "electronics", price: 199, originalPrice: 299, rating: 4.2, image: "💾", description: "سرعة قراءة 1000 ميجا/ث" },
    { id: 15, name: "هارد SSD 2 تيرا", category: "electronics", price: 799, originalPrice: 999, rating: 4.7, image: "💿", description: "NVMe، سرعة 7000 ميجا/ث" },

    // أزياء (15 منتج)
    { id: 16, name: "قميص قطني أبيض", category: "fashion", price: 79, rating: 4.6, image: "👕", description: "100% قطن، جميع المقاسات" },
    { id: 17, name: "جينز أزرق Slim Fit", category: "fashion", price: 199, originalPrice: 299, rating: 4.5, image: "👖", description: "Stretch، مقاسات 30-42" },
    { id: 18, name: "جاكيت جلد أسود", category: "fashion", price: 599, originalPrice: 799, rating: 4.7, image: "🧥", description: "جلد طبيعي، تصميم كلاسيكي" },
    { id: 19, name: "فستان سهرة أحمر", category: "fashion", price: 399, originalPrice: 599, rating: 4.4, image: "👗", description: "حرير، مقاسات S-XXL" },
    { id: 20, name: "حذاء رياضي Nike", category: "fashion", price: 299, originalPrice: 399, rating: 4.8, image: "👟", description: "Air Max، ألوان متعددة" },
    { id: 21, name: "حذاء أديداس Originals", category: "fashion", price: 249, originalPrice: 349, rating: 4.6, image: "👟", description: "Stan Smith، أبيض/أسود" },
    { id: 22, name: "وشاح حريري", category: "fashion", price: 89, originalPrice: 129, rating: 4.3, image: "🧣", description: "ألوان متنوعة، 90×90 سم" },
    { id: 23, name: "نظارة شمسية Ray-Ban", category: "fashion", price: 299, rating: 4.7, image: "🕶️", description: "Wayfarer، عدسات UV400" },
    { id: 24, name: "حقيبة ظهر جلد", category: "fashion", price: 199, originalPrice: 299, rating: 4.5, image: "🎒", description: "سعة 25 لتر، مضاد للماء" },
    { id: 25, name: "ساعة رجالي Casio", category: "fashion", price: 199, originalPrice: 299, rating: 4.4, image: "⌚", description: "G-Shock، مقاومة صدمات" },
    { id: 26, name: "حقيبة يد نسائية", category: "fashion", price: 149, originalPrice: 229, rating: 4.3, image: "👜", description: "جلد صناعي، متعددة الاستخدامات" },
    { id: 27, name: "قبعة كاسكيت", category: "fashion", price: 49, originalPrice: 79, rating: 4.2, image: "🧢", description: "قطن، شعار مطرز" },
    { id: 28, name: "جوارب رياضية 5 زجاجات", category: "fashion", price: 59, rating: 4.5, image: "🧦", description: "قطن عضوي، مضاد للروائح" },
    { id: 29, name: "حزام جلد أسود", category: "fashion", price: 79, originalPrice: 119, rating: 4.6, image: "🥾", description: "مقاسات 85-120 سم" },
    { id: 30, name: "بلوزة حرير ناعم", category: "fashion", price: 129, originalPrice: 189, rating: 4.4, image: "👚", description: "حرير طبيعي، ألوان هادئة" },

    // منزليات (10 منتجات)
    { id: 31, name: "مكنسة روبوت Xiaomi", category: "home", price: 999, originalPrice: 1399, rating: 4.6, image: "🤖", description: "ليزر، 5200Pa، 180 دقيقة" },
    { id: 32, name: "غلاية كهربائية", category: "home", price: 89, originalPrice: 129, rating: 4.5, image: "🍵", description: "1.7 لتر، ستيل، أمان تلقائي" },
    { id: 33, name: "مفرمة لحمة", category: "home", price: 199, originalPrice: 299, rating: 4.4, image: "🔪", description: "2000 واط، 3 شفرات" },
    { id: 34, name: "ستايلر شعر Dyson", category: "home", price: 1299, rating: 4.8, image: "💇‍♀️", description: "هواء ساخن، بدون حرارة" },
    { id: 35, name: "ميكروويف 25 لتر", category: "home", price: 399, originalPrice: 499, rating: 4.3, image: "🔥", description: "1000 واط، 8 برامج" },
    { id: 36, name: "مروحة سقف ذكية", category: "home", price: 299, originalPrice: 399, rating: 4.5, image: "🌀", description: "تحكم صوتي، 6 سرعات" },
    { id: 37, name: "أواني طهي ستيل", category: "home", price: 599, rating: 4.7, image: "🍳", description: "10 قطع، مضاد للالتصاق" },
    { id: 38, name: "سرير قطني 160×200", category: "home", price: 899, originalPrice: 1199, rating: 4.6, image: "🛏️", description: "خشب صلب، تخزين سفلي" },
    { id: 39, name: "ثريا LED حديثة", category: "home", price: 299, originalPrice: 449, rating: 4.4, image: "💡", description: "8 أضواء، تحكم عن بعد" },
    { id: 40, name: "سجادة صلاة فاخرة", category: "home", price: 79, originalPrice: 129, rating: 4.8, image: "🕌", description: "حرير، 5 ألوان" },

    // كتب (10 منتجات)
    { id: 41, name: "الإنجيل المقدس", category: "books", price: 49, rating: 4.9, image: "📖", description: "طبعة فاخرة، جلد ناعم" },
    { id: 42, name: "قرآن كريم كبير", category: "books", price: 79, rating: 4.8, image: "📚", description: "خط عثمان طه، تجليد ذهبي" },
    { id: 43, name: "فن الحرب", category: "books", price: 29, originalPrice: 49, rating: 4.7, image: "📖", description: "سون تزو، ترجمة معتمدة" },
    { id: 44, name: "الأبيض الطويل", category: "books", price: 39, rating: 4.6, image: "📘", description: "إرنست همنغواي، رواية كلاسيكية" },
    { id: 45, name: "1984", category: "books", price: 35, originalPrice: 55, rating: 4.8, image: "📖", description: "جورج أورويل، طبعة مميزة" },
    { id: 46, name: "قواعد التفكير", category: "books", price: 59, rating: 4.5, image: "📚", description: "ريتشارد بول، تطوير الذات" },
    { id: 47, name: "القوة في الداخل", category: "books", price: 45, originalPrice: 69, rating: 4.7, image: "📖", description: "توني روبنز، نجاح شخصي" },
    { id: 48, name: "تاريخ الحضارة", category: "books", price: 199, rating: 4.9, image: "📚", description: "12 مجلد، ويل ديورانت" },
    { id: 49, name: "الفنون القتالية", category: "books", price: 89, rating: 4.6, image: "📖", description: "بروس لي، فلسفة الحياة" },
    { id: 50, name: "قاموس المصطلحات", category: "books", price: 129, originalPrice: 179, rating: 4.7, image: "📗", description: "عربي/إنجليزي، 2000 صفحة" }
];

// النصوص متعددة اللغات
const translations = {
    ar: {
        siteTitle: "رمزون",
        searchPlaceholder: "ابحث في رمزون...",
        heroTitle: "اكتشف العروض المذهلة في رمزون",
        heroSubtitle: "إلكترونيات، أزياء، أدوات منزلية وأكثر. توصيل سريع!",
        shopNow: "تسوق الآن",
        sortLabel: "ترتيب حسب:",
        sortName: "الاسم",
        sortPriceLow: "السعر: من الأقل للأعلى",
        sortPriceHigh: "السعر: من الأعلى للأقل",
        sortRating: "التقييم",
        priceLabel: "السعر:",
        cartTitle: "سلة التسوق",
        totalLabel: "الإجمالي:",
        checkout: "إتمام الشراء",
        addToCart: "أضف للسلة",
        remove: "إزالة",
        quantity: "الكمية",
        productAdded: "تم إضافة المنتج للسلة!",
        cartEmpty: "السلة فارغة",
        all: "الكل",
        electronics: "إلكترونيات",
        fashion: "أزياء",
        home: "منزليات",
        books: "كتب"
    },
    en: {
        siteTitle: "Ramzon",
        searchPlaceholder: "Search Ramzon...",
        heroTitle: "Discover Amazing Deals on Ramzon",
        heroSubtitle: "Electronics, Fashion, Home essentials & more. Fast delivery!",
        shopNow: "Shop Now",
        sortLabel: "Sort by:",
        sortName: "Name",
        sortPriceLow: "Price: Low to High",
        sortPriceHigh: "Price: High to Low",
        sortRating: "Rating",
        priceLabel: "Price:",
        cartTitle: "Shopping Cart",
        totalLabel: "Total:",
        checkout: "Proceed to Checkout",
        addToCart: "Add to Cart",
        remove: "Remove",
        quantity: "Qty",
        productAdded: "Product added to cart!",
        cartEmpty: "Your cart is empty",
        all: "All",
        electronics: "Electronics",
        fashion: "Fashion",
        home: "Home",
        books: "Books"
    }
};

// المتغيرات العامة
let products = [...productsData];
let cart = [];
let currentLang = 'ar';
let currentCategory = 'all';
let maxPrice = 100000;

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    setLanguage(currentLang);
    renderCategories();
    renderProducts();
    setupEventListeners();
    updateCartUI();
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    
    const t = translations[lang];
    document.getElementById('siteTitle').textContent = t.siteTitle;
    document.getElementById('searchInput').placeholder = t.searchPlaceholder;
    document.getElementById('heroTitle').textContent = t.heroTitle;
    document.get
