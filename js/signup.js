import { API_URL } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#signup-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmError = document.getElementById("confirm-error");

    // 초기화
    [name, email, password, confirmPassword].forEach((el) => el.classList.remove("input-error"));
    [nameError, emailError, passwordError, confirmError].forEach((el) => (el.textContent = ""));

    let hasError = false;

    if (name.value.trim().length < 2) {
      nameError.textContent = "이름은 2글자 이상이어야 합니다.";
      name.classList.add("input-error");
      name.focus();
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = "올바른 이메일 형식이 아닙니다.";
      email.classList.add("input-error");
      if (!hasError) email.focus();
      hasError = true;
    }

    if (password.value.length < 7) {
      passwordError.textContent = "비밀번호는 7자 이상이어야 합니다.";
      password.classList.add("input-error");
      if (!hasError) password.focus();
      hasError = true;
    }

    if (password.value !== confirmPassword.value) {
      confirmError.textContent = "비밀번호가 일치하지 않습니다.";
      confirmPassword.classList.add("input-error");
      if (!hasError) confirmPassword.focus();
      hasError = true;
    }

    if (hasError) return;

    try {
      const res = await fetch(`${API_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.value.trim(),
          email: email.value.trim(),
          password: password.value,
        }),
      });

      const result = await res.json();

      if (result.success) {
        alert("회원가입 성공! 로그인 페이지로 이동합니다.");
        setTimeout(() => {
          window.location.href = "login.html";
        }, 100); // ✅ 렌더링 딜레이 방지용
      } else {
        alert(result.message || "회원가입 실패");
      }
    } catch (err) {
      console.error("회원가입 오류:", err);
      alert("서버 통신 중 오류가 발생했습니다.");
    }
  });
});
