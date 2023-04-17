# 크롬 익스텐션 보일러 플레이트
## 개요
- MV3을 지원하는 크롬 익스텐션을 만들 수 있습니다
- React와 TypeScript, Webpack을 사용합니다

## 사용 기술
- React
- TypeScript
- Webpack

## 폴더 구조
```
chrome-extension-boilerplate
├─dist : 번들링 산출물
└─src
    ├─background : service worker
    ├─contentScript : content script
    ├─options : option page
    ├─popup : popup page
    └─static : 아이콘, manifest 등 정적 파일

```

## 사용 방법
- 256 * 256 사이즈의 익스텐션 아이콘 이미지를 준비합니다
- 이 레포를 클론하고 종속성을 설치합니다

<details>
	<summary>설치할 라이브러리</summary>

### dependencies
> npm i
- React : react react-dom

### devDependencies
> npm i -D
- ESLint : eslint
- Prettier : prettier eslint-config-prettier eslint-plugin-prettier
- TypeScript : typescript
- SCSS : sass
- webpack : webpack webpack-cli webpack-merge
	html-webpack-plugin sass-loader style-loader ts-loader css-loader
	clean-webpack-plugin copy-webpack-plugin

</details>

- src/static/manifest.json 파일을 작성합니다
- `npm run dev` 로 번들링을 실행합니다
- /dist 폴더를 크롬 익스텐션 설정에서 로드합니다
- 우상단의 익스텐션 아이콘을 찾아 클릭합니다
- popup.tsx의 내용이 잘 보이면 성공입니다
- 배포 시에는 `npm run build` 를 실행합니다

## 참고
- 크롬 공식 문서 https://developer.chrome.com/docs/extensions/
- MV3 포맷 https://developer.chrome.com/docs/extensions/mv3/manifest/
