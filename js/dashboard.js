import { API_URL } from "./config.js";

async function loadCurrentUser() {
  try {
    const response = await fetch(`${API_URL}/api/users/me`, {
      method: "GET",
      credentials: "include"
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP 오류 상태: ${response.status}\n${errorText}`);
    }

    const result = await response.json();
    console.log("🔍 사용자 정보 응답:", result);

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
    alert("세션이 만료되었거나 인증되지 않았습니다.");
    window.location.href = "login.html";
  }
}

async function logoutUser() {
  try {
    const response = await fetch(`${API_URL}/api/users/logout`, {
      method: "GET",
      credentials: "include"
    });

    if (!response.ok) {
      console.warn("서버가 로그아웃 요청을 정상 처리하지 못했습니다.");
    }

    window.location.href = "login.html";
  } catch (e) {
    console.error('로그아웃 실패:', e);
    window.location.href = "login.html";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCurrentUser(); // 사용자 정보 요청
  document.getElementById('logout-btn').addEventListener('click', logoutUser);
});
