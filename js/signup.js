document.querySelector("#signup-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmError = document.getElementById("confirm-error");

  // 초기화
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";

  let isValid = true;

  if (name.length < 2) {
    nameError.textContent = "이름은 2글자 이상이어야 합니다.";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "올바른 이메일 형식이 아닙니다.";
    isValid = false;
  }

  if (password.length < 7) {
    passwordError.textContent = "비밀번호는 7자 이상이어야 합니다.";
    isValid = false;
  }

  if (password !== confirmPassword) {
    confirmError.textContent = "비밀번호가 일치하지 않습니다.";
    isValid = false;
  }

  if (!isValid) return;

  try {
    const response = await fetch(`${window.API_URL}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, email, password })
    });

    const result = await response.json();
    console.log(result);

    if (result.success) {
      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      window.location.href = "login.html";
    } else {
      alert(result.message || "회원가입 실패");
    }
  } catch (error) {
    console.error("회원가입 오류:", error);
    alert("서버 오류가 발생했습니다.");
  }
});
