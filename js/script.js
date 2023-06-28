const Twrapper = document.querySelector(".Twrapper");
const Tcarousel = document.querySelector(".Tcarousel");
const firstTcardWidth = Tcarousel.querySelector(".Tcard").offsetWidth;
const arrowBtns = document.querySelectorAll(".Twrapper i");
const TcarouselChildrens = [...Tcarousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of Tcards that can fit in the Tcarousel at once
let TcardPerView = Math.round(Tcarousel.offsetWidth / firstTcardWidth);

// Insert copies of the last few Tcards to beginning of Tcarousel for infinite scrolling
TcarouselChildrens.slice(-TcardPerView).reverse().forEach(Tcard => {
    Tcarousel.insertAdjacentHTML("afterbegin", Tcard.outerHTML);
});

// Insert copies of the first few Tcards to end of Tcarousel for infinite scrolling
TcarouselChildrens.slice(0, TcardPerView).forEach(Tcard => {
    Tcarousel.insertAdjacentHTML("beforeend", Tcard.outerHTML);
});

// Scroll the Tcarousel at appropriate postition to hide first few duplicate Tcards on Firefox
Tcarousel.classList.add("no-transition");
Tcarousel.scrollLeft = Tcarousel.offsetWidth;
Tcarousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the Tcarousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        Tcarousel.scrollLeft += btn.id == "left" ? -firstTcardWidth : firstTcardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    Tcarousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the Tcarousel
    startX = e.pageX;
    startScrollLeft = Tcarousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the Tcarousel based on the cursor movement
    Tcarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    Tcarousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the Tcarousel is at the beginning, scroll to the end
    if(Tcarousel.scrollLeft === 0) {
        Tcarousel.classList.add("no-transition");
        Tcarousel.scrollLeft = Tcarousel.scrollWidth - (2 * Tcarousel.offsetWidth);
        Tcarousel.classList.remove("no-transition");
    }
    // If the Tcarousel is at the end, scroll to the beginning
    else if(Math.ceil(Tcarousel.scrollLeft) === Tcarousel.scrollWidth - Tcarousel.offsetWidth) {
        console.log("You've reached the right end");
        Tcarousel.classList.add("no-transition");
        Tcarousel.scrollLeft = Tcarousel.offsetWidth;
        Tcarousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over Tcarousel
    clearTimeout(timeoutId);
    if(!Twrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the Tcarousel after every 2500 ms
    timeoutId = setTimeout(() => Tcarousel.scrollLeft += firstTcardWidth, 2500);
}
autoPlay();

Tcarousel.addEventListener("mousedown", dragStart);
Tcarousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
Tcarousel.addEventListener("scroll", infiniteScroll);
Twrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
Twrapper.addEventListener("mouseleave", autoPlay);


let x = document.querySelector(".left");
let y = document.querySelector(".right");
let a = document.querySelector(".first");
let b = document.querySelector(".second");


function showLeft(){
        x.style.backgroundColor = '#740909';
        x.style.color = '#fff';
        y.style.backgroundColor = 'transparent';
        y.style.color = '#000';
        a.style.display = 'block';
        b.style.display = 'none';
}

function showRight(){
    y.style.backgroundColor = '#740909';
    y.style.color = '#fff';
    x.style.backgroundColor = 'transparent';
    x.style.color = '#000';
    b.style.display = 'block';
    a.style.display = 'none';	
}


function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll', scrollValue);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.getElementById("button1").onclick = function () {
    window.open('https://m.facebook.com/story.php?story_fbid=pfbid02zvFrAxXzkfwSmfWPp82Uvze1G1zRZK2R6MhPwPufZ4Hj3D76CRbYYe5YEqburxRWl&id=100004292468435&mibextid=Nif5oz');
};

document.getElementById("button2").onclick = function () {
    window.open('https://m.facebook.com/story.php?story_fbid=pfbid0quoBjrRShtRUBj2KvmB1ypahdMn2BFvujFbtQndZ2EbF6CE17cCP3bCRKAm9X6QGl&id=100063974386349&mibextid=Nif5oz');
};


document.getElementById("button3").onclick = function () {
    window.open('https://m.facebook.com/story.php?story_fbid=pfbid02B5ZCh1d9WRfrrdLuzcrkXiq5NLJXN98j9ZQwFHVTuHVaaLRrpHEsXmhbi4uojfH7l&id=100063974386349&mibextid=Nif5oz');
};

document.getElementById("button4").onclick = function () {
    window.open('https://m.facebook.com/story.php?story_fbid=pfbid0FZUdEanvTXrnY5PJ55k19VbcfZ6UfcoT7tuHGqe1MDWGgqk6hoSSSeXmwkTjyh4El&id=100063974386349&mibextid=Nif5oz');
};

var navLinks = document.getElementById("navlinks");
	
        function showMenu(){
            navLinks.style.left = "0" ;
    }

        function hideMenu(){
        navLinks.style.left = "-250px" ;
    }

    let on = document.querySelector(".on");
    let off = document.querySelector(".off");
    let vid = document.querySelector(".vid");
    let pic = document.querySelector(".img-box");

    function changeImage(){
        vid.classList.toggle("active");
        if(vid.classList.contains("active")){
            on.style.display = 'none';
            off.style.display = 'block';
            vid.style.display = 'none';
            pic.style.display = 'block';
        }else{
            on.style.display = 'block';
            off.style.display = 'none';
            vid.style.display = 'block';
            pic.style.display = 'none';
        }
    }

    document.querySelector(".description2").onclick = function () {
        window.open('https://m.facebook.com/story.php?story_fbid=pfbid02jNBeFZuHJDegrtx7ubQxeLYyTddHxtKRpR6vLePT4LGxtuC1Dbu6JtUpuiwNZtaVl&id=100063974386349&mibextid=Nif5oz');
    };
    
    document.querySelector("#item-1").onclick = function () {
        window.open('https://m.facebook.com/story.php?story_fbid=pfbid02JmMXLwvszGbhJuBU3WNpLtaPr3gkrKSf1XCaaH8n68PzT2dszEbVqr7Rqs6YQyVul&id=100878904973485&mibextid=Nif5oz');
      };
    
      document.querySelector("#item-2").onclick = function () {
        window.open('https://m.facebook.com/story.php?story_fbid=pfbid02jNBeFZuHJDegrtx7ubQxeLYyTddHxtKRpR6vLePT4LGxtuC1Dbu6JtUpuiwNZtaVl&id=100063974386349&mibextid=Nif5oz');
      };
    
      document.querySelector("#item-3").onclick = function () {
        window.open('https://m.facebook.com/story.php?story_fbid=pfbid02w8xyYeWFU2zyYwVYhuAqDvWxC9FdXuZYpRJu8kUwpoSn1aRKun4VJ4UqctnzzTFEl&id=100878904973485&mibextid=Nif5oz');
      };
    
      document.querySelector("#item-4").onclick = function () {
        window.open('https://m.facebook.com/story.php?story_fbid=pfbid0s8ttZCbL7S8V113N6j78z55NAMZRHWM1NvcxFB75H2gb7hkjXjKroFZ3H3HWXVexl&id=100878904973485&mibextid=Nif5oz');
      };

      document.querySelector(".PButton").onclick = function () {
        window.open('https://www.facebook.com/hemenes.bagsic?mibextid=ZbWKwL');
      };