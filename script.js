document.addEventListener('DOMContentLoaded', () => {  // هذا الحدث بضمن إنو الجافاسكربت يشتغل بعد ما الصفحة كلها تتحمّل


    // --- 1. Dark Mode Toggle (Home Page) ---
    // الموقع: يتم تطبيقه عبر الموقع بالكامل عند الضغط على الزر في الهيدر
    const initDarkMode = () => {      // دالة مسؤولة عن تفعيل زر الدارك مود

        const navBar = document.querySelector('.nav-bar');          // جلب شريط التنقل (الناف بار)

        const themeBtn = document.createElement('button');           // إنشاء زر جديد باستخدام JavaScript

        themeBtn.innerText = "Dark Mode";           // النص اللي رح يظهر على الزر

        themeBtn.className = "nav-button";          // إضافة كلاس للزر عشان التصميم من CSS

        navBar.appendChild(themeBtn);          // إضافة الزر داخل الناف بار


        themeBtn.addEventListener('click', () => {           // عند الضغط على الزر

            document.body.classList.toggle('dark-mode');               // إضافة أو إزالة كلاس dark-mode من الـ body

            
            // تحديث الألوان يدوياً لضمان التوافق مع المتطلبات
            if (document.body.classList.contains('dark-mode')) {               // إذا كان الدارك مود مفعّل

                document.body.style.backgroundColor = "#2D2D2D";                  // تغيير الخلفية للون غامق

                document.body.style.color = "#F9F5F0";                   // تغيير لون النص للون فاتح

            } else {                     // إذا ألغينا الدارك مود نرجع الإعدادات الافتراضية

                document.body.style.backgroundColor = ""; 
                document.body.style.color = "";
            }
        });
    };

    // --- 2. Dynamic Product Filter (Menu Page) ---
    // الموقع: يعمل في صفحة menu.html لتصفية المنتجات
    const initProductFilter = () => {       // دالة لتصفية المنتجات حسب الفئة

        const filterButtons = document.querySelectorAll('.filter-buttons button');          // جلب كل أزرار الفلترة

        const products = document.querySelectorAll('.product-menu article');          // جلب كل المنتجات

        // عند الضغط على أي زر
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.innerText.trim();            // أخذ اسم الفئة من نص الزر
                products.forEach(product => {
                    const productInfo = product.querySelector('p').innerText;                       // قراءة معلومات المنتج

                    if (category === 'All' || productInfo.includes(category)) {                       // إذا الفئة All أو المنتج تابع للفئة

                        product.style.display = 'block';
                    } else {                         // إخفاء المنتج

                        product.style.display = 'none';
                    }
                });
            });
        });
    };

    // --- 3. Advanced Form Validation (Contact Page) ---
    // الموقع: يعمل في صفحة contact.html للتحقق من نموذج البيانات
    const initFormValidation = () => {      // دالة التحقق من نموذج التواصل

        const contactForm = document.getElementById('contactForm');          // جلب الفورم باستخدام id

        if (!contactForm) return;          // إذا الفورم مش موجود نوقف التنفيذ

        //  لما بدي ارسل الفورم
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();             // منع إعادة تحميل الصفحة

                        // قراءة القيم المدخلة

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
                        // تعبير منتظم للتحقق من الإيميل

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // منع الإرسال إذا كانت الحقول فارغة
            if (!name || !email) {
                alert("Please fill in all fields.");
                return;
            }

            // التحقق من صيغة  الايميل 
            if (!emailRegex.test(email)) {
                alert("Invalid email format.");
                return;
            }

            // رسالة النجاح عند التحقق الصحيح
            alert("Success! Your message has been sent.");
            contactForm.reset();       // تفريغ الحقول

        });
    };

    // --- 4. Interactive UI Elements: Back to Top (Home Page) ---
    // الموقع: يعمل في الصفحة الرئيسية عند الضغط على زر العودة للأعلى
    const initBackToTop = () => {      // دالة زر الرجوع للأعلى
        // جلب الزر
        const backToTopBtn = document.getElementById('backToTop');
        if (!backToTopBtn) return;   // إذا الزر مش موجود نوقف

                //      عند الضغط 
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });             // الرجوع للأعلى بحركة ناعمة

        });

        window.addEventListener('scroll', () => {  // إظهار الزر عند النزول
            backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";              // إذا نزلنا أكتر من 300px يظهر الزر

        });
    };

    // تشغيل كل الوظائف عند تحميل الصفحة

    initDarkMode();
    initProductFilter();
    initFormValidation();
    initBackToTop();
});