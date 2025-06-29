// import "@/styles/globals.css";
// import Layout from '../components/Layout';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;