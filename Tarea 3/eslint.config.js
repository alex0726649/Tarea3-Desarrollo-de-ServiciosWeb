const js = require('@eslint/js');

module.exports = [
    //* reglas para la verificación del código
    //* reglas base de ESlint para Javascript
    js.configs.recommended, {
    languageOptions : {
        ecmaVersion: 2022,
        sourceType: 'commonjs',
        globals: {
            require : 'readonly',
            module : 'writable',
            exports : 'writable',
            __dirname: 'readonly'
        }
    },
    rules : {
        'no-unused-vars': 'warn'
    }
},
//! Configuración Adicional a los archivos de test
{
    files: ['tests/**/*.js'],
    languageOptions: {
        globals: {
            require: 'readonly',
            module: 'writable',
            exports: 'writable',
            describe: 'readonly',
            test: 'readonly',
            expect: 'readonly',
            beforeEach: 'readonly',
            jest: 'readonly'
        }
    }

},
//!Exclusiones globales carpetas que slint no analiza 
{
    ignores : [' node_modules', 'logs/']

}
];