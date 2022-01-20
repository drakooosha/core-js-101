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
    "linebreak-style": 0,
    "eqeqeq": 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'keyword-spacing': 0,
    'brace-style': 0,
    'no-lonely-if': 0,
    'valid-typeof': 0
  },
};
