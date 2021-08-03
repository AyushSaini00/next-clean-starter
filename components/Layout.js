import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="body">
      <Head>
        {/* BASIC */}
        <title>Nextjs clean starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Nextjs project starter template, developed by Ayush Saini"
        />
        <meta name="keywords" content="comma, separated, keywords" />
        <meta name="author" content="Author name" />
        {/* ESSENTIALS */}

        <meta property="og:title" content="Nextjs clean starter" />
        <meta
          property="og:description"
          content="Nextjs project starter template, developed by Ayush Saini"
        />
        <meta property="og:image" content="IMAGE_LOCATION" />
        <meta property="og:type" content="YOUR_SITE_TYPE" />
        <meta property="og:site_name" content="YOUR_SITE_NAME" />

        {/* NON-ESSENTIALS */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YOUR_TWITTER_USERNAME" />
        <meta name="twitter:creator" content="@YOUR_TWITTER_USERNAME" />
        <meta name="twitter:title" content="Nextjs clean starter" />
        <meta
          name="twitter:description"
          content="Nextjs project starter template, developed by Ayush Saini"
        />
        <meta name="twitter:image" content="IMAGE_LOCATION" />
      </Head>
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
