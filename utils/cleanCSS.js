var uncss = require('uncss');
var fs = require('fs');

module.exports = function(opts) {
  const { files, options, dir, onSave } = opts;

  uncss(files, options, function(error, output) {
    fs.writeFile(dir, output, function(err) {
      if (err)
        return console.log(err);
        onSave();
    });
  });
}
