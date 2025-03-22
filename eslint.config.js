import js from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: { react },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "react/jsx-no-target-blank": "off",
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsparser,
    },
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
    }
  }
];
