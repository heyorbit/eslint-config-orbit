module.exports = {
  extends: ['react-app', 'plugin:react/recommended'],
  plugins: ['react', 'import'],
  rules: {
    //jsx workarounds
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    // js code rules
    'no-var': 'error',
    'import/no-named-as-default': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-expressions': 0,
    semi: ['error', 'never'],
    'import/newline-after-import': ['error', { count: 2 }],
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'keyword-spacing': ['error'],
    'space-before-blocks': ['error', 'always'],
    'no-whitespace-before-property': 'error',
    'max-len': [
      'error',
      {
        code: 150,
        comments: 180,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true },
    ],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'brace-style': 'error',
    'arrow-spacing': 'error',
    'prefer-const': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['class', 'const', 'let', 'var', 'return'],
      },
      {
        blankLine: 'always',
        prev: ['class', 'const', 'export', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['let', 'var'],
        next: ['let', 'var'],
      },
      {
        blankLine: 'any',
        prev: ['const'],
        next: ['const'],
      },
    ],
    'key-spacing': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    // React lint rules
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    'react/no-did-update-set-state': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/prop-types': [
      'error',
      {
        ignore: ['t', 'className', 'classes', 'children'],
      },
    ],
    'react/jsx-tag-spacing': 'error',
    'react/prefer-stateless-function': ['error'],
    'react/require-render-return': ['error'],
    'react/no-did-mount-set-state': ['error'],
    'react/boolean-prop-naming': ['error'],
    'react/no-find-dom-node': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 2, when: 'always' },
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-closing-bracket-location': ['error'],
  },
  globals: {
    document: true,
    window: true,
  },
}
