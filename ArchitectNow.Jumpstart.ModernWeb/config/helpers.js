var path = require('path');
function createPathFn (basePath) {
  return function (args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [basePath].concat(args));
  };
}
var root = createPathFn(path.resolve(__dirname, '..'));

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server$/.exec(process.argv[1]));
}


function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

module.exports = {
  root: root,
  config: createPathFn(root('config')),
  src: createPathFn(root('src')),
  build: createPathFn(root('wwwroot')),
  dist: createPathFn(root('wwwroot')),
  hasProcessFlag: hasProcessFlag,
  isWebpackDevServer: isWebpackDevServer,
  checkNodeImport: checkNodeImport
};