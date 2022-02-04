//active navbar
let nav = document.querySelector(".navigation_wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop >20){
        nav.classList.add("scroll_on");
    }
    else{
        nav.classList.remove("scroll_on");
    }
}
//nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach((a)=>{
    a.addEventListener('click',()=>{
        navCollapse.classList.remove("show");
    })
})

// counter design
document.addEventListener('DOMContentLoaded',()=>{
    function counter(id, start, end){
        let obj = document.getElementById(id),
        current = start,
        increment = end > start ? 10 : -1,
        timer = setInterval(()=>{
            current += increment;
            obj.innerText = current;
            if(current === end){
                clearInterval(timer)
            } 
        },10);
    }
    counter("count1", 0, 1280);
    counter("count2", 0, 2000);
    counter("count3", 0, 2500);
    counter("count4", 0, 4000);
})

//getting date

let date = document.querySelector(".date");
let d = new Date().getFullYear();
date.textContent = d;