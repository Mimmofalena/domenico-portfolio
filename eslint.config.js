import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["build"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      // Same behaviour as CRA's "react-app" config: unused args are allowed and
      // the (no longer required) default React import is not reported.
      "no-unused-vars": [
        "warn",
        { args: "none", ignoreRestSiblings: true, varsIgnorePattern: "^React$" },
      ],
      // LanguageContext exports its hook next to the provider
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true, allowExportNames: ["useLanguage"] },
      ],
    },
  },
]);
