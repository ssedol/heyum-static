# HEYUM 정적 룩북 — PRD & 디자인 스펙

> **이 문서의 역할**  
> 소스(`index.html`, `style.css`, `script.js`)가 바뀌어도 **현재 승인된 디자인**이 유지되도록 하는 기준 문서입니다.  
> 기능·콘텐츠를 수정할 때는 반드시 아래 **디자인 시스템**과 **섹션 스펙**을 따릅니다.  
> 구현의 단일 진실 공급원(Single Source of Truth)은 `style.css`의 `:root` 디자인 토큰입니다.

---

## 1. 프로젝트 목적

- 고급 핸드메이드 액세서리 브랜드 **HEYUM** 홍보용 1페이지 정적 웹사이트
- 구매 기능 없음 — 작품의 예술성·가치를 보여주는 **디지털 룩북** 역할
- 톤: 미니멀, 여백 중심, 하이엔드 럭셔리 (베이지·화이트 기반)

## 2. 타겟 유저

- 희소성·고급스러움을 원하는 커스텀 주얼리를 찾는 **20–40대** 고객

---

## 3. 승인된 디자인 방향 (변경 금지 항목)

| 항목 | 규칙 |
|------|------|
| **컬러 무드** | 베이지·아이보리·화이트 계열만 사용. **초록·딥그린·에메랄드 톤 UI 금지** |
| **포인트 컬러** | 웜 브론즈/골드 (`#a68b5b`) — 소량만 (라벨, 번호, 보더, 호버) |
| **여백** | 섹션 상·하 `7–10rem`급 넓은 패딩 유지. 요소를 빽빽하게 채우지 않음 |
| **타이포** | 제목 = 세리프 디스플레이, 본문 = 산세리프. 대문자 라벨은 `letter-spacing` 넓게 |
| **이미지** | 고화질 주얼리/Unsplash. 밝고 따뜻한 톤. Hero는 **밝은 베이지 오버레이** + **다크 텍스트** |
| **인터랙션** | 과한 모션 금지. 스크롤 페이드인, 이미지 호버 줌, Hero 슬로우 패닝만 |

---

## 4. 디자인 시스템

### 4.1 컬러 팔레트 (`style.css` `:root`)

| 토큰 | HEX | 용도 |
|------|-----|------|
| `--color-white` | `#ffffff` | body 기본 배경 |
| `--color-ivory` | `#fdfbf7` | Story 섹션 배경 |
| `--color-beige-light` | `#f7f3eb` | Collection, Footer, 모바일 메뉴 |
| `--color-beige` | `#ebe4d6` | Order 섹션, 갤러리 카드 플레이스홀더 |
| `--color-beige-deep` | `#ddd4c4` | 아웃라인 버튼·네비 CTA 보더 |
| `--color-charcoal` | `#3a3632` | 제목·본문 강조·Primary 버튼 |
| `--color-warm` | `#5c544b` | 부제·이탤릭 강조 |
| `--color-taupe` | `#8c8378` | 보조 텍스트·네비 링크 |
| `--color-muted` | `#7a7268` | 본문 설명 |
| `--color-accent` | `#a68b5b` | 섹션 라벨, 스텝 번호, 링크 언더라인 |
| `--color-accent-light` | `#c4a97a` | (보조) |
| `--color-line` | `rgba(58, 54, 50, 0.1)` | 구분선 |

> **주의**: `--color-deep-green`, `--color-forest`, `--color-gold` 등 legacy alias는 베이지 팔레트로 매핑되어 있음. 새 코드에서 **실제 초록색 HEX를 직접 쓰지 말 것**.

### 4.2 타이포그래피

| 역할 | 폰트 | 굵기 | 비고 |
|------|------|------|------|
| Display (제목) | **Cormorant Garamond** | 300–400 | `section-title`, Hero H1, 갤러리 작품명 |
| Body (본문) | **Jost** | 300–500 | 본문, 네비, 버튼, 라벨 |

