document.addEventListener("scroll", () => {
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    if (atBottom) {
        document.body.classList.add("scrolled-to-bottom");
    } else {
        document.body.classList.remove("scrolled-to-bottom");
    }
});
document.querySelectorAll('.borg-container img').forEach(el => {
    const randomX = Math.random() * 120 - 20;  // prosent
    const randomY = Math.random() * 10 - 10;  // overlapp oppover
    el.style.left = randomX + "%";
    el.style.bottom = randomY + "px";
})
// Massive borgman climbs after delay
setTimeout(() => {
    document.querySelector('.borgman-big').style.bottom = "0px";
}, 4000); // 4 seconds delay