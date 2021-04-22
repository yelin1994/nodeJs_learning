const vm = require('vm');
const path = require('path');
const fs = require('fs');

function r(filename) {
    const pathToFile = path.resolve(__dirname, filename);
    const content = fs.readFileSync(pathToFile, 'utf-8');

    const wrapper = [
        '(function (require, module, exports, __dirname, __filename) {'
        , '})'
    ]

    const wrapperContent = wrapper[0] + content + wrapper[1]
    const script = new vm.Script(wrapperContent, { // 将字符串转化为函数
        filename: 'index.js'
    });
    const module = {
        exports: {},
    }
    const result = script.runInThisContext();
    result(r, 'module', 'module.exports');
    return module.exports;
}
global.r = r;
