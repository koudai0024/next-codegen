import { ApolloProvider } from "@apollo/client";
import type { CustomAppProps } from "next/app";
import { useApollo } from "src/apollo/apolloClient";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });
  const apolloClient = useApollo(props.pageProps);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        {getLayout(<props.Component {...props.pageProps} />)}
      </ApolloProvider>
    </>
  );
};

export default App;
