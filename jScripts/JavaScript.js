function updatePreviews(checkboxClass, imageClass , minOpacity, maxAllowed) {
// 1. אוספים את כל הצ'קבוקסים והתמונות לתוך מערכים
    let checkboxes = document.getElementsByClassName(checkboxClass);
    let images = document.getElementsByClassName(imageClass);
    let chosen = 0
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
    checkButtonStatus()
}
function checkButtonStatus() {
    const allCheeses = document.getElementsByClassName('cheese-check');
    let totalCheeses = 0;
    for (let i = 0; i < allCheeses.length; i++) {
        if (allCheeses[i].checked) totalCheeses++;
    }
    
    let allCrackers = document.getElementsByClassName('cracker-check');
    let totalCrackers = 0;
    for (let i = 0; i < allCrackers.length; i++) {
        if (allCrackers[i].checked) totalCrackers++;
    }
    
    const currentName = document.getElementById('userName').value;
    const orderBtn = document.getElementById('orderButton');
    
    orderBtn.disabled = !(totalCheeses === 2 && totalCrackers === 3 && currentName.length > 0);
}
    
function userName(){
    document.getElementById('userNameShow').innerHTML = document.getElementById('userName').value;
    checkButtonStatus()
}
// פונקציה שפותחת את החלונית
function showSummary() {
    document.getElementById("overlay").style.display = "flex";
    let totalPrice = 107;
        function getItemsSummary(className) {
            const elements = document.getElementsByClassName(className);
            let summaryText = "";
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].checked) {
                summaryText += "○ " + elements[i].labels[0].innerText.split("+")[0] + "<br>";
                totalPrice += parseInt(elements[i].value);
                }
            }
            return summaryText;
        }
        // איסוף הנתונים בצורה נקייה
        const cheeseSummary = getItemsSummary('cheese-check');
        const crackerSummary = getItemsSummary('cracker-check');
   
    const wineRadio = document.getElementsByClassName("wine-check");
    let wineSummary = "ללא יין";
    for (let i = 0; i < wineRadio.length; i++) {
        if (wineRadio[i].checked === true) {
            wineSummary = wineRadio[i].labels[0].innerText.split("+")[0];
            totalPrice += parseInt(wineRadio[i].value);
        }
    } 
    document.getElementById('orderDetails').innerHTML= "<strong>הגבינות:</strong> <br/> " + cheeseSummary; 
    document.getElementById('orderDetails').innerHTML += "<strong>הקרקרים:</strong> <br/> " + crackerSummary;
    document.getElementById('orderDetails').innerHTML += "<strong>היין שנבחר: </strong>" + wineSummary;
    document.getElementById('userNameOverlay').innerHTML = "סיכום ההזמנה של " + document.getElementById('userName').value;
    document.getElementById('extraText').innerHTML = "<strong> ברכה/בקשות מיוחדות: </strong>" + document.getElementById('userFreeText').value;
    document.getElementById('finalPrice').innerHTML = "<strong> מחיר הזמנה סופי: </strong>" + totalPrice.toString() + "₪";  
}

// פונקציה שסוגרת את החלונית
function closeModal() {
    document.getElementById("overlay").style.display = "none";
}