**Google Fonts 로드 URL (고정)**  
`Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400` + `Jost:wght@300;400;500`

| 클래스 / 요소 | 크기 | 스타일 |
|---------------|------|--------|
| `.section-label` | `0.6875rem` | uppercase, `letter-spacing: 0.28em`, `--color-accent` |
| `.section-title` | `clamp(2.25rem, 5vw, 3.75rem)` | display, `--color-charcoal` |
| `.section-title em` | — | italic, `--color-warm` |
| `body` | `0.9375rem` | `line-height: 1.75` |
| Hero `.hero__title` | `clamp(2.75rem, 7vw, 5rem)` | weight 300, `--color-charcoal` |
| Hero `.hero__title--accent` | — | italic, `--color-warm` |
| `.nav__logo` | `1.5rem` | `letter-spacing: 0.2em` |
| `.nav__menu a` | `0.75rem` | uppercase, `letter-spacing: 0.14em` |
| `.btn` | `0.75rem` | uppercase, `letter-spacing: 0.16em` |

### 4.3 간격·레이아웃

| 토큰 | 값 |
|------|-----|
| `--space-xs` ~ `--space-2xl` | `0.5rem` → `10rem` (단계적) |
| `--max-width` | `1320px` |
| `--header-height` | `5rem` |
| 가로 패딩 | `clamp(1.5rem, 5vw, 4rem)` (섹션 공통) |

**모바일(≤768px)**: `--space-xl` → `5rem`, `--space-2xl` → `6rem`으로 축소.

### 4.4 모션·이징

| 토큰 | 값 |
|------|-----|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--transition-base` | `0.5s` |
| `--transition-slow` | `0.9s` |

| 효과 | 스펙 |
|------|------|
| 스크롤 리빌 | `.reveal` → `.is-visible`, `translateY(2rem)` → `0`, delay 클래스 `0.12s` 단위 |
| Hero 이미지 | `hero-pan` 28s, scale `1.05`→`1.12` |
| Hero 오버레이 | 165deg 그라데이션, ivory `0.15` → `0.92` (하단이 가장 밝음) |
| 갤러리 호버 | 이미지 `scale(1.08)`, 캡션 fade-up |
| Story/Contact 이미지 호버 | `scale(1.03)` ~ `1.04` |

`prefers-reduced-motion: reduce` 시 애니메이션·리빌 비활성화 필수.

---

## 5. 페이지 구조 & 섹션 스펙

### 5.1 공통 — Header

- `position: fixed`, 높이 `--header-height`
- 스크롤 60px 이상: `.is-scrolled` — 배경 `rgba(255,255,255,0.94)`, blur `14px`, 하단 1px 라인
- 로고·메뉴: **항상 `--color-charcoal` / `--color-taupe`** (Hero 위에서도 밝은 텍스트 쓰지 않음)
- 메뉴: Story · Collection · Order · Contact
- Contact: `.nav__cta` — 베이지 보더 박스, 호버 시 accent 배경

### 5.2 Hero

- 높이: `min-height: 100svh`, 콘텐츠 하단 정렬
- 배경: 풀블리드 이미지 + **밝은 베이지 오버레이** (다크 오버레이 금지)
- 카피: eyebrow(accent) + 2줄 타이틀(italic accent 라인) + subtitle(muted) + 언더라인 CTA 링크
- 하단 중앙: `Scroll` 텍스트 (모바일 숨김)

### 5.3 Brand Story (`#story`)

- 배경: `--color-ivory`
- 레이아웃: 2열 그리드 → 이미지(4:5) + 텍스트 / 하단 와이드 이미지(16:7)
- 텍스트: `line-height: 2`, values 리스트(01–03) + accent 번호

### 5.4 Collection / Gallery (`#collection`)

- 배경: `--color-beige-light`
- 헤더: 중앙 정렬 라벨 + 타이틀 + 설명
- 그리드: 12컬럼 매거진 레이아웃
  - 기본 아이템: `span 4`
  - `--tall`: `span 4`, `row span 2`
  - `--wide`: `span 8`
