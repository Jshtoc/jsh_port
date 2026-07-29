import tLogo from '../../assets/projects/t-logo.svg'
import staLogo from '../../assets/projects/sta-logo.png'
import aiCloudLogo from '../../assets/projects/ai-cloud-logo.png'
import tdirectshopImg1 from '../../assets/projects/tdirectshop-1.jpg'
import tdirectshopImg2 from '../../assets/projects/tdirectshop-2.jpg'
import tdirectshopImg3 from '../../assets/projects/tdirectshop-3.jpg'
import tdirectshopBanner from '../../assets/projects/tdirectshop-banner.png'
import sktTechAcademyImg from '../../assets/projects/skt-tech-academy-screenshot.png'
import sktTechAcademyStoryImg from '../../assets/projects/skt-tech-academy-story.png'
import staBanner from '../../assets/projects/sta-banner.png'
import hanaBanner from '../../assets/projects/hana-banner.png'
import aiLayerBanner from '../../assets/projects/ai-layer-banner.png'
import dagachiImg from '../../assets/projects/dagachi.png'
import dagachiAppImg from '../../assets/projects/dagachi-app.png'
import dagachiPlanImg from '../../assets/projects/dagachi-plan.png'
import dagachiPlanDetailImg from '../../assets/projects/dagachi-plan-detail.png'
import dagachiBanner from '../../assets/projects/dagachi-banner.png'
import wwpLogo from '../../assets/projects/wwp-logo.svg'
import weddingPlanImg1 from '../../assets/projects/wedding-plan-1.png'
import weddingPlanImg2 from '../../assets/projects/wedding-plan-2.png'
import wwpBanner from '../../assets/projects/wwp-banner.png'

export interface ProjectDetailSection {
  title: string
  items: string[]
}

export interface ProjectMeta {
  label: string
  value: string
}

export interface ProjectContribution {
  label: string
  percentage: number
}

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  logo?: string
  image?: string
  imageBg?: string
  images?: string[]
  contributions?: ProjectContribution[]
  meta?: ProjectMeta[]
  details?: ProjectDetailSection[]
}

