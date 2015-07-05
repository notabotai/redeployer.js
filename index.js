var sh = require('shelljs');
module.exports = function (command, cwd) {
  if (cwd) sh.cd(cwd);
  return function (req, res) {
    sh.exec('git pull');
    sh.exec('npm install --unsafe-perm');
    setTimeout(function () {
      sh.exec(command);
    }, 1000);
    res.send('restarting server');
  };
};

