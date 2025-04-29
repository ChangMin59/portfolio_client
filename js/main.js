// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 모든 DOM 컨텐츠가 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {

  // Hero 타이틀 부드럽게 등장
  gsap.from(".hero-title", {
    opacity: 0,        // 처음엔 완전히 투명
    y: 30,             // Y축 아래 30px에서 시작 (너무 튀지 않게)
    duration: 1.5,     // 1.5초 동안
    ease: "sine.out"   // 부드럽게 가속했다가 감속하는 이징
  });

  // Hero 서브타이틀 부드럽게 등장 (약간 딜레이)
  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 20,
    delay: 0.4,         // 타이틀보다 0.4초 뒤에 시작
    duration: 1.5,
    ease: "sine.out"
  });

  // Hero 버튼 등장
  gsap.to(".hero .btn-primary", {
    opacity: 1,
    y: 0,               // 원래 위치로
    visibility: "visible",
    delay: 1,           // 서브타이틀보다 0.6초 후
    duration: 1.5,
    ease: "sine.out"
  });

  // About 텍스트 문단 등장 (스크롤 트리거)
  gsap.from(".about-text p", {
    scrollTrigger: {
      trigger: ".about-text",    // .about-text 섹션에 도달했을 때
      start: "top 80%",          // 섹션이 뷰포트 80%에 닿으면 시작
      toggleActions: "play none none none", // 스크롤 할 때만 재생
    },
    opacity: 0,
    y: 30,
    stagger: 0.15,               // 문단별로 0.15초 간격으로 등장
    duration: 1.5,
    ease: "sine.out"
  });

  // About 섹션 이미지 등장 (스크롤 트리거)
  gsap.from(".about-image img", {
    scrollTrigger: {
      trigger: ".about-image",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1.5,
    ease: "sine.out"
  });

  // Skills & Projects 카드들 등장 (개별로)
  gsap.utils.toArray('.skill-item, .project-item').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",       // 카드가 뷰포트 85% 지점에 오면
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "sine.out",
      delay: index * 0.05       // 카드별로 0.05초씩 딜레이 추가
    });
  });

  // CTA 전체 컨테이너 등장
  gsap.to(".cta-container", {
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "sine.out"
  });

  // CTA 버튼 등장
  gsap.from(".cta-container .btn-primary", {
    scrollTrigger: {
      trigger: ".cta-container .btn-primary",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1.5,
    ease: "sine.out"
  });

});
