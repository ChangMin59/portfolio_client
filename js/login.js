import { API_URL } from "./config.js";

document.getElementById("login-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  const loginButton = this.querySelector("button[type='submit']");
  loginButton.disabled = true;
  loginButton.textContent = "로그인 중...";

  if (!email || !password) {
    alert("이메일과 비밀번호를 입력해 주세요.");
    loginButton.disabled = false;
    loginButton.textContent = "로그인";
    return;
  }

  try {
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP 상태: ${response.status}\n${errorText}`);
    }

    const result = await response.json();
    console.log("✅ 로그인 응답:", result);

    if (result.success && result.user) {
      // 사용자 정보 저장
      localStorage.setItem("user", JSON.stringify(result.user));

      // ✅ GitHub Pages에서 안정적인 리디렉션 (alert 분리)
      setTimeout(() => {
        alert("로그인 성공");
        window.location.replace("https://changmin59.github.io/portfolio_client/dashboard.html");
      }, 50);
    } else {
      alert(result.message || "이메일 또는 비밀번호가 잘못되었습니다.");
    }
  } catch (error) {
    console.error("로그인 요청 실패:", error);
    alert("로그인 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
  } finally {
    loginButton.disabled = false;
    loginButton.textContent = "로그인";
  }
});
