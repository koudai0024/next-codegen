import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { CustomAppProps } from "next/app";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
  cache,
});

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });
  return (
    <>
      <ApolloProvider client={client}>
        {getLayout(<props.Component {...props.pageProps} />)}
      </ApolloProvider>
    </>
  );
};

export default App;
