import type { CustomNextPage, GetServerSideProps } from "next";
import { useEffect } from "react";
import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
import type { ShipsQuery } from "src/apollo/graphql";
import { ShipsDocument, useShipsQuery } from "src/apollo/graphql";
import { CommonLayout } from "src/layout/CommonLayout";

const Home: CustomNextPage = () => {
  const { data } = useShipsQuery({
    variables: { limit: 10 },
  });
  useEffect(() => {
    console.log(data?.ships);
  }, [data]);
  return (
    <div>
      <h1>Hello World!!!!</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<ShipsQuery>({
    query: ShipsDocument,
    variables: { limit: 10 },
  });
  console.log(data);
  return addApolloState(apolloClient, { props: {} });
};

Home.getLayout = CommonLayout;

export default Home;
