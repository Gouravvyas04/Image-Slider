let scrollContainer = document.querySelector(".container");
let backBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let scrollSpeed = 5; // Adjust scroll speed for smoother experience
let scrollInterval;

// Function to start auto-scrolling
function startScrolling(direction) {
    stopScrolling(); // Stop any existing scrolling to avoid conflicts
    scrollInterval = setInterval(() => {
        scrollContainer.scrollLeft += direction * scrollSpeed;
    }, 10); // Controls how often it scrolls (lower = smoother)
}

// Function to stop auto-scrolling
function stopScrolling() {
    clearInterval(scrollInterval);
}

// Mouse scroll with wheel
scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

// Smooth scroll on button click
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

// Auto-scroll on mouse hover at left and right corners
backBtn.addEventListener("mouseenter", () => startScrolling(-1)); // Scroll left
backBtn.addEventListener("mouseleave", stopScrolling);

nextBtn.addEventListener("mouseenter", () => startScrolling(1)); // Scroll right
nextBtn.addEventListener("mouseleave", stopScrolling);
