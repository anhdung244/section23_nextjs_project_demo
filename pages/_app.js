import "../styles/globals.css";
import { hot } from "react-hot-loader/root";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default hot(MyApp);
