// Set up nav popup
const nav = document.querySelector('.nav');
const contactMe = document.querySelector('.contact-me')
const pageFooter = document.querySelector('#footer')
const myButton = document.querySelector('#returntotopbtn')

let previousScroll = window.scrollY;

// Hide the nav when user scrolls past a page height
window.addEventListener("scroll", function(){ 
    let currentScroll = window.scrollY;

    if (previousScroll > currentScroll){
        nav.classList.remove('scroll'); // Scrolling up, show the navigation
    } else {
        nav.classList.add('scroll');  //  Scrolling down, hide the navigation
    } 

    previousScroll = currentScroll;
})

// Redisplay nav when user scrolls down AND hovers around the top area

// window.addEventListener('mousemove', (e) => {
//     let topAreaHeight = 20;
//     let currentScroll = window.scrollY;
    
// })

// Prevent default for Contact Me link; add effects to footer

contactMe.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = `#${pageFooter.id}`;

    pageFooter.style.boxShadow = "10px 20px 30px #ffffed";
    pageFooter.style.borderRadius = "15px";
    
    setTimeout(() => {
        pageFooter.style.boxShadow = "none";
    }, 1000);
});

// Add return to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




