import type { CustomLayout } from "next";

export const CommonLayout: CustomLayout = (page) => {
  return <div>{page}</div>;
};
