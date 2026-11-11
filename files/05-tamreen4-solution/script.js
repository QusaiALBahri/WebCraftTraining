const btn = document.querySelector("#themeBtn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // تحدٍّ 5: تغيير نص الزر
  if (document.body.classList.contains("dark")) {
    btn.textContent = "الوضع النهاري";
  } else {
    btn.textContent = "الوضع الليلي";
  }
});

// تحدٍّ 6: رسالة شكر عند إرسال النموذج
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.innerHTML = "<p>شكرًا، وصلت رسالتك</p>";
});