- 카드 호버: 이미지 확대 + 하단 그라데이션 캡션(화이트 타이틀)

### 5.5 Order Guide (`#order`)

- 배경: `--color-beige` (다크 배경 섹션 사용 금지)
- 텍스트: charcoal / muted
- 4단계 그리드(데스크톱 4열 → 태블릿 2열 → 모바일 1열)
- 스텝 번호: display + `--color-accent`

### 5.6 Contact (`#contact`)

- 배경: `--color-white`
- 2열: 왼쪽 비주얼 이미지 / 오른쪽 카피 + CTA
- 버튼
  - **Primary**: `--color-charcoal` 배경, 화이트 텍스트
  - **Outline**: transparent + `--color-beige-deep` 보더, 호버 시 `--color-beige-light`

### 5.7 Footer

- 배경: `--color-beige-light`, 상단 1px 라인
- 브랜드명 display + copyright taupe

---

## 6. HTML 구조·클래스 규칙

소스 변경 시 **아래 구조·BEM 클래스명을 유지**할 것.

```
.site-header > .nav (.nav__logo, .nav__menu, .nav__cta, .nav__toggle)
main
  .hero (.hero__media, .hero__image, .hero__overlay, .hero__content, .hero__scroll)
  .story#story (.story__intro, .story__grid, .story__figure, .story__copy, .story__values)
  .collection#collection (.collection__header, .gallery, .gallery__item, .gallery__card, .gallery__caption)
  .order#order (.order__steps, .order__step)
  .contact#contact (.contact__visual, .contact__content, .contact__actions, .btn)
.site-footer
```

- 스크롤 애니메이션 대상: `.reveal` (+ 선택 `.reveal--delay-1|2|3`)
- 공통 타이포: `.section-label`, `.section-title`

---

## 7. JavaScript 동작 (`script.js`)

| 기능 | 동작 |
|------|------|
| 헤더 | `scrollY > 60` → `.site-header.is-scrolled` |
| 모바일 메뉴 | `.nav__toggle` ↔ `.nav__menu.is-open` |
| 리빌 | `IntersectionObserver` — `threshold: 0.12`, `rootMargin: 0 0 -8% 0` → `.is-visible` |

리팩터 시 위 동작·클래스명은 유지.

---

## 8. 반응형 브레이크포인트

| 구간 | 주요 변경 |
|------|-----------|
| **≤1024px** | Story 1열, Gallery 6컬럼 span, Order 2열, Contact 1열 |
| **≤768px** | 햄버거 메뉴(아이보리 풀스크린), Gallery 12컬럼 1열, CTA 버튼 full-width |

---

## 9. 이미지 가이드

### 9.1 소스

- **Unsplash** `images.unsplash.com/photo-{id}?auto=format&fit=crop&w={width}&q=80`
- URL 추가·교체 전 **HTTP 200 응답 확인** (만료 ID 사용 금지)

### 9.2 검증된 Photo ID (2026-05 기준)

| ID | 용도 예 |
|----|---------|
| `photo-1515562141207-7a88fb7ce338` | Hero, 반지, 갤러리 |
| `photo-1573408301185-9146fe634ad0` | Story, 제작 장면 |
| `photo-1605100804763-247f67b3557e` | Story wide, Contact, 다이아 |
| `photo-1523293182086-7651a899d37f` | 갤러리 |

### 9.3 스타일

- `object-fit: cover`
- Hero: `object-position: center 30%`
- 갤러리/스토리: 호버 시만 scale — 레이아웃 점프 없이 `overflow: hidden` 유지

---

## 10. 기술 스택

| 항목 | 선택 |
|------|------|
| 마크업 | HTML5 (시맨틱 `header`, `main`, `section`, `figure`) |
| 스타일 | **CSS3 + CSS Variables** (`style.css` 단일 파일 권장) |
| 스크립트 | Vanilla JavaScript (`script.js`) |
| 프레임워크 | 사용 안 함 (정적 배포 최적화) |

