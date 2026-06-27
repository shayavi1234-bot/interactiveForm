function updatePreviews(checkboxClass, imageClass, minOpacity) {
// 1. אוספים את כל הצ'קבוקסים והתמונות לתוך מערכים
let checkboxes = document.getElementsByClassName(checkboxClass);
let images = document.getElementsByClassName(imageClass);

// 2. רצים בלולאה על פני המערך (לפי כמות הצ'קבוקסים שיש)
for (let i = 0; i < checkboxes.length; i++) {
    // בודקים את הצ'קבוקס הנוכחי במערך
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