// لمسة تفاعلية: رسالة شكر بعد إرسال النموذج
const form = document.querySelector("form");
const thanks = document.querySelector("#thanks");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.hidden = true;
  thanks.hidden = false;
});
