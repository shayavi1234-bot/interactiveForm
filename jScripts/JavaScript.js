function updatePreviews(checkboxClass, imageClass , minOpacity, maxAllowed) {
// 1. אוספים את כל הצ'קבוקסים והתמונות לתוך מערכים
    let checkboxes = document.getElementsByClassName(checkboxClass);
    let images = document.getElementsByClassName(imageClass);
    let chosen = 0
// 2. רצים בלולאה על פני המערך (לפי כמות הצ'קבוקסים שיש)
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            chosen++;
        }
    }
    if (chosen > maxAllowed) {
        // מוצאים את הצ'קבוקס הספציפי שהרגע נלחץ והקפיץ את החריגה
        // איך יודעים? זה הצ'קבוקס שמסומן ב-V אבל התמונה שלו עדיין לא נחשפה (האופסיטי שלה לא 1)
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked === true && images[i].style.opacity !== "1") {
                checkboxes[i].checked = false; // מכבים לו את ה-V
            }
        }
        alert("ניתן לבחור עד " + maxAllowed + " פריטים בלבד בקבוצה זו!");
    }
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
                images[i].style.opacity = "1";    // מדליקים את התמונה התואמת במערך
                images[i].style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.15))';
        } else {
                images[i].style.opacity = minOpacity;  // מחזירים ל-40% שקיפות
                images[i].style.filter = "none";
        }
    }
}
function userName(){
    document.getElementById('userNameShow').innerHTML = document.getElementById('userName').value;
}
// פונקציה שפותחת את החלונית
function showSummary() {
    // תופס את הרקע של החלונית ומציג אותו על המסך
    document.getElementById("orderModal").style.display = "flex";
    let cheeseCheckboxes = document.getElementsByClassName('cheese-check');
    let cheeseSummary = "";
    for (let i = 0; i < cheeseCheckboxes.length; i++){
        if (cheeseCheckboxes[i].checked === true) {
            cheeseSummary += cheeseCheckboxes[i].labels[0].innerText + "<br>";
        }
    }
    document.getElementById('modalOrderDetails').innerHTML= "הגבינות שנבחרו הן:  <br/> " + cheeseSummary;
    let crackerCheckboxes = document.getElementsByClassName("cracker-check");
    let crackerSummary = "";
    for (let i = 0; i < crackerCheckboxes.length; i++){
        if (crackerCheckboxes[i].checked === true) {
            crackerSummary += crackerCheckboxes[i].labels[0].innerText + "</br>";
        }
    }   
    document.getElementById('modalOrderDetails').innerHTML += "הקרקרים שנבחרו הם:  <br/> " + crackerSummary;
    let wineRadio = document.getElementsByClassName("wine-check");
    let wineSummary = "ללא יין";
    for (let i = 0; i < wineRadio.length; i++) {
        if (wineRadio[i].checked === true) {
            wineSummary = wineRadio[i].labels[0].innerText;
        }
    }
    document.getElementById('modalOrderDetails').innerHTML += "היין שנבחר:  <br/> " + wineSummary;
    document.getElementById('userNameOverlay').innerHTML = document.getElementById('userName').value;

}

// פונקציה שסוגרת את החלונית
function closeModal() {
    // מחזירה את החלונית למצב מוסתר
    document.getElementById("orderModal").style.display = "none";
}