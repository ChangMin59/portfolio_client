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
      credentials: "include", // ✅ 세션 공유 필수
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      // HTTP 에러 상태 방어
      const errorText = await response.text();
      throw new Error(`HTTP 오류 상태: ${response.status} \n${errorText}`);
    }

    const result = await response.json();
    console.log(result);

    if (result.success) {
      alert('로그인 성공');
      window.location.href = 'dashboard.html';
    } else {
      alert(result.message || '이메일 또는 비밀번호가 잘못되었습니다.');
    }
  } catch (error) {
    console.error('로그인 요청 실패:', error);
    alert('로그인 중 오류가 발생했습니다. 관리자에게 문의하세요.');
  }
});
