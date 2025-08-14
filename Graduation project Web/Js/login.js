function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("يرجى إدخال البريد وكلمة المرور");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // تسجيل دخول ناجح
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "products.html"; // الانتقال لصفحة المنتجات
  } else {
    // فشل تسجيل الدخول
    alert("الرجاء تسجيل بريد جديد");
  }
}
