import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

import "antd/dist/antd.css";
import "../utils/np.css";

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default App;
