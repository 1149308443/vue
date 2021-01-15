module.exports = {
    //默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        amd: true,
        node: true
    },
    /*
     * https://github.com/standard/standard/blob/master/docs/RULES-en.md
     * extends: 'eslint:recommended',
     * required to lint *.vue files
     */
    plugins: [
        'vue'
    ],
    extends: [
        "plugin:vue/recommended"
     ],
    // add your custom rules here
    'rules': {
         // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 要求使用分号代替 ASI
    'semi': [2, 'always'],
    // 禁止不必要的分号
    'no-extra-semi': 2,
    // function的左括号之前可以不使用空格
    'space-before-function-paren': [0, 'always'],
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 2,
    // 禁止出现空函数
    'no-empty-function': 2,
    // 强制对多行注释使用特定风格
    'multiline-comment-style': 0,
    // 禁止在代码后使用内联注释
    'no-inline-comments': 0,
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 2,
    // 禁止连续赋值
    'no-multi-assign': 2,
    // 禁止在注释块中使用空白符、允许在空行使用空白符（空格、tab 和其它 Unicode 空白字符）
    'no-trailing-spaces': [2, {'skipBlankLines': true}],
    'vue/singleline-html-element-content-newline':0,
    'vue/attribute-hyphenation': 0
    }
};