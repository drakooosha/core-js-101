module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": ["error", "windows"],
    "eqeqeq": "off",
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'keyword-spacing': ["off"],
    'brace-style': ["off"],
    'no-lonely-if': ["off"],
    'valid-typeof': ["off"]
  },
};
