window.onload = function () {
  alert("Welcome to my Portfolio - Muhammad Fawaz !");
};

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let emailPattern = /\S+@\S+\.\S+/;

  if (name === "") {
    alert("Name is required.");
    return;
  }
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return;
  }
  if (message.length < 10) {
    alert("Message must be at least 10 characters.");
    return;
  }

  alert("Form submitted successfully!");
  document.getElementById("contactForm").reset();
}
