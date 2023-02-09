const Index = ({ asPath }) => {
  return (
    <>
      <p>has getIntialProps: {String(Boolean(Index.getInitialProps))}</p>
      <p>asPath: {asPath}</p>
    </>
  );
};

/*
  when you uncomment this line, asPath will be updated
  to be /fr/ when it should be / due to asPath should
  strip the locale
*/
// Index.getInitialProps = () => ({});

export default Index;
