import { API_URL } from "./config.js";

async function loadCurrentUser() {
  try {
    const response = await fetch(`${API_URL}/api/users/me`, {
      method: "GET",
      credentials: "include"  // 세션 기반 인증
    });

    if (!response.ok) {
      throw new Error('로그인 정보 없음');
    }

    const currentUser = await response.json();

    // 상단 사용자 이름
    document.getElementById('current-user').textContent = `${currentUser.name}님`;

    // 내 정보 카드 채우기
    document.getElementById('user-name').textContent = currentUser.name || '알 수 없음';
    document.getElementById('user-email').textContent = currentUser.email || '알 수 없음';
    document.getElementById('user-date').textContent = currentUser.date || '가입일 정보 없음';
    
  } catch (error) {
    console.error('사용자 정보 불러오기 실패:', error);
    alert('로그인이 필요합니다.');
    window.location.href = 'login.html';
  }
}

// 페이지 로드될 때 실행
document.addEventListener('DOMContentLoaded', loadCurrentUser);

// 로그아웃
document.getElementById('logout-btn').addEventListener('click', async function() {
  try {
    await fetch(`${API_URL}/api/users/logout`, {
      method: "POST",
      credentials: "include"
    });
  } catch (e) {
    console.error('로그아웃 실패:', e);
  }
  
  window.location.href = 'login.html';
});
