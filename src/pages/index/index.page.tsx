import type { CustomNextPage } from "next";
import { CommonLayout } from "src/layout/CommonLayout";

const Home: CustomNextPage = () => {
  return (
    <div>
      <h1>Hello World!!!!</h1>
    </div>
  );
};

Home.getLayout = CommonLayout;

export default Home;
