var inputs = document.querySelectorAll("input");
var errors = document.querySelectorAll(".error");
var form = document.querySelector("form");

function validateEmail(email) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  form.style.height = "500px";

  for (var i = 0; i < inputs.length - 1; i++) {
    if (inputs[i].value === "") {
      inputs[i].classList.add("inputSubmit");
      errors[i].style.display = "block";
    } else if (!validateEmail(inputs[2].value) && inputs[2].value != "") {
      errors[2].textContent = "Looks like this is not an email";
      errors[2].style.display = "block";
    }
  }
});
