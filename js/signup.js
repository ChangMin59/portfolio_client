document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmError = document.getElementById('confirm-error');

    // 초기화
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmError.textContent = '';

    let isValid = true;

    // 이름 검증
    if (name.length < 2) {
      nameError.textContent = '이름은 2글자 이상이어야 합니다.';
      isValid = false;
    }

    // 이메일 정규식 검증
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = '올바른 이메일 형식이 아닙니다.';
      isValid = false;
    }

    // 비밀번호 길이
    if (password.length < 7) {
      passwordError.textContent = '비밀번호는 7자 이상이어야 합니다.';
      isValid = false;
    }

    // 비밀번호 일치
    if (password !== confirmPassword) {
      confirmError.textContent = '비밀번호가 일치하지 않습니다.';
      isValid = false;
    }

    if (!isValid) return;

    // 저장
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({
      name,
      email,
      password,
      date: new Date().toISOString().slice(0, 10)
    });
    localStorage.setItem('users', JSON.stringify(users));

    alert('회원가입 성공! 로그인 페이지로 이동합니다.');
    window.location.href = 'login.html';
  });
});
