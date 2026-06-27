function updatePreviews(checkboxClass, imageClass, minOpacity) {
// 1. אוספים את כל הצ'קבוקסים והתמונות לתוך מערכים
let checkboxes = document.getElementsByClassName(checkboxClass);
let images = document.getElementsByClassName(imageClass);

// 2. רצים בלולאה על פני המערך (לפי כמות הצ'קבוקסים שיש)
for (let i = 0; i < checkboxes.length; i++) {

    // בודקים את הצ'קבוקס הנוכחי במערך
    if (checkboxes[i].checked === true) {
        images[i].style.opacity = "1";    // מדליקים את התמונה התואמת במערך
    } else {
        images[i].style.opacity = minOpacity;  // מחזירים ל-40% שקיפות
    }

}
}
function userName(){
    document.getElementById('userNameShow').innerHTML = document.getElementById('userName').value;
}