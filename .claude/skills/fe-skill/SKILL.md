---
name: fe-skill
description: 이 프로젝트의 프론트엔드 코딩 컨벤션(React, TypeScript, 컴포넌트 네이밍, CSS 클래스 네이밍). React 컴포넌트를 새로 작성하거나 수정할 때, 또는 className/스타일링 코드를 작성할 때 항상 적용한다.
user-invocable: true
---

# fe-skill — Frontend 코딩 컨벤션

이 프로젝트에서 프론트엔드 코드를 작성/수정할 때 아래 규칙을 지킨다.

## 1. React

UI는 React 컴포넌트로 작성한다.

## 2. TypeScript

모든 코드는 `.tsx`/`.ts`로 작성한다. `any`를 피하고 props/state에는 명시적 타입(interface/type)을 정의한다.

## 3. 컴포넌트 이름은 직관적으로 짓는다

컴포넌트 이름만 보고 어떤 역할/위치인지 바로 알 수 있어야 한다.

- PascalCase를 사용한다 (JSX는 대문자로 시작하는 태그만 컴포넌트로 인식하고, 하이픈이 들어간 이름은 커스텀 엘리먼트로 취급되어 컴포넌트로 동작하지 않는다).
- 파일명은 컴포넌트명과 동일하게 맞춘다.

```tsx
// 프로필 상단 → ProfileTop.tsx
function ProfileTop() { ... }

// Bad
function Profile_Top() { ... }
function Comp1() { ... }
```

## 4. 클래스명에 CSS 수치를 직접 명시하지 않는다

`margin-top50`처럼 클래스 이름에 구체적인 CSS 속성값(px, 수치 등)을 박아넣지 않는다. 값이 바뀌면 이름과 실제 스타일이 어긋나고 재사용도 어려워진다.

```tsx
// Bad - 클래스명이 수치에 종속됨
<div className="margin-top50" />

// Good - Tailwind 스페이싱 스케일(추상화된 토큰) 사용
<div className="mt-12" />

// Good - 역할 기반 시맨틱 클래스 사용
<div className="section-spacing" />
```

Tailwind의 `mt-[50px]` 같은 임의값(arbitrary value) 표기도 가급적 피하고, 정의된 스페이싱 스케일(`mt-4`, `mt-8`, `mt-12` ...)을 우선 사용한다.
