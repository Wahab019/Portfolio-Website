// GO TO TOP

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})



// ABOUT SECTION

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// TOGGLE

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


// GOOGLE SHEET

const scriptURL = 'https://script.google.com/macros/s/AKfycbx7jTJX0CLR671Cxvq2XgmhU1e5ddEKNZGOyBdsHsuR41Dmg8yYTbcsqcWc5JeBEnFugw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML = "Message sent successfully"
    setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})


