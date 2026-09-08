// 1. تحديد العناصر من الصفحة (DOM)
var input = document.querySelector(".input");
var submit = document.querySelector(".add");
var tasksDiv = document.querySelector(".tasks");

// مصفوفة لتخزين نصوص المهام فقط
var arrayOfTasks = [];

// 2. التحقق من مساحة التخزين المحلية وجلب البيانات (BOM)
// سنقوم بجلب النص، وتقطيعه إلى مصفوفة باستخدام split
var storedData = window.localStorage.getItem("tasks");

if (storedData) {
    // تقطيع النص المخزن ليصبح مصفوفة بناءً على الفاصل "|"
    // مثال: "مهمة1|مهمة2" ستصبح ["مهمة1", "مهمة2"]
    arrayOfTasks = storedData.split("|");

    // عرض المهام في الصفحة
    addElementsToPage();
}

// 3. حدث النقر على زر الإضافة
submit.onclick = function (e) {
    e.preventDefault();

    // التأكد من أن الحقل ليس فارغاً
    if (input.value !== "") {
        // إضافة النص مباشرة للمصفوفة
        arrayOfTasks.push(input.value);

        // تحديث الصفحة والتخزين
        addElementsToPage();
        updateLocalStorage();

        // تفريغ الحقل
        input.value = "";
    }
};

// 4. دالة إنشاء العناصر في الصفحة (DOM)
function addElementsToPage() {
    // تفريغ الحاوية أولاً
    tasksDiv.innerHTML = "";

    // المرور على المصفوفة لإنشاء المهام
    for (var i = 0; i < arrayOfTasks.length; i++) {
        // إنشاء الديف الخاص بالمهمة
        var div = document.createElement("div");
        div.className = "task";

        // سنخزن رقم الـ (index) الخاص بالمهمة لنستخدمه عند الحذف
        div.setAttribute("data-index", i);
        div.appendChild(document.createTextNode(arrayOfTasks[i]));

        // إنشاء زر الحذف
        var span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));

        // إضافة الزر للديف، ثم الديف للحاوية
        div.appendChild(span);
        tasksDiv.appendChild(div);
    }
}

// 5. دالة تحديث التخزين المحلي (BOM)
function updateLocalStorage() {
    // دمج المصفوفة في نص واحد يفصل بين عناصره علامة "|"
    // مثال: ["مهمة1", "مهمة2"] ستصبح "مهمة1|مهمة2"
    var joinedTasks = arrayOfTasks.join("|");
    window.localStorage.setItem("tasks", joinedTasks);
}

// 6. حدث النقر على الحذف باستخدام (DOM)
tasksDiv.onclick = function (e) {
    // التأكد من أن العنصر الذي تم النقر عليه هو زر الحذف
    if (e.target.className === "del") {

        // جلب رقم الإندكس (index) الخاص بالمهمة
        var taskIndex = e.target.parentElement.getAttribute("data-index");

        // عمل مصفوفة جديدة مؤقتة لتخطي العنصر المحذوف
        var newTasks = [];
        for (var i = 0; i < arrayOfTasks.length; i++) {
            // إضافة كل المهام للمصفوفة الجديدة ما عدا المهمة التي تم النقر عليها
            if (i != taskIndex) {
                newTasks.push(arrayOfTasks[i]);
            }
        }

        // استبدال المصفوفة القديمة بالجديدة
        arrayOfTasks = newTasks;

        // إذا أصبحت المصفوفة فارغة تماماً، نحذف المفتاح من التخزين لتجنب تخزين نص فارغ
        if (arrayOfTasks.length === 0) {
            window.localStorage.removeItem("tasks");
        } else {
            updateLocalStorage();
        }

        // إعادة رسم العناصر في الصفحة لتحديث أرقام الـ (index) الجديدة
        addElementsToPage();
    }
};