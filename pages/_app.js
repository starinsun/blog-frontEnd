import App from "next/app";
import "antd/dist/antd.css";
import "../utils/np.css";
import "markdown-navbar/dist/navbar.css";
import "gitalk/dist/gitalk.css";
import "highlight.js/styles/monokai-sublime.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
