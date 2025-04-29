// 상수 설정: 사용할 요소들의 수나 범위를 정의
const SETTINGS = {
  starCount: 150,        // About 섹션에 생성할 별 개수
  nodeDistance: 120,     // Projects 섹션에서 노드를 연결할 최대 거리(px)
  techLines: 20          // Skills 섹션에 생성할 기술선 개수
};

// ===== 공통 리사이즈 함수 =====
function resizeCanvas(canvas) {
  // 캔버스 요소가 존재하면, 브라우저 창 크기에 맞게 width, height 조정
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

// ===== Hero Section: 입자 흐름 효과 =====
function initHeroParticles() {
  // particles.js 라이브러리를 이용해 particles-js 영역에 입자 애니메이션 생성
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } }, // 입자 수량 및 밀도
      color: { value: "#00ffe0" },     // 입자 색상 설정 (청록색)
      shape: { type: "circle" },        // 입자 모양은 원(circle)
      opacity: { value: 0.2, random: true }, // 입자 투명도 (랜덤 변동 허용)
      size: { value: 3, random: true }, // 입자 크기 (랜덤 변동 허용)
      move: { enable: true, speed: 0.6, random: true } // 이동 활성화 및 속도 설정
    },
    interactivity: { 
      events: { 
        onhover: { enable: false }, // 마우스 호버 이벤트 비활성화
        onclick: { enable: false }  // 마우스 클릭 이벤트 비활성화
      }
    },
    retina_detect: true // 고해상도 화면에서도 선명하게 표시
  });
}

// ===== About Section: 별 이동 효과 =====
function initAboutCanvas() {
  const aboutCanvas = document.getElementById('canvas-about'); // canvas-about 요소 가져오기
  if (!aboutCanvas) return; // 요소가 없으면 함수 종료

  const ctx = aboutCanvas.getContext('2d'); // 2D 렌더링 컨텍스트 얻기
  resizeCanvas(aboutCanvas); // 캔버스를 현재 창 크기에 맞게 조정

  // 별 데이터를 랜덤 값으로 초기화
  const stars = Array.from({ length: SETTINGS.starCount }, () => ({
    x: Math.random() * aboutCanvas.width,   // 별의 x좌표
    y: Math.random() * aboutCanvas.height,  // 별의 y좌표
    radius: Math.random() * 1.5,             // 별의 반지름(크기)
    alpha: Math.random(),                    // 별의 투명도
    speed: Math.random() * 1              // 별의 하강 속도
  }));

  // 별을 지속적으로 그리는 함수
  function renderStars() {
    ctx.clearRect(0, 0, aboutCanvas.width, aboutCanvas.height); // 캔버스 초기화 (지우기)
    stars.forEach(star => {
      ctx.beginPath(); // 새로운 경로 시작
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2); // 원 그리기
      ctx.fillStyle = `rgba(255,255,255,${star.alpha})`; // 별 색상 설정 (흰색, 알파 적용)
      ctx.fill(); // 색 채우기
      star.y += star.speed; // 별의 y좌표 증가 (아래로 이동)

      if (star.y > aboutCanvas.height) star.y = 0; // 화면 아래로 내려가면 맨 위로 재배치
    });
    requestAnimationFrame(renderStars); // 다음 프레임에 다시 호출하여 애니메이션 지속
  }
  renderStars(); // 별 렌더링 시작
}

// ===== Skills Section: 기술선 이동 효과 =====
function initSkillsCanvas() {
  const skillsCanvas = document.getElementById('canvas-skills'); // canvas-skills 요소 가져오기
  if (!skillsCanvas) return; // 요소가 없으면 함수 종료

  const ctx = skillsCanvas.getContext('2d'); // 2D 렌더링 컨텍스트 얻기
  resizeCanvas(skillsCanvas); // 캔버스 리사이즈

  // 랜덤 위치 및 속도를 가진 기술선 초기화
  const lines = Array.from({ length: SETTINGS.techLines }, () => ({
    x: Math.random() * skillsCanvas.width,    // 시작 x좌표
    y: Math.random() * skillsCanvas.height,   // 시작 y좌표
    length: Math.random() * 100,              // 선의 길이
    speed: Math.random() * 0.5 + 0.5          // 이동 속도 (0.5~1.0)
  }));

  // 기술선을 지속적으로 그리는 함수
  function renderTechLines() {
    ctx.clearRect(0, 0, skillsCanvas.width, skillsCanvas.height); // 캔버스 초기화
    ctx.strokeStyle = 'rgba(0,255,224,0.5)'; // 선 색상 설정 (청록색)
    ctx.lineWidth = 1; // 선 두께 설정

    lines.forEach(line => {
      ctx.beginPath(); // 경로 시작
      ctx.moveTo(line.x, line.y); // 선 시작 지점
      ctx.lineTo(line.x, line.y + line.length); // 선 끝 지점
      ctx.stroke(); // 선 그리기
      line.y += line.speed; // 선 y좌표 이동

      if (line.y > skillsCanvas.height) line.y = -line.length; // 화면 아래로 내려가면 위로 재배치
    });
    requestAnimationFrame(renderTechLines); // 다음 프레임에 다시 호출
  }
  renderTechLines(); // 기술선 렌더링 시작
}

