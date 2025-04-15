async function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const res = await fetch("../data/admins.json");
  const admins = await res.json();

  const found = admins.find(a => a.username === user && a.password === pass);
  if (found) {
    sessionStorage.setItem("admin", user);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-msg").innerText = "نام کاربری یا رمز اشتباه است.";
  }
}
