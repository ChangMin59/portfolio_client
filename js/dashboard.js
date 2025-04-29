// dashboard.js

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// 상단 사용자 이름
if (currentUser && currentUser.name) {
  document.getElementById('current-user').textContent = currentUser.name + '님';
} else {
  document.getElementById('current-user').textContent = '게스트';
}

// 내 정보 카드 채우기
if (currentUser) {
  document.getElementById('user-name').textContent = currentUser.name || '알 수 없음';
  document.getElementById('user-email').textContent = currentUser.email || '알 수 없음';
  document.getElementById('user-date').textContent = currentUser.date || '날짜 정보 없음';
}

// 로그아웃
document.getElementById('logout-btn').addEventListener('click', function() {
  localStorage.removeItem('currentUser');
  window.location.href = 'login.html';
});
