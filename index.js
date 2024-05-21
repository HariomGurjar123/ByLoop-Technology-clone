
AOS.init({
    offset:170,
    duretion:3000,
    
    once:true,
    delay:350,
    
});

// nav bar
function navHandler() {
    $(window).scroll(function() {
        if($(window).scrollTop()) {
            $("nav").addClass("black")
        }
        else{
            $("nav").removeClass("black")
        }
    });    
}
navHandler()

// search bar

    const searchBtn = document.getElementById('search-icon')
    const searchContainer = document.getElementById('search-container')
    const closeBtn = document.getElementById('closeButton-SB')

    function searchHandler(){

        searchBtn.addEventListener('click',function(){
            
                searchContainer.style.display = 'block'
                closeBtn.style.display="block"
                
        })
        closeBtn.addEventListener('click',function(){
            searchContainer.style.display="none"
            closeBtn.style.display="none"
            
        })
    }
    searchHandler()

//modal open

const open_Modal=document.getElementById('modal-Opner')
const modal=document.getElementById('modal')
const close_Modal=document.getElementById('closeButton-modal')

function modalHandler(){
open_Modal.addEventListener('click',function(){
    modal.style.display="block"
    
})
close_Modal.addEventListener('click',function(){
    modal.style.display="none"
})
}

modalHandler()


// for img slider

// script.js
let currentSlideIndex = 0;
const slideInterval = 3000; // Interval time in milliseconds

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-content');
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length -0;
    } else {
        currentSlideIndex = index;
    }

    const offset = -currentSlideIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;

    // Update index display on each slide
    const slideIndexes = document.querySelectorAll('.slide-index');
    slideIndexes.forEach((slideIndex, idx) => {
        slideIndex.innerText = `${idx + 1} / ${slides.length}`;
    });
}

function moveSlide(step) {
    showSlide(currentSlideIndex + step);
}

function currentSlide(index) {
    showSlide(index);
}

// Initialize the carousel
showSlide(currentSlideIndex);

// Set up automatic slide change
setInterval(() => {
    moveSlide(1);
}, slideInterval);



