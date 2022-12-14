/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sectionsList = document.querySelectorAll("section");
const navUl = document.getElementById("navbar__list");

let scrollWY = window.pageYOffset;
const btnTop = document.querySelector(".goToUp");
const collapsibleSec = document.querySelector(".collapsible");
const contentsec = document.querySelector(".contentsec");
const menuList = document.querySelector(".menu");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// function to create Li Element in ul (navbar)
function createLiElement(textValue){
    const li= document.createElement('li');
    const a= document.createElement('a');
    a.setAttribute('class','menu__link');
    a.setAttribute('href',`#${textValue}`);
    a.setAttribute('data-nav',textValue);
    a.textContent=textValue;
    li.appendChild(a);
    navUl.appendChild(li);
  
}
// Build menu 
sectionsList.forEach(section => {
    const text = section.getAttribute('id');
    createLiElement(text)
     
 });
 const linkss = document.querySelectorAll("a");


// Add class 'active' to section when near top of viewport

 
   
    
    function activeClass(){
    sectionsList.forEach(section => {  
        //console.log(section.getBoundingClientRect().top)
        section.classList.remove("your-active-class");
        if( section.getBoundingClientRect().top>= -500&&  section.getBoundingClientRect().top < 150){
        section.classList.add("your-active-class");
        for (let i = 0; i < linkss.length; i++) {
            linkss[i].classList.remove("active-class");
            if(linkss[i].getAttribute('data-nav')=== section.getAttribute('id')){
                linkss[i].classList.add("active-class");
        }
            else{
                linkss[i].classList.remove("active-class");
            }
         } }
     });
     
    }
    
 

// Scroll to anchor ID using scrollTO event


   
    linkss.forEach(linkk => {  
        linkk.addEventListener('click',function(event){
            event.preventDefault();
           // console.log(event.target.dataset.nav);
           document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({behavior: "smooth"});
           window.location.href=  `#${event.target.dataset.nav}` ;     
        })
    });


/**
 * End Main Functions
 * Begin Events
 * 
*/


// Scroll to section on link click
// scroll functions
// distinguish the active section
// hide navigation bar
// top button

setTimeout(() => {
    window.addEventListener('scroll',() => {    
        activeClass();
        NavBtn();    
    })
  }, "0")
// function hide fixed navigation bar while not scrolling and add top button 

function NavBtn(){
if (scrollWY < window.pageYOffset){
    navUl.style.display = "none";
    //console.log('hide')
    btnTop.style.display= "block";
}else{
    navUl.style.display = "flex";
    //console.log('no') 
    btnTop.style.display= "none";
    
}

scrollWY = window.pageYOffset;

} 
//  go top 
btnTop.addEventListener('click',scrollToTop);
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}



//collapsible section

collapsibleSec.addEventListener('click',collapsiblefun);
function collapsiblefun() {
    
    if (contentsec.style.display === "block") {
        contentsec.style.display  = "none";
      } else {
        contentsec.style.display  = "block";
      }
}
/////// responsive (Media Queries)
// responsive navbar 
let x = window.matchMedia("(max-width: 700px)")

  x.addEventListener('change', madiaQ) 
  window.addEventListener('load', madiaQ) 
  function madiaQ(){
    if (x.matches) { 
        menuList.style.display  = "block";
        navUl.style.display  = "none";
        
      } else {
        menuList.style.display  = "none";
        navUl.style.display  = "flex";
        navUl.style.flexDirection ='row ';
        
      }
  }
  menuList.onclick=function() {
    if (navUl.style.display  === "flex"){
        navUl.style.display  = "none";
    }else{
        navUl.style.display  = "flex";
        navUl.style.flexDirection ='column ';
        navUl.style.textAlign = "center";
    }
    
        
  }
