
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;

    if (!name || !email || !phone || !course) {
        alert("Please fill all required fields.");
        return;
    }

    document.getElementById("formStatus").textContent =
        "Thank you " + name + "! Your enquiry has been received.";

    contactForm.reset();

});
// welcome my webiste
const welcomeSection = document.querySelector(".welcome-section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

observer.observe(welcomeSection);
