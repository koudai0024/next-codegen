// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");

dotenv.config();

const { API_URL } = process.env;

module.exports = {
  schema: [
    {
      [API_URL]: {},
    },
  ],
  documents: ["src/**/*.graphql"],
  generates: {
    "src/apollo/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        preResolveTypes: false,
        scalars: {
          uuid: "string",
          timestamptz: "string",
          bigint: "number",
          _text: "string[]",
        },
        namingConvention: {
          typeNames: "pascal-case#pascalCase",
          enumValues: "upper-case#upperCase",
        },
        apolloReactCommonImportFrom: "@apollo/client",
        apolloReactHooksImportFrom: "@apollo/client",
      },
    },
  },
};
