import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    rules: {
      "no-console": 0,
      camelcase: 0,
      "no-underscore-dangle": 0,
      "object-curly-newline": 0,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "next" },
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "error",
        { variables: false },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "no-multi-str": 0,
      "max-len": "off",
      "import/no-unresolved": "off",
      "import/extensions": "off",
      "padded-blocks": "off",
    },
  },
]);
