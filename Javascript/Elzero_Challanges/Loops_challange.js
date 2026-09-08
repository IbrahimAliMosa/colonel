let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// 1. استهداف العنصر الحاوي في الصفحة
const appContainer = document.getElementById("app");

// 2. إيجاد عدد المديرين الفعليين
let adminsCount = 0;
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") break;
    adminsCount++;
}

// 3. إنشاء وعرض عدد المديرين
const countDiv = document.createElement("div");
countDiv.innerHTML = `<h2>We Have ${adminsCount} Admins</h2><hr>`;
appContainer.appendChild(countDiv); // إضافة العنصر إلى الصفحة

// 4. المرور على المديرين لإنشاء فرق العمل
for (let i = 0; i < adminsCount; i++) {
    // إنشاء حاوية (div) لكل فريق عمل
    const teamSection = document.createElement("div");
    teamSection.style.marginBottom = "20px"; // بعض التنسيقات البسيطة

    // إضافة اسم المدير
    const adminTitle = document.createElement("h3");
    adminTitle.textContent = `The Admin For Team ${i + 1} Is ${myAdmins[i]}`;
    teamSection.appendChild(adminTitle);

    // إضافة عنوان قسم الموظفين
    const teamSubtitle = document.createElement("h4");
    teamSubtitle.textContent = "Team Members:";
    teamSection.appendChild(teamSubtitle);

    let counter = 1;

    // المرور على الموظفين ومطابقة الحرف الأول
    for (let j = 0; j < myEmployees.length; j++) {
        if (myAdmins[i][0] === myEmployees[j][0]) {
            // إنشاء عنصر (p) لكل موظف مطابق
            const employeeItem = document.createElement("p");
            employeeItem.textContent = `- ${counter} ${myEmployees[j]}`;
            teamSection.appendChild(employeeItem);
            counter++;
        }
    }

    // إضافة خط فاصل بعد كل فريق
    const separator = document.createElement("hr");
    teamSection.appendChild(separator);

    // أخيراً، إضافة فريق العمل بالكامل إلى الحاوية الرئيسية في الصفحة
    appContainer.appendChild(teamSection);
}