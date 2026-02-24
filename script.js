// الوصول إلى العناصر باستخدام الـ ID اللي عرفناه في الـ HTML
const attentionNode = document.getElementById("attention-node");
const attentionMenu = document.getElementById("attention-menu");

// إضافة "مراقب" للأحداث ليعرف متى يتم الضغط على الزر
attentionNode.addEventListener("click", function() {
    
    // فحص حالة القائمة حالياً
    if (attentionMenu.style.display === "block") {
        // إذا كانت ظاهرة، قم بإخفائها
        attentionMenu.style.display = "none";
    } else {
        // إذا كانت مخفية، قم بإظهارها
        attentionMenu.style.display = "block";
    }
    
});

// ملاحظة: هذا الكود يجعل القائمة تظهر وتختفي عند كل ضغطة