**파일 구성**

- `index.html` — 구조·콘텐츠
- `style.css` — 디자인 토큰 + 모든 비주얼
- `script.js` — 헤더·메뉴·스크롤 리빌
- `prd.md` — 본 문서 (기능·디자인 기준)

---

## 11. 디자인 유지 체크리스트 (변경 후 검수)

- [ ] 초록/딥그린 계열 UI 색이 없는가?
- [ ] 섹션 배경이 white → ivory → beige-light → beige → white 순환인가?
- [ ] Hero가 **밝은 오버레이 + 다크 텍스트**인가?
- [ ] 섹션 라벨·여백·폰트가 §4 스펙과 일치하는가?
- [ ] `.reveal` / Hero pan / Gallery hover가 동작하는가?
- [ ] 768px·1024px에서 레이아웃이 깨지지 않는는가?
- [ ] 모든 `<img>` URL이 로드되는가?
- [ ] `prefers-reduced-motion`에서 모션이 꺼지는가?

---

## 12. 하지 말 것 (Don't)

- Tailwind 등으로 **토큰 없이 임의 HEX** 남발 
- Hero에 **다크 그린/블랙 풀 오버레이** + 화이트 텍스트 조합 (구버전)
- 갤러리·Order를 **다크 모드 섹션**으로 변경
- 애니메이션 과다 추가 (패럴랙스, 바운스, 플래시)
- 여백 축소로 “쇼핑몰형” 밀도 높이기
- 깨진 Unsplash ID 그대로 사용

---

---

## 13. 개발 서버 (NAS / 외부 접속)

정적 파일은 **Vite** 개발 서버로 제공합니다. `0.0.0.0`에 바인딩되어 LAN·외부에서 접속 가능합니다.

> **Ugreen NAS + Docker**: NAS 호스트에 npm이 없어도 됩니다. 아래 **Docker 방식**을 사용하세요. (컨테이너 안에 Node·npm이 포함됩니다.)

### 13.1 Docker로 실행 (권장 — NAS)

프로젝트 폴더에서 (Ugreen Docker / SSH):

```bash
cd /path/to/heyum-static
docker compose up --build -d
```

중지:

```bash
docker compose down
```

Ugreen Docker GUI 사용 시: `docker-compose.yml`이 있는 폴더를 **Compose 프로젝트**로 가져와 실행.

| 접속 위치 | URL 예시 |
|-----------|----------|
| NAS 본인 | `http://127.0.0.1:5173` |
| 같은 Wi‑Fi | `http://<NAS-IP>:5173` |
| 외부 인터넷 | 포트포워딩 후 `http://<공인IP>:5173` |

포트 변경: `docker-compose.yml`의 `ports`를 `"8080:5173"`처럼 수정 후 재시작.

로그 확인: `docker compose logs -f heyum-dev`

### 13.2 로컬 PC에서 npm으로 실행 (선택)

Node가 설치된 PC에서만:

```bash
npm install
npm run dev
```

### 13.3 Ugreen NAS 체크리스트

1. **Docker** — Ugreen 앱에서 Docker 활성화 (npm 설치 불필요)
2. **방화벽** — TCP `5173` 허용
3. **포트포워딩** (외부용) — `외부포트 → NAS-IP:5173`
4. **파일 수정 반영** — 소스 폴더가 볼륨 마운트되므로 HTML/CSS 저장 시 자동 새로고침 (Docker용 polling 설정 포함)

### 13.4 관련 파일

| 파일 | 역할 |
|------|------|
| `docker-compose.yml` | NAS Docker 실행 정의 |
| `Dockerfile.dev` | Node 22 + `npm run dev` 이미지 |
| `package.json` | `dev` 스크립트, `docker:dev` 등 |
| `vite.config.js` | `host: 0.0.0.0`, Docker watch polling |
| `.env.example` | `PORT` 예시 |

---

*문서 버전: 2026-05 — 현행 `style.css` 베이지·화이트 룩북 디자인 기준*
