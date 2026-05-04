import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];

export default config;
