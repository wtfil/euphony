var requireCacheKeys = Object.keys(require.cache);
var path = require('path');
var startDir = path.dirname(requireCacheKeys[requireCacheKeys.length - 2]);
var compile = require('traceur').compile;
var fs = require('fs');
var euphonyOptions = {
    skip: /node_modules/
};

require.extensions['.js'] = es6compile;

function shouldCompile(filename) {
    if (filename.indexOf(startDir) !== 0) {
        return false;
    }
    var relativePath = filename.replace(startDir, '');
    return !euphonyOptions.skip.test(relativePath);
}

function es6compile(module, filename) {
    var src = fs.readFileSync(filename, 'utf8');
    var result;

    if (!shouldCompile(filename)) {
        return module._compile(src, filename);
    }

    result = compile(src, {}, filename, filename);
    module._compile(result, filename);
}

module.exports = function (options) {
    for (var key in options) {
        euphonyOptions[key] = options[key];
    }
};
