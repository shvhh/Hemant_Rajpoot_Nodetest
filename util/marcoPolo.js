const { spawnSync } = require('child_process');
const child = spawnSync('node', ['util/marcoPoloChild.js']); //child.send(10);
module.exports = child.stdout; //.pipe(process.stdout);

/* child.stdout.on('data', function(data) {
  console.log('HELLO' + data);
});
child.stdout.pipe(process.stdout);
 */