export const projects: Project[] = [
  {
    slug: 't-directshop',
    title: 'T 다이렉트샵 (SKT)',
    description:
      'SKT 공식 온라인 판매 채널의 유선(인터넷·TV·전화) 파트를 기획·디자인 협의부터 배포까지 100% 단독 개발. Vue 2 Options API → Vue 3 Composition API, Nuxt 2 → Nuxt 4 마이그레이션을 SSR 구조 재설계까지 포함해 주도했습니다.',
    tags: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Pinia'],
    logo: tLogo,
    image: tdirectshopBanner,
    imageBg: '#3617CE',
    contributions: [{ label: 'My Contribution', percentage: 100 }],
    images: [tdirectshopImg2, tdirectshopImg1, tdirectshopImg3],
    details: [
      {
        title: '서비스 구성',
        items: [
          'T 다이렉트샵은 메인·무선·유선 3개 파트로 구성된 SKT 공식 온라인 판매 채널',
          '메인 (30%): 홈 랜딩 및 공통 레이아웃 일부 참여, 웹 접근성 작업',
          '무선 (50%): 스마트폰·태블릿 상품 목록·상세·비교 페이지 개발, 웹 접근성 주도',
          '유선 (100%): 인터넷·TV·전화 상품 전 페이지 단독 개발 — 기획·디자인 협의부터 배포까지 전 과정 책임',
        ],
      },
      {
        title: '마이그레이션 주요 기여',
        items: [
          'Vue 2 Options API → Vue 3 Composition API 전환 주도: 재사용 가능한 Composable 패턴으로 비즈니스 로직 분리',
          'Nuxt 2 → Nuxt 4 마이그레이션: SSR 구조 재설계, 라우팅 방식 변경 대응, Nitro 서버 엔진 적용',
          '마이그레이션 전 통합 테스트 시나리오 작성으로 주요 기능 회귀 방지',
          '레거시 컴포넌트 구조 개선을 통해 번들 사이즈 최적화 및 유지보수성 향상',
        ],
      },
      {
        title: '사이트 구축 및 개발',
        items: [
          '유선 상품(인터넷·TV·전화) 전 페이지 신규 구축 — 기획·디자인 협의부터 QA·배포까지 단독 전 과정 책임',
          '상품 목록·상세·가입 신청 플로우 설계 및 구현 — 복잡한 요금제 조합 로직을 Composable로 모듈화',
          '공통 레이아웃, 헤더·푸터, 글로벌 네비게이션 컴포넌트 개발 참여',
          '반응형 UI 구현 및 크로스브라우저 대응 (Chrome, Edge, Safari, 모바일 웹)',
          '웹 접근성(WCAG) 기준 준수 — 스크린 리더 대응, 키보드 탐색, ARIA 속성 적용',
          'Figma 디자인 시안 기반 픽셀 퍼펙트 구현 및 디자이너와의 스펙 협의 주도',
        ],
      },
      {
        title: '유지보수 및 운영',
        items: [
          '운영 중 버그 리포트 수집 및 핫픽스 대응 — 긴급 이슈 평균 처리 사이클 단축',
          '신규 요금제·프로모션 페이지 주기적 업데이트 및 콘텐츠 변경 작업 처리',
          'API 스펙 변경 시 프론트엔드 연동 레이어 수정 및 회귀 테스트 수행',
          '성능 모니터링 — Lighthouse 기준 Core Web Vitals 개선 (LCP·CLS 지표 최적화)',
          '코드 리뷰 참여 및 팀 내 공통 컴포넌트 개선 제안으로 유지보수 효율화 기여',
        ],
      },
    ],
  },
  {
    slug: 'skt-tech-academy',
    title: 'SKT 테크 아카데미',
    description:
      'Claude Code 기반 바이브 코딩(Vibe Coding)으로 개발한 풀스택 서비스. Next.js App Router + React Server Component 구조를 설계하고, 지원 신청 폼·관리자 대시보드 등 주요 페이지와 공통 UI 컴포넌트 25종을 구현했습니다.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma'],
    logo: staLogo,
    image: staBanner,
    imageBg: '#FFFFFF',
    contributions: [{ label: 'My Contribution', percentage: 80 }],
    images: [sktTechAcademyImg, sktTechAcademyStoryImg],
    demo: 'https://skttechacademy.com/',
    meta: [
      { label: '기간', value: '2025.01 ~ 2025.04' },
      { label: '역할', value: 'Frontend 개발 / 바이브 코딩 주도' },
      {
        label: '기술 스택',
        value: 'Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4, Zustand, Prisma, PostgreSQL',
      },
      { label: '인프라', value: 'AWS S3·ECR·EC2·SSM, Docker (멀티스테이지), GitHub Actions CI/CD' },
      { label: '프로젝트 규모', value: 'FE 3명 / 전체 8명' },
    ],
    details: [
      {
        title: '주요 업무',
        items: [
          'Claude Code 기반 바이브 코딩(Vibe Coding) 방식으로 개발 — AI 페어 프로그래밍을 통해 개발 생산성 극대화',
          'Next.js App Router + React Server Component 구조 설계 — 서버 컴포넌트 우선 원칙으로 클라이언트 번들 최소화',
          '지원 신청(멀티스텝 폼), 수료생 후기, 공지사항, 관리자 대시보드 등 주요 페이지 전 영역 개발',
          '공통 UI 컴포넌트 25종 설계 및 구현 (Button, Modal, FormInput, Pagination, ScrollReveal 등) — Tailwind CSS v4 커스텀 색상 토큰 기반',
          'AWS S3 파일 업로드, recharts 통계 차트 구현',
        ],
      },
    ],
  },
  {
    slug: 'ai-cloud',
    title: 'AI-Cloud 플랫폼 (하나은행)',
    description:
      '클라우드 리소스 모니터링 플랫폼에서 표·테이블 구조의 공통 컴포넌트 개발을 주로 담당했습니다. 재사용 가능한 테이블 로직을 설계해 재사용률을 높이고, 게시글·연구 데이터가 실시간으로 반영되도록 구현했습니다.',
    tags: ['Vue 3', 'Pinia', 'Vite'],
    logo: aiCloudLogo,
    image: hanaBanner,
    imageBg: '#009490',
    contributions: [{ label: 'My Contribution', percentage: 50 }],
    images: [hanaBanner],
    details: [
      {
        title: '핵심 기능',
        items: [
          '클라우드 리소스 모니터링 대시보드의 표·테이블 기반 공통 컴포넌트 개발',
          '게시글, 연구 데이터 등 다양한 콘텐츠가 실시간으로 반영되는 테이블 로직 구현',
        ],
      },
      {
        title: '기술적 특징',
        items: [
          'Vue 3 Composition API 기반으로 테이블 공통 컴포넌트를 설계해 여러 화면에서 재사용률을 높임',
          '게시글·연구 데이터 실시간 반영 로직 구현으로 데이터 최신성 확보',
          '공통 UI 컴포넌트 라이브러리 설계에 참여해 재사용률과 디자인 일관성을 높임',
        ],
      },
    ],
  },
  {
    slug: 'ai-layer',
    title: 'AI-Layer (T 다이렉트샵 연계)',
    description:
      'React 기반으로 개발한 프로젝트로, T 다이렉트샵과 연계되어 동작하는 서비스입니다. React, Next.js, TypeScript를 활용해 페이지를 구현했습니다.',
    tags: ['React', 'Next.js', 'TypeScript'],
    logo: tLogo,
    image: aiLayerBanner,
    imageBg: '#3617CE',
    contributions: [{ label: 'My Contribution', percentage: 75 }],
    images: [aiLayerBanner],
  },
  {
    slug: 'dagachi',
    title: '다가치 (사이드 프로젝트)',
    description:
      '회사 동호회의 수기 출석·일정 관리를 대체하기 위해 기획한 동호회 매칭·운영 서비스로, 기획을 100% 담당하고 팀원들과 함께 프론트엔드를 구현했습니다.',
    tags: ['Next.js', 'React', 'TypeScript', 'Zustand', 'TanStack Query'],
    image: dagachiBanner,
    imageBg: '#4151DF',
    contributions: [
      { label: '기획', percentage: 100 },
      { label: '프론트엔드', percentage: 60 },
    ],
    images: [dagachiImg, dagachiAppImg, dagachiPlanImg, dagachiPlanDetailImg],
    github: 'https://github.com/dagotit/soworks-club',
    details: [
      {
        title: '핵심 기능',
        items: [
          '동호회(그룹) 생성·가입·목록 조회 — 회사 내 여러 동호회를 탐색하고 참여 신청',
          'react-big-calendar 기반 모임 일정 관리 — 동호회별 일정 등록 및 캘린더 뷰 제공',
          '출석 체크 — 하루 1회 제한 로직을 적용한 출첵 기능으로 수기 출석부를 대체',
          '실시간 알림 — 안 읽은 알림 목록·읽음 처리를 지원하는 알림함',
          '관리자(운영진) 권한 분리 — 미들웨어 단에서 관리자 여부를 검증해 관리자 전용 페이지 접근 제어',
          'Daum 우편번호 서비스 연동 — 모임 장소 등록 시 주소 검색',
        ],
      },
      {
        title: '기술적 특징',
        items: [
          'Next.js App Router의 라우트 그룹((auth)/(admin)/(calendar)/(group)/(main)/(setting))으로 인증·관리자·일반 사용자 영역을 명확히 분리',
          '미들웨어 레벨에서 refreshToken 쿠키 기반 인증 가드 구현 — 비로그인 시 로그인 페이지로 리다이렉트, 관리자 페이지는 별도 검증 API로 이중 체크',
          'Zustand로 로그인·캘린더·출석·알림·관리자 권한 등 도메인별 상태를 스토어 단위로 분리 관리',
          'TanStack Query + Axios로 서버 상태 관리와 로딩·에러 처리를 일원화',
          'Spring Boot 기반 백엔드 API와 연동해 동호회·일정·출석 데이터를 처리(백엔드는 팀원과 협업)',
        ],
      },
      {
        title: '기획자로서 배운 점',
        items: [
          '수기로 관리되던 동호회 출석·일정 문제를 발견하고 서비스 방향을 직접 설정 — 기획 전 과정을 단독으로 담당',
          '프론트엔드 개발에도 함께 참여하며 기획 의도가 실제 화면 설계·상태 관리 구조에 반영되는 과정을 경험',
        ],
      },
    ],
  },
  {
    slug: 'wedding-plan',
    title: '우리들의 웨딩 플랜 (WWP)',
    description:
      '결혼 준비 전 과정(웨딩홀 비교, 신혼집 임장, 예산·자산 관리, 업체 리스트, 체크리스트)을 관리하는 부부 전용 올인원 웨딩 플래닝 웹앱입니다. 사이드 프로젝트로 기획부터 개발까지 전 과정을 단독으로 진행했습니다.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase'],
    logo: wwpLogo,
    image: wwpBanner,
    imageBg: '#0D0F14',
    contributions: [{ label: 'My Contribution', percentage: 100 }],
    images: [weddingPlanImg1, weddingPlanImg2],
    github: 'https://github.com/Jshtoc/wedding-plan',
    demo: 'https://wedding-plan-zeta.vercel.app/',
    details: [
      {
        title: '주요 기능',
        items: [
          '대시보드: 전체 준비 진행률·예산 현황·다가오는 일정을 한눈에 확인',
          '웨딩 플랜: 체크리스트와 카테고리별 예산(예상·확정 금액) 관리',
          '웨딩홀 비교: 가격·KTX 접근성·주차 대수 기준 정렬 및 상세 견적 관리',
          '신혼집 매물·임장 기록, 웨딩 업체(스튜디오·드레스·메이크업) 리스트, 방문 투어 동선 계산까지 결혼 준비 전 영역을 하나의 앱에서 관리',
        ],
      },
      {
        title: '기술적 특징',
        items: [
          'Edge Middleware 기반 자체 인증 — 외부 인증 라이브러리 없이 HMAC-SHA256 서명 쿠키를 직접 구현해 전 페이지 접근 제어',
          'Supabase(PostgreSQL) 기반 서버리스 백엔드로 웨딩홀·예산·체크리스트 데이터 CRUD 처리',
          'Kakao Map API 연동으로 투어 동선 및 부동산 매물 위치 확인 (네이버·T맵 연동은 검증 후 카카오로 최종 정착)',
          '정적 HTML 프로토타입에서 Next.js App Router 구조로 전환한 개발 히스토리',
        ],
      },
    ],
  },
]
