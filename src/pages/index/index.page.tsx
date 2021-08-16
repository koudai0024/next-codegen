import type { CustomNextPage } from "next";
import { useEffect } from "react";
import { useShipsQuery } from "src/apollo/graphql";
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

Home.getLayout = CommonLayout;

export default Home;
