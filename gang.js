// SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// FORM
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === "") {
    alert("Please fill all fields");
  } else {
    alert("Message sent!");
    form.reset();
  }
});

// HOURS
const today = new Date().getDay();

const hours = `
<h2>Opening Hours</h2>
<ul>
<li ${today===1?'class="today"':''}>Mon - Fri: 9am - 6pm</li>
<li ${today===6?'class="today"':''}>Saturday: 9am - 5pm</li>
<li ${today===0?'class="today"':''}>Sunday: Closed</li>
</ul>
`;

document.getElementById("about").innerHTML += hours;

// GALLERY SLIDE
let current = 0;
const slides = document.querySelectorAll(".gallery img");

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);