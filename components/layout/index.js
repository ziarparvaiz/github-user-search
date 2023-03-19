import Head from "next/head";
import Footer from "../global/Footer";
import Header from "../global/Header";
import Container from "./Container";

function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="center h-full">
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