// ===== Projects Section: 노드 연결 네트워크 =====
function initProjectsCanvas() {
  const projectsCanvas = document.getElementById('canvas-projects'); // canvas-projects 요소 가져오기
  if (!projectsCanvas) return;

  const ctx = projectsCanvas.getContext('2d'); // 2D 컨텍스트
  resizeCanvas(projectsCanvas); // 리사이즈

  // 랜덤 위치, 속도를 가진 노드 초기화
  const nodes = Array.from({ length: 60 }, () => ({
    x: Math.random() * projectsCanvas.width,    // x좌표
    y: Math.random() * projectsCanvas.height,   // y좌표
    vx: (Math.random() - 0.5) * 0.3,             // x방향 속도
    vy: (Math.random() - 0.5) * 0.3              // y방향 속도
  }));

  function renderProjectNodes() {
    ctx.clearRect(0, 0, projectsCanvas.width, projectsCanvas.height); // 캔버스 초기화

    nodes.forEach(node => {
      ctx.beginPath(); // 경로 시작
      ctx.arc(node.x, node.y, 2, 0, Math.PI * 2); // 노드(원) 그리기
      ctx.fillStyle = 'rgba(0,255,224,0.7)'; // 채우기 색상
      ctx.fill(); // 색 채우기

      node.x += node.vx; // x 이동
      node.y += node.vy; // y 이동

      // 벽에 부딪히면 반대 방향으로 튕기기
      if (node.x < 0 || node.x > projectsCanvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > projectsCanvas.height) node.vy *= -1;
    });

    // 노드 간 거리 계산 후 가까우면 선으로 연결
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < SETTINGS.nodeDistance) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = 'rgba(0,255,224,0.1)';
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(renderProjectNodes); // 다음 프레임 호출
  }
  renderProjectNodes(); // 노드 렌더링 시작
}

// ===== CTA Section: 오로라 효과 =====
function initCTACanvas() {
  const ctaCanvas = document.getElementById('canvas-cta'); // canvas-cta 요소 가져오기
  if (!ctaCanvas) return;

  const ctx = ctaCanvas.getContext('2d'); // 2D 컨텍스트
  resizeCanvas(ctaCanvas); // 리사이즈

  let shift = 0; // 오로라 색상 변화용 변수

  function renderAurora() {
    ctx.clearRect(0, 0, ctaCanvas.width, ctaCanvas.height); // 초기화

    // 동적 선형 그라디언트 생성
    const gradient = ctx.createLinearGradient(0, 0, ctaCanvas.width, ctaCanvas.height);
    gradient.addColorStop(0, `rgba(14,165,233,${0.08 + 0.05 * Math.sin(shift)})`);
    gradient.addColorStop(0.5, `rgba(56,189,248,${0.05 + 0.05 * Math.cos(shift)})`);
    gradient.addColorStop(1, `rgba(0,255,224,${0.06 + 0.04 * Math.sin(shift + 1)})`);

    ctx.fillStyle = gradient; // 채우기 스타일 적용
    ctx.fillRect(0, 0, ctaCanvas.width, ctaCanvas.height); // 전체 채우기

    shift += 0.008; // 색상 변화 속도 조절
    requestAnimationFrame(renderAurora); // 다음 프레임 호출
  }
  renderAurora(); // 오로라 렌더링 시작
}

// ===== 전체 초기화 함수 =====
function initBackground() {
  initHeroParticles(); // Hero 섹션 입자
  initAboutCanvas();   // About 섹션 별
  initSkillsCanvas();  // Skills 섹션 선
  initProjectsCanvas(); // Projects 섹션 노드 연결
  initCTACanvas();     // CTA 섹션 오로라
}

// 윈도우 로드 완료 후 초기화
window.addEventListener('load', initBackground);

// 브라우저 창 리사이즈 시 모든 캔버스 사이즈 재조정
window.addEventListener('resize', () => {
  ['canvas-about', 'canvas-skills', 'canvas-projects', 'canvas-cta'].forEach(id => {
    const canvas = document.getElementById(id);
    resizeCanvas(canvas); // 해당 id 가진 캔버스 리사이즈
  });
});
