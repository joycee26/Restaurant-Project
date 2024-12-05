// Form validation
document.querySelector("form").addEventListener("submit", function (event) {
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    event.preventDefault();
    alert("All fields are required!");
  }
});
