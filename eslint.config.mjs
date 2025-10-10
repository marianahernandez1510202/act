import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    languageOptions: {
      globals: globals.node
    },
    rules: pluginJs.configs.recommended.rules
  },
  {
    files: ["test/**/*.js"],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: globals.jest
    },
    rules: pluginJest.configs.recommended.rules
  }
];