import type { CustomAppProps } from "next/app";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });
  return <>{getLayout(<props.Component {...props.pageProps} />)}</>;
};

export default App;
