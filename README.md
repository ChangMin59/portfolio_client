# Portfolio Client
자기소개와 포트폴리오를 웹페이지 형태로 구현한 **프론트엔드 프로젝트**입니다.  
HTML, CSS, SCSS, JavaScript를 활용하여 개인 소개와 로그인/회원가입 UI를 구성했으며,  
GitHub Pages를 통해 정적 웹사이트로 배포할 수 있습니다.

---

## 📂 프로젝트 구조
📦 portfolio_client
┣ 📂 css # 스타일시트 (SCSS 컴파일 결과)
┣ 📂 scss # SCSS 원본 파일 (다크톤 레이아웃, 반응형 포함)
┣ 📂 js # 자바스크립트 로직 (폼 검증, 데이터 전송, 애니메이션)
┣ 📂 images # 웹페이지에 사용되는 이미지 리소스
┣ 📜 index.html # 메인 페이지 (Hero, About, Skills, Projects, CTA 섹션)
┣ 📜 signup.html # 회원가입 화면 (입력값 유효성 검사 → API 전송)
┣ 📜 login.html # 로그인 화면 (이메일/비밀번호 인증)
┣ 📜 dashboard.html # 사용자 대시보드 (로그인 후 사용자 정보 표시)
┗ 📜 README.md # 프로젝트 설명 문서

---

### 📑 각 파일/폴더 설명
- **index.html**  
  - Hero, About, Skills, Projects, CTA로 구성된 메인 자기소개 페이지  
  - Canvas 기반 배경효과 (입자 흐름, 별빛 낙하, 기술선 흐름, 노드 네트워크, 오로라) 

- **signup.html**  
  - 이름, 이메일, 비밀번호 입력 → 유효성 검사 후 서버로 회원가입 요청  

- **login.html**  
  - 사용자 이메일/비밀번호 입력 → 인증 성공 시 사용자 정보 저장  

- **dashboard.html**  
  - 로그인 후 사용자 정보(이름/이메일/가입일)를 불러와 화면에 표시  
  - 로그아웃 시 인증 상태 해제 후 로그인 페이지로 이동

- **js/**  
  - **GSAP ScrollTrigger** 기반 텍스트 애니메이션  
  - **Canvas 효과 제어** (particles.js, 노드 연결, 오로라 배경 등)  
  - 로그인/회원가입 폼 검증 및 fetch API 데이터 전송  

- **scss/**  
  - 다크톤 레이아웃, 반응형 스타일 정의  

- **백엔드 연동**  
  - 프론트엔드: GitHub Pages 배포  
  - 백엔드: Spring Boot + JPA + MySQL (Railway 기반 DB, Render 서버)

---
