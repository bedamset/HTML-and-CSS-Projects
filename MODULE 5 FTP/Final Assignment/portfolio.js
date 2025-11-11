// Contact form open/close
function openForm() { document.getElementById("contactForm").style.display = "block"; }
function closeForm() { document.getElementById("contactForm").style.display = "none"; }

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Smooth scroll for nav links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        if(this.getAttribute('href').startsWith('#')){
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Toggle Future Aspirations
function toggleFuture() {
    const content = document.getElementById("futureContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
