import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = ({ ctx: { asPath } }) => {
  return {
    pageProps: {
      asPath,
    },
  };
};
