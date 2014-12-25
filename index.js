var compile = require('traceur').compile;
var fs = require('fs');

require.extensions['.js'] = es6compile;

function es6compile(module, filename) {
    var src = fs.readFileSync(filename, 'utf8');
    var result = compile(src, {}, filename, filename);
    module._compile(result, filename);
}
