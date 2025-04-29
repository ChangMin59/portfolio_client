import { API_URL } from "./config.js";

async function loadCurrentUser() {
  try {
    const response = await fetch(`${API_URL}/api/users/me`, {
      method: "GET",
      credentials: "include"
    });

    const result = await response.json();

    if (result.success && result.data) {
      const user = result.data;

      document.getElementById('current-user').textContent = `${user.name}님`;
      document.getElementById('user-name').textContent = user.name || '알 수 없음';
      document.getElementById('user-email').textContent = user.email || '알 수 없음';
      document.getElementById('user-date').textContent = user.createdAt || '가입일 없음';
    } else {
      alert(result.message || "로그인이 필요합니다.");
      window.location.href = "login.html";
    }
  } catch (error) {
    console.error('유저 정보 로드 실패:', error);
    window.location.href = "login.html";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCurrentUser(); // 🔥 사용자 정보 불러오기 실행

  // 🔥 로그아웃 버튼 이벤트 연결
  document.getElementById('logout-btn').addEventListener('click', async () => {
    try {
      await fetch(`${API_URL}/api/users/logout`, {
        method: "GET",
        credentials: "include"
      });
    } catch (e) {
      console.error('로그아웃 실패:', e);
    }
    window.location.href = "login.html";
  });
});
