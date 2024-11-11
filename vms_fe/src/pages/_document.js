import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
        <style>{`
          /* 모든 전역 스타일을 여기서 설정 */
          * {
            box-sizing: border-box;
            font-family: 'Pretendard', sans-serif;
            margin: 0;
            padding: 0;
            white-space: nowrap; /* 글자 넘침 시 처리 방식 */
            text-align: center;
            vertical-align: bottom;
          }

          a {
            text-decoration: none;
            color: inherit;
            font-size: inherit;
            font-weight: inherit;
          }

          li {
            list-style: none;
          }

          :root {
            --black-400: #131313;
            --black-300: #212121;
            --black-200: #282828;
            --black-100: #2e2e2e;
            --gray-400: #333333;
            --gray-300: #4b4b4b;
            --gray-200: #747474;
            --gray-100: #d8d8d8;
            --brand-orange: #eb5230;
            --blue-blue: #558fff;
            --error-red: #c41013;
            --white: #ffffff;
          }

          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
              "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

