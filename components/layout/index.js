import Head from "next/head";
import Footer from "../global/Footer";
import Header from "../global/Header";

function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex item-center flex-col justify-between h-[100vh]">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
