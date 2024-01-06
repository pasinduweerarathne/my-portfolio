import Layout from "@/components/Layout";
import "../global.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>PW</title>
      </Head>

      <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}
