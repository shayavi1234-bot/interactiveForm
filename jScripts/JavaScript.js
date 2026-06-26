// פונקציה שמקבלת את ה-ID של התיבה שנלחצה כרגע
function checkLimit(clickedId) {

    // 1. מציאת הכמות המקסימלית המותרת לפי כפתור הרדיו המסומן
    let maxAllowed = 0;
    if (document.getElementById('p1').checked) {
        maxAllowed = 1;
    }
   else if (document.getElementById('p2').checked){
        maxAllowed = 2;
    }
   else if (document.getElementById('p3').checked) {
        maxAllowed = 3;
    }
   else if (document.getElementById('p4').checked) {
        maxAllowed = 4;
    }
    // 2. ספירה ידנית של התיבות שמסומנות כרגע
    let checkedCount = 0;
    if (document.getElementById('c1').checked) checkedCount++;
    if (document.getElementById('c2').checked) checkedCount++;
    if (document.getElementById('c3').checked) checkedCount++;
    if (document.getElementById('c4').checked) checkedCount++;
    if (document.getElementById('c5').checked) checkedCount++;
    if (document.getElementById('c6').checked) checkedCount++;
    if (document.getElementById('c7').checked) checkedCount++;

    // 3. בדיקה האם המשתמש עבר את הכמות המותרת
    if (checkedCount > maxAllowed) {
        alert("אופס! בחרת יותר סוגי קרקרים מכמות המארזים שסימנת.");
        // ביטול הסימון של התיבה האחרונה שהמשתמש ניסה לסמן
        document.getElementById(clickedId).checked = false;
    }
}
function userName(){
    document.getElementById('userNameShow').innerHTML = document.getElementById('userName').value;
}