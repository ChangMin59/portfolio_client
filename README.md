# Portfolio Client

이 프로젝트는 **개인 포트폴리오 및 자기소개 웹페이지**로,  
프론트엔드 기술을 활용하여 제작된 정적 웹 애플리케이션입니다.  

- **Backend (`portfolio_server`)** 와 REST API 연동  
- GitHub Pages를 통해 배포  
- 자기소개, 프로젝트 소개, 회원가입·로그인, 대시보드 등 UI 제공  

👉 [실제 배포 페이지 보러가기](https://changmin59.github.io/portfolio_client/)

---

## ⚙️ Tech Stack
- **Frontend**: HTML5, CSS3, SCSS  
- **JavaScript**: ES6+, DOM 제어, Fetch API  
- **UI/UX**:  
  - Canvas 기반 인터랙션 (Particles, Stars, Node Network, Aurora)  
  - GSAP ScrollTrigger 애니메이션 적용  
  - 반응형 레이아웃  

---

## 📂 프로젝트 구조

### 🔑 주요 디렉토리 및 파일

- **css/** 🎨 SCSS 컴파일 결과물 (스타일시트)  
- **scss/** 📝 SCSS 소스 (다크테마, 반응형 스타일)  
- **js/** ⚙️ JavaScript 로직  
  - `login.js` : 로그인 폼 검증 및 인증 처리  
  - `signup.js` : 회원가입 폼 유효성 검사 및 API 전송  
  - `dashboard.js` : 로그인 후 사용자 데이터 불러오기  
  - `animation.js` : GSAP/Canvas 애니메이션 처리  
- **images/** 🖼 웹페이지 리소스 이미지  
- **index.html** 🏠 메인 페이지 (Hero, About, Skills, Projects, CTA)  
- **signup.html** 📝 회원가입 화면  
- **login.html** 🔑 로그인 화면  
- **dashboard.html** 📊 사용자 대시보드  
- **README.md** 📘 프로젝트 문서  

---

## 📌 주요 기능

- **홈 (index.html)**  
  - Hero, About, Skills, Projects, CTA 섹션 구성  
  - Canvas 배경 인터랙션 + GSAP 애니메이션  

- **회원가입 (signup.html)**  
  - 이름, 이메일, 비밀번호 입력  
  - 유효성 검사 후 `portfolio_server` API 호출  

- **로그인 (login.html)**  
  - 이메일/비밀번호 입력 → 서버 인증 요청  
  - 성공 시 사용자 세션 저장  

- **대시보드 (dashboard.html)**  
  - 로그인된 사용자 정보(이름/이메일/가입일) 표시  
  - 로그아웃 버튼 → 세션 해제 후 로그인 페이지로 이동  

---

## 🖼 UI/UX 특징

- **초기 등장 애니메이션** : 부드러운 모션으로 사용자 몰입도 향상  
- **스크롤 인터랙션** : 텍스트/이미지가 뷰포트에 들어올 때 자연스럽게 등장  
- **Canvas 효과** :  
  - Hero → 입자 흐름  
  - About → 별빛 낙하  
  - Skills → 수직 기술선 흐름  
  - Projects → 노드 네트워크 연결  
  - CTA → 오로라 배경  

---

## 🏗 아키텍처 개요

- **Frontend (portfolio_client)** 🌐  
  - GitHub Pages에서 배포되는 정적 웹사이트  
  - 사용자 입력 처리 + 애니메이션 + API 요청  

- **Backend (portfolio_server)** ⚙️  
  - Spring Boot 기반 REST API 서버  
  - 회원가입, 로그인, 사용자 정보 제공  

- **Database (Railway MySQL)** 💾  
  - 사용자 정보 저장 (이름, 이메일, 가입일 등)  

---

## 📎 배포

- **Frontend** : GitHub Pages (`portfolio_client`)  
- **Backend** : Render (`portfolio_server`)  
- **Database** : Railway MySQL  

---

## 🔗 연동 저장소
- **Backend: portfolio_server** ⚙️  
  - Spring Boot + JPA 기반 REST API 서버  
  - 회원가입/로그인/대시보드 API 제공  
  - [GitHub 바로가기](https://github.com/ChangMin59/portfolio_server)
 
---
