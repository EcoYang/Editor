const Builder = require('electron-builder');

const yargs = require('yargs');
const args = yargs.argv;

console.log(`
-------------------------------------------------------------
ELECTRON BUILD
-------------------------------------------------------------
`);
console.log('\nBuilding Electron...');

// Build
Builder.build({
    arch: args.arch || 'x64',
    config: {
        fileAssociations: {
            ext: 'editorproject',
            name: 'Babylon.js Editor Project'
        },
        appId: 'editor.babylonjs.com',
        productName: 'BabylonJS Editor',
        icon: './css/icons/babylonjs_icon',
        directories: {
            output: './electron-packages/'
        },
        nsis: {
            oneClick: false
        },
        asar: true,
        compression: 'store',
        extraFiles: [
            'photoshop-extension/**',
            'photoshop-extension/node_modules/**'
        ],
        files: [
            'src/**',
            'electron/**',

            'build/**',
            'declaration/**',
            'dist/**',

            'node_modules/babylonjs/babylon.d.ts',

            'assets/**',
            'css/**',

            'babylonjs-editor.d.ts',
            'babylonjs-editor-extensions.d.ts',

            'index-local.html',
            'redirect.html',
            'preview.html',
            'spectorjs.html',
            'code-editor-debug.html',

            'photoshop-extension/**'
        ]
    }
});
