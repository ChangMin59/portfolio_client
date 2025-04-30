document.addEventListener('DOMContentLoaded', () => {
  loadCurrentUser();
  document.getElementById('logout-btn').addEventListener('click', logoutUser);
});

function loadCurrentUser() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("로그인이 필요합니다.");
    window.location.href = "login.html";
    return;
  }

  document.getElementById('current-user').textContent = `${user.name}님`;
  document.getElementById('user-name').textContent = user.name || '알 수 없음';
  document.getElementById('user-email').textContent = user.email || '알 수 없음';
  document.getElementById('user-date').textContent = user.createdAt || '가입일 없음';
}

function logoutUser() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}