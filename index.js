const bgContainer = document.getElementById("bgContainer")
const hamburgerMenu = document.getElementById("hamburgerMenu")
const mobileNavContainer = document.getElementById("mobileNavContainer")

let isShowMobileNavContainer = false

function menuClick () {
  
    if(!isShowMobileNavContainer){
        document.querySelector(".mobile-nav-container").style.display = "block"
        isShowMobileNavContainer = true
    }
}
function closeClick() {
    console.log("close click")
    if(isShowMobileNavContainer){
        document.querySelector(".mobile-nav-container").style.display = "none"
        isShowMobileNavContainer = false
    }
}


