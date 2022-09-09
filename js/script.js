const email = document.querySelector(".email");
const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".submit");
const errorElement = document.querySelector(".err");

form.addEventListener("submit", (e) => {
  let messages = [];
  let validate =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    email.value === "" ||
    email.value === null ||
    !email.value.match(validate)
  ) {
    messages.push("Please enter a valid email address");
  } else {
    messages.push("Thanks, you will receive updates soon! 😎");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  } else {
    messages.push("Thanks, you will receive updates soon! 😎");
  }
  email.value = "";
});

btnSubmit.addEventListener("click", function (e) {
  let messages = [];
  let validate =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    email.value === "" ||
    email.value === null ||
    !email.value.match(validate)
  ) {
    messages.push("Please enter a valid email address");
  } else {
    messages.push("Thanks, you will receive updates soon! 😎");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  } else {
    messages.push("Thanks, you will receive updates soon! 😎");
  }
  email.value = "";
});
