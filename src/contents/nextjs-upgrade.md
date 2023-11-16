---
date: '2023-11-16'
title: 'nextjs v12 -> v13으로 업그레이드'
categories: ['Web', 'SSR']
summary: 'nextjs v13 업그레이드'
thumbnail: './nextjs_13.png'
---

### 1. 개요

업무를 하면서 모의계산 서비스 프로젝트에서 연말정산 모의계산만 분리하게 되었다.  
(다른 서비스가 배포될 떄, 같이 나가면 안되는 타이밍이 있었음)  
프로젝트 분리하는 김에 next 버전을 올려보자는 마인드로 도전했다.!

### 2. 차이점 훑어보기

1. 디렉토리 구성  
   가장 큰 차이는 `page` 디렉토리가 없어졌다.
   v12에서 `page` 안에 디렉토리를 만들면 해당 디렉토리명으로 라우팅이 생성되었다.
   이러한 구조 때문에, 소스를 작성/분석 할 때 page 디렉토리를 먼저 찾고 해당 url과 연결된 compoennts 내 폴더로 접근해야했다.

   하지만, v13 에서는 `app` 폴더 내에 `page.tsx 혹은 page.js`과 같은 파일을 작성했을 때, 해당 폴더명으로 라우팅이 생성된다.

2. CSR/SSR 구분
   버전 13에서는 기본적으로 파일을 서버사이드 렌더링으로 구분된다.
   CSR로 하고 싶다면 파일 가장 상단에 `use client` 명령어를 사용해야한다.

   ```typescript
    "use client"
    export default function Page() {
        return <div>This is CSR</div>
    }
   ```

3. 리액트 버전  
   13 버전은 최소 리액트 버전이 18이상이어야 한다.
