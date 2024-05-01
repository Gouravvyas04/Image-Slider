let scrollcontainer = document.querySelector(".container");
let backbtn = document.querySelector(".prev");
let nextbtn = document.querySelector(".next");

scrollcontainer.addEventListener("wheel", (event) =>
{
    event.preventDefault();
    scrollcontainer.scrollLeft += event.deltaY;
    scrollcontainer.style.scrollBehavior = "auto";
});

backbtn.addEventListener("click", () =>
{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 900;
});

nextbtn.addEventListener("click", () =>
{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 900;
})