import "../styles/App.css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

      * {
        box-sizing: border-box;
        font-family: 'Pretendard', sans-serif;
        margin: 0px;
        padding: 0px;
        white-space: nowrap;
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
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <Component {...pageProps} />;
}
