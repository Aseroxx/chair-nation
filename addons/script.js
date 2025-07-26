
document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("catalog");
    const overlay = document.getElementById("toggle");
    const closeBtn = document.getElementById("close-btn");
    
    const contactBtn = document.getElementById("contact-btn");
    const contact = document.getElementById("overlay-contact");
    
    toggle.addEventListener("click", () => {
        overlay.style.display = "block";
        body.style.display = "none"
    });

    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        contact.style.display = "none";
    });

    contactBtn.addEventListener("click", () => {
        contact.style.display = "block";
        document.documentElement.scrollTop = 0; // return back on top
    });
});
