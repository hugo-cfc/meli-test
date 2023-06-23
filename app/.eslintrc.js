module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "@typescript-eslint", "eslint-plugin-import-helpers"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        project: "./tsconfig.json",
      },
    },
    react: {
      version: "18.x",
    },
  },
  rules: {
    "linebreak-style": "off",
    "import/extensions": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        endOfLine: "lf",
        singleQuote: false,
        tabWidth: 2,
        indentStyle: "space",
        useTabs: false,
        trailingComma: "es5",
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-restricted-imports": [
      "warn",
      {
        name: "react-redux",
        importNames: ["useSelector", "useDispatch"],
        message:
          "Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "react-hooks/exhaustive-deps": "off",
    "object-shorthand": "error",
    "no-console": "warn",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always", // new line between groups
        groups: ["module", "/^@shared/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
};
