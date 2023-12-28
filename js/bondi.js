let changeImag = document.querySelectorAll(".change-image span");
changeImag.forEach(span => {
    span.addEventListener("click" , (e) => {
        let land = document.querySelector(".landing");
        let arrayImgs = ['04.jpg','05.jpg','07.jpg','09.jpg','10.jpg'];
        let randomNum = Math.floor(Math.random() * arrayImgs.length);
        if(e.target.className === "right") {
            land.style.backgroundImage = 'url("../imgs/' + arrayImgs[randomNum] +'")';
            // console.log("Yes");
        } else {
            land.style.backgroundImage = 'url("../imgs/' + arrayImgs[randomNum] +'")';
            // console.log("No");
        }
        
    })
})

let navLink = document.querySelectorAll(".navbar-nav a");
navLink.forEach(ele => {
    ele.addEventListener("click" , (e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        })
    })
})



