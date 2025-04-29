import { API_URL } from "./config.js";

document.getElementById('login-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password }),
      credentials: "include"
    });

    const result = await response.json();
    console.log(result);

    if (result.success) {
      alert('로그인 성공');
      window.location.href = 'dashboard.html';
    } else {
      alert('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  } catch (error) {
    console.error('로그인 요청 실패:', error);
    alert('로그인 중 오류가 발생했습니다.');
  }
});